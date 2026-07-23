import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ActivitySummary = () => {
  const { cartItems, totalAmount } = useContext(CartContext);

  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <div className="flex rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-lg shadow-slate-950/30">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl text-cyan-300">
          📦
        </div>
        <div className="mx-4">
          <h3 className="text-2xl font-semibold text-white">
            {cartItems.length}
          </h3>
          <p className="mt-1 text-sm font-medium text-slate-200">Cart Items</p>
          <p className="text-sm text-slate-400">In your bag</p>
        </div>
      </div>
      <div className="flex rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-lg shadow-slate-950/30">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl text-cyan-300">
          📈
        </div>
        <div className="mx-4">
          <h3 className="text-2xl font-semibold text-white">${totalAmount}</h3>
          <p className="mt-1 text-sm font-medium text-slate-200">Cart Value</p>
          <p className="text-sm text-slate-400">Ready to checkout</p>
        </div>
      </div>
      <div className="flex rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-lg shadow-slate-950/30">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl text-cyan-300">
          ⭐
        </div>
        <div className="mx-4">
          <h3 className="text-2xl font-semibold text-white">5</h3>
          <p className="mt-1 text-sm font-medium text-slate-200">
            Top Products
          </p>
          <p className="text-sm text-slate-400">Highly rated</p>
        </div>
      </div>
      <div className="flex rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-lg shadow-slate-950/30">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl text-cyan-300">
          🏷️
        </div>
        <div className="mx-4">
          <h3 className="text-2xl font-semibold text-white">
            {cartItems.length}
          </h3>
          <p className="mt-1 text-sm font-medium text-slate-200">Categories</p>
          <p className="text-sm text-slate-400">To explore</p>
        </div>
      </div>
    </section>
  );
};

export default ActivitySummary;
