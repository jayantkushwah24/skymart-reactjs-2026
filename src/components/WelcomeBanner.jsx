import React from "react";
import { useNavigate } from "react-router";

const WelcomeBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="overflow-hidden rounded-4xl border border-white/10 bg-slate-900/70 shadow-2xl shadow-cyan-950/30">
      <div className="grid gap-8 p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
        <div className="space-y-6">
          <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-200">
            Good morning 👋 Fresh deals are waiting
          </div>
          <div className="space-y-3">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Welcome back, <span className="text-cyan-300">Jayant!</span>
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-300">
              Discover today’s hand-picked picks across electronics, fashion,
              and everyday essentials.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => navigate("/products")}
              className="rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Shop Now
            </button>
            <button
              onClick={() => navigate("/products")}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 font-semibold text-slate-200 transition hover:bg-white/10"
            >
              View All Products
            </button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-3xl font-semibold text-white">20+</p>
            <p className="mt-2 text-sm text-slate-400">Products available</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-3xl font-semibold text-white">Free</p>
            <p className="mt-2 text-sm text-slate-400">Delivery on ₹999+</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeBanner;
