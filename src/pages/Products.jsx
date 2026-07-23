import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { CartContext } from "../context/CartContext";

const Products = () => {
  const [productsList, setProductsList] = useState([]);
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const navigate = useNavigate();
  const { cartItems, setCartItems, handleAddToCart } = useContext(CartContext);

  let url = "https://fakestoreapi.com/products";

  if (category) {
    url = url + "/category/" + category;
  }

  function getProductsData() {
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        setProductsList(data);
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  useEffect(() => {
    getProductsData();
  }, [url]);

  function handleSearchProduct(e) {
    const value = e.target.value.toLowerCase();
    const result = productsList.filter(
      (p) =>
        p.title.toLowerCase().includes(value) ||
        p.description.toLowerCase().includes(value),
    );
    setProducts(result);
  }

  function handleCategoryFilter(e) {
    const value = e.target.value;
    if (value === "all") {
      setProducts(productsList);
      return;
    }
    const result = productsList.filter((p) => p.category === value);
    setProducts(result);
  }

  function handleSorting(e) {
    const value = e.target.value;

    if (value === "default") {
      setProducts(productsList);
    } else if (value === "price-low-high") {
      const result = [...productsList].sort((a, b) => a.price - b.price);
      setProducts(result);
    } else if (value === "price-high-low") {
      const result = [...productsList].sort((a, b) => b.price - a.price);
      setProducts(result);
    } else if (value === "low-rated") {
      const result = [...productsList].sort(
        (a, b) => a.rating.rate - b.rating.rate,
      );
      setProducts(result);
    } else if (value === "top-rated") {
      const result = [...productsList].sort(
        (a, b) => b.rating.rate - a.rating.rate,
      );
      setProducts(result);
    }
  }

  return (
    <div className="space-y-6">
      <div className="rounded-4xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/30 sm:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
              Catalog
            </p>
            <h1 className="text-3xl font-semibold text-white">All products</h1>
            <p className="mt-2 text-slate-400">
              {products.length} products ready to explore
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              onChange={handleSearchProduct}
              type="search"
              placeholder="Search products..."
              className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-slate-400"
            />
            <select
              name="category"
              onChange={handleCategoryFilter}
              defaultValue="all"
              className="cursor-pointer appearance-none rounded-full border border-white/10 bg-slate-800 px-5 py-3 pr-10 text-sm text-white shadow-lg outline-none transition-all duration-300 hover:border-cyan-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
            >
              <option className="bg-slate-900 text-white" value="all">
                All Categories ⏷
              </option>
              <option
                className="bg-slate-900 text-white"
                value="men's clothing"
              >
                Men's Clothing
              </option>
              <option className="bg-slate-900 text-white" value="jewelery">
                Jewelery
              </option>
              <option
                className="bg-slate-900 text-white"
                value="women's clothing"
              >
                Women's Clothing
              </option>
              <option className="bg-slate-900 text-white" value="electronics">
                Electronics
              </option>
            </select>
            <select
              name="sorting"
              onChange={handleSorting}
              className="cursor-pointer appearance-none rounded-full border border-white/10 bg-slate-800 px-5 py-3 pr-10 text-sm text-white shadow-lg outline-none transition-all duration-300 hover:border-cyan-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
              defaultValue="default"
            >
              <option className="bg-slate-900 text-white" value="default">
                Featured  ⏷
              </option>
              <option
                className="bg-slate-900 text-white"
                value="price-low-high"
              >
                Price: Low » High
              </option>
              <option
                className="bg-slate-900 text-white"
                value="price-high-low"
              >
                Price: High » Low
              </option>
              <option className="bg-slate-900 text-white" value="top-rated">
                Top Rated
              </option>
              <option className="bg-slate-900 text-white" value="low-rated">
                Low Rated
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((p) => (
          <div
            key={p.id}
            className="group overflow-hidden rounded-4xl border border-white/10 bg-slate-900/70 shadow-xl shadow-slate-950/30"
          >
            <div
              className="cursor-pointer p-5"
              onClick={() => navigate(`/products/${p.id}`)}
            >
              <div className="mb-4 flex items-center justify-between text-sm text-slate-400">
                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-cyan-300">
                  {p.category}
                </span>
                <span>⭐ {p.rating.rate}</span>
              </div>
              <img
                src={p.image}
                alt={p.title}
                className="mx-auto h-52 w-full object-contain"
              />
            </div>
            <div className="space-y-4 border-t border-white/10 p-5">
              <div>
                <h2 className="text-lg font-semibold text-white">{p.title}</h2>
                <p className="mt-2 line-clamp-3 text-sm text-slate-400">
                  {p.description}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xl font-semibold text-cyan-300">
                  ${p.price}
                </p>
                <button
                  onClick={() => handleAddToCart(p)}
                  className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
