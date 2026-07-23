import React, { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const data = JSON.parse(localStorage.getItem("sm_session"));
  const navigate = useNavigate();
  const { setShowCart } = useContext(CartContext);

  useEffect(() => {
    if (data === null) {
      navigate("/signin");
      toast.error("Please signin");
    }
  }, [data, navigate]);

  function handleLogout() {
    const confirmLogout = confirm("Are you sure you want to logout?");
    if (!confirmLogout) return;
    localStorage.removeItem("sm_session");
    navigate("/signin");
    toast.success("Logged out successfully.")
  }

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate("/home")}
          className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 transition hover:border-cyan-400/40 hover:bg-white/10"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/20 text-lg text-cyan-300">
            ⚡
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-white">SkyMart</p>
            <p className="text-xs text-slate-400">Modern essentials</p>
          </div>
        </button>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1.5 md:flex">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `rounded-full px-3 py-2 text-sm transition ${isActive ? "bg-cyan-500/20 text-cyan-300" : "text-slate-300 hover:bg-white/10 hover:text-white"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `rounded-full px-3 py-2 text-sm transition ${isActive ? "bg-cyan-500/20 text-cyan-300" : "text-slate-300 hover:bg-white/10 hover:text-white"}`
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `rounded-full px-3 py-2 text-sm transition ${isActive ? "bg-cyan-500/20 text-cyan-300" : "text-slate-300 hover:bg-white/10 hover:text-white"}`
            }
          >
            About
          </NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 sm:flex">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-cyan-400 to-blue-500 text-sm font-semibold text-slate-950">
              {data?.name?.[0] || "U"}
            </div>
            <span className="text-sm font-medium text-slate-200">
              {data?.name || "Guest"}
            </span>
          </div>
          <button
            onClick={() => setShowCart(true)}
            className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-500/20"
          >
            🛒 Cart
          </button>
          <button
            onClick={handleLogout}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
