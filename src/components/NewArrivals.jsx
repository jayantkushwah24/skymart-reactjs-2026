import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const NewArrivals = () => {
  const [newArrivals, setNewArrivals] = useState([]);
  const navigate = useNavigate();

  function getNewArrivals() {
    axios
      .get("https://fakestoreapi.com/products?limit=5")
      .then((response) => {
        setNewArrivals(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getNewArrivals();
  }, []);

  return (
    <section className="rounded-4xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/30 sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
            New
          </p>
          <h2 className="text-2xl font-semibold text-white">New arrivals</h2>
        </div>
        <button
          onClick={() => navigate("/products")}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10"
        >
          See all
        </button>
      </div>

      <div className="space-y-3">
        {newArrivals.map((p) => (
          <button
            key={p.id}
            onClick={() => navigate(`/products/${p.id}`)}
            className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left transition hover:border-cyan-400/40 hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <img src={p.image} alt={p.title} className="h-12 w-12 rounded-xl object-contain" />
              <div>
                <p className="text-sm font-medium text-white">${p.price}</p>
                <p className="text-sm text-slate-400">Fresh drop</p>
              </div>
            </div>
            <span className="text-cyan-300">→</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
