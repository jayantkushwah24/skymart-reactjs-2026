import { nanoid } from "nanoid";
import React from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";
import { toast } from "react-toastify";

const SignIn = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  function handleSignInForm({ email, password }) {
    const users = JSON.parse(localStorage.getItem("sm_users")) || [];

    if (users.length === 0) {
      toast.error("User do not exist. Please register.");
      return;
    }

    const user = users.find((u) => u.email === email);

    if (!user) {
      toast.error("User do not exist. Please register.");
      return;
    } else if (user.password === password) {
      toast.success("Login successful");
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
      toast.success("Incorrect password.");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-transparent px-4 py-10">
      <div className="w-full max-w-md rounded-4xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/50 backdrop-blur">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl text-cyan-300">⚡</div>
          <h1 className="mt-4 text-3xl font-semibold text-white">Welcome back</h1>
          <p className="mt-2 text-sm text-slate-400">Enter your credentials to continue</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit((data) => handleSignInForm(data))}>
          <div>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="Email address"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400"
            />
            {errors.email && <p className="mt-2 text-sm text-rose-400">{errors.email.message}</p>}
          </div>
          <div>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              placeholder="Password"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400"
            />
            {errors.password && <p className="mt-2 text-sm text-rose-400">{errors.password.message}</p>}
          </div>
          <button type="submit" className="w-full rounded-full bg-cyan-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Don&apos;t have an account?{" "}
          <NavLink to="/register" className="font-semibold text-cyan-300">
            Create one
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
