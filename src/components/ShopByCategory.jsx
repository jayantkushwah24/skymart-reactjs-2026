import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const ShopByCategory = () => {
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  function getProductCategory() {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getProductCategory();
  }, []);

  return (
    <section className="rounded-4xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/30 sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
            Categories
          </p>
          <h2 className="text-2xl font-semibold text-white">Shop by category</h2>
        </div>
        <button
          onClick={() => navigate("/products")}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10"
        >
          Browse all
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {category.map((c, idx) => (
          <button
            key={idx}
            onClick={() => navigate(`/products/category/${c}`)}
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl text-cyan-300">
              📦
            </div>
            <h3 className="text-lg font-semibold capitalize text-white">
              {c}
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Discover premium picks in this category.
            </p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategory;
