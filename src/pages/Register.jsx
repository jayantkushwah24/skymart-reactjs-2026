import { nanoid } from "nanoid";
import React from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";
import { toast } from "react-toastify";

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

  function handleRegisterForm({ fullName, email, password, confirmPassword }) {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("sm_users")) || [];
    const obj = {
      id: nanoid(),
      avatar: fullName.charAt(0).toUpperCase(),
      name: fullName,
      email,
      password,
      createdAt: new Date().toISOString(),
    };

    const updatedUsers = [...existingUsers, obj];
    localStorage.setItem("sm_users", JSON.stringify(updatedUsers));

    toast.success("Account Created Successfully!");
    reset();
    navigate("/signin");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-transparent px-4 py-10">
      <div className="w-full max-w-lg rounded-4xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/50 backdrop-blur">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl text-cyan-300">✨</div>
          <h1 className="mt-4 text-3xl font-semibold text-white">Create your account</h1>
          <p className="mt-2 text-sm text-slate-400">Join SkyMart and unlock premium shopping.</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit((data) => handleRegisterForm(data))}>
          <div>
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
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400"
            />
            {errors.fullName && <p className="mt-2 text-sm text-rose-400">{errors.fullName.message}</p>}
          </div>

          <div>
            <input
              {...register("email", {
                required: { value: true, message: "Email address is required" },
                pattern: {
                  message: "Email address is invalid",
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                },
              })}
              type="text"
              placeholder="Email address"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400"
            />
            {errors.email && <p className="mt-2 text-sm text-rose-400">{errors.email.message}</p>}
          </div>

          <div>
            <input
              {...register("password", {
                required: { value: true, message: "Password is required" },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.",
                },
              })}
              type="password"
              placeholder="Password (min 8 char)"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400"
            />
            {errors.password && <p className="mt-2 text-sm text-rose-400">{errors.password.message}</p>}
          </div>

          <div>
            <input
              {...register("confirmPassword", {
                required: { value: true, message: "Please confirm password" },
              })}
              type="password"
              placeholder="Confirm password"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400"
            />
            {errors.confirmPassword && <p className="mt-2 text-sm text-rose-400">{errors.confirmPassword.message}</p>}
          </div>

          <button type="submit" className="w-full rounded-full bg-cyan-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
            Create account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Already have an account?{" "}
          <NavLink to="/signin" className="font-semibold text-cyan-300">
            Sign in
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
