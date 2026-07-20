import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const [users, setUsers] = useState([]);

  function handleRegisterForm({ fullName, email, password, confirmPassword }) {
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    
    const obj = {
      id: nanoid(),
      avatar: fullName.charAt(0).toUpperCase(),
      name : fullName,
      email,
      password,
      createdAt: new Date().toISOString(),
    };

    users.push(obj);
    setUsers(users);
    localStorage.setItem("sm_users", JSON.stringify(users));

    alert("Account Created Successfully!");
    reset();
    navigate("/signin")
  }

  return (
    <div>
      <h1>Create account</h1>
      <form onSubmit={handleSubmit((data) => handleRegisterForm(data))}>
        {errors.fullName && <p>{errors.fullName.message}</p>}
        <input
          {...register("fullName", {
            required: { value: true, message: "Full name is required" },
            pattern: {
              value: /^[a-zA-Z'\s-]{2,50}$/,
              message: "Please enter valid full name",
            },
          })}
          type="text"
          placeholder="Full name"
        />

        {errors.email && <p>{errors.email.message}</p>}
        <input
          {...register("email", {
            type: "email",
            required: { value: true, message: "Email address is required" },
            pattern: {
              message: "Email address is invalid",
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            },
          })}
          type="text"
          placeholder="Email address"
        />

        {errors.password && <p>{errors.password.message}</p>}
        <input
          {...register("password", {
            required: { value: true, message: "Password is required" },

            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.",
            },
          })}
          type="text"
          placeholder="Password (min 8 char)"
        />

        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        <input
          {...register("confirmPassword", {
            required: { value: true, message: "Please confirm password" },
          })}
          type="text"
          placeholder="Confirm password"
        />

        <button type="submit">Create account</button>

        <p>
          Already have an account?{" "}
          <NavLink to={"/signin"}>Sign in</NavLink>{" "}
        </p>
      </form>
    </div>
  );
};

export default Register;
