import { nanoid } from "nanoid";
import React from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";

const SignIn = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  function handleSignInForm({ email, password }) {
    let users = JSON.parse(localStorage.getItem("sm_users")) || [];

    if (users.length === 0) {
      alert("User do not exist. Please register.");
      return;
    }

    let user = users.find((u) => u.email === email) || [];

    console.log(user.password, password);

    if (user.length === 0) {
      alert("User do not exist. Please register.");
      return;
    } else if (user.password === password) {
      alert("Login successful");
      localStorage.setItem(
        "sm_session",
        JSON.stringify({
          id: nanoid(),
          email,
          joinedAt: new Date().toISOString(),
          name: user.name,
          avatar: user.avatar,
        }),
      );
      navigate("/home");
    } else {
      alert("Incorrect password.");
    }
  }

  return (
    <div>
      <h1>Sign in</h1>
      <p>Enter your credentials to continue</p>
      <form action="" onSubmit={handleSubmit((data) => handleSignInForm(data))}>
        <input
          {...register("email")}
          type="email"
          placeholder="Email address"
        />
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        <button type="submit">Sign in</button>
        <p>
          Don't have an account?{" "}
          <NavLink to={"/register"}>Create one</NavLink>{" "}
        </p>
      </form>
    </div>
  );
};

export default SignIn;
