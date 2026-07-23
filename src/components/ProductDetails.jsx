import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
import Feature from "./Feature";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { prodId } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const {
    image,
    price,
    title,
    description,
    category,
    rating = {},
  } = productDetail;
  const { handleAddToCart } = useContext(CartContext);

  function getProductDetail() {
    axios
      .get(`https://fakestoreapi.com/products/${prodId}`)
      .then((response) => {
        setProductDetail(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getProductDetail();
  }, [prodId]);

  return (
    <div className="space-y-8">
      <div className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-300 shadow-lg shadow-slate-950/30">
        <NavLink to="/products" className="text-cyan-300">
          ← Back to products
        </NavLink>
        <span className="mx-2">/</span>
        <span className="capitalize text-white">{category}</span>
        <span className="mx-2">/</span>
        <span>{title}</span>
      </div>

      {loading ? (
        <div className="rounded-4xl border border-white/10 bg-slate-900/70 p-10 text-center text-slate-300">
          Loading product...
        </div>
      ) : (
        <div className="grid gap-8 rounded-4xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/30 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
          <div className="flex items-center justify-center rounded-4xl border border-white/10 bg-white/5 p-8">
            <img src={image} alt={title} className="max-h-105 object-contain" />
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
                {category}
              </p>
              <h1 className="mt-3 text-3xl font-semibold text-white">
                {title}
              </h1>
              <div className="mt-3 flex items-center gap-2 text-sm text-slate-300">
                <span>⭐ {rating.rate}</span>
                <span className="text-slate-500">•</span>
                <span>{rating.count} reviews</span>
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-300">
                {description}
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-3xl font-semibold text-cyan-300">${price}</p>
                <button
                  onClick={() => handleAddToCart(productDetail)}
                  className="rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Add to cart
                </button>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <NavLink
                  to={`/products/${Number(prodId) - 1}`}
                  className="text-sm text-slate-300 hover:text-cyan-300"
                >
                  ← Previous
                </NavLink>
                <NavLink
                  to={`/products/${Number(prodId) + 1}`}
                  className="text-sm text-slate-300 hover:text-cyan-300"
                >
                  Next →
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}

      <Feature />
    </div>
  );
};

export default ProductDetails;
