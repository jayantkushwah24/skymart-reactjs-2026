import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Cart = () => {
  const { cartItems, setCartItems, setShowCart, totalAmount, setTotalAmount } =
    useContext(CartContext);
  const navigate = useNavigate();

  function handleQuantityIncrement(item) {
    item.quantity += 1;
    let newCartItems = [...cartItems];
    setCartItems(newCartItems);
  }

  function handleDeleteItem(itemId) {
    let updatedCart = cartItems.filter((i) => i.id !== itemId);
    setCartItems(updatedCart);
  }

  function handleQuantityDecrement(item) {
    if (item.quantity >= 1) {
      setCartItems((prevCartItem) => {
        return prevCartItem.map((i) => {
          if (i.id === item.id) {
            return i.quantity > 1 ? { ...i, quantity: i.quantity - 1 } : i;
          }
          return i;
        });
      });
    }
  }

  function handleClearCart() {
    setCartItems([]);
    localStorage.removeItem("sm_cartItems");
    toast.success("Cart is cleared.");
    setShowCart(false);
  }

  function handleCheckout() {
    setCartItems([]);
    localStorage.removeItem("sm_cartItems");
    toast.success("Order has been placed.");
    setShowCart(false);
  }

  useEffect(() => {
    let result = cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    setTotalAmount(result);
  }, [cartItems]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setShowCart(false)}
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-md transition-all duration-300"
      />

      {/* Cart Drawer */}
      <div className="fixed right-0 top-0 z-50 flex h-screen w-full max-w-md flex-col border-l border-white/10 bg-slate-950/95 text-white shadow-2xl backdrop-blur-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 p-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
              Shopping Cart
            </p>
            <h1 className="mt-1 text-3xl font-semibold">My Cart</h1>
          </div>

          <button
            onClick={() => setShowCart(false)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 transition hover:bg-red-500"
          >
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 space-y-5 overflow-y-auto p-6">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="rounded-4xl border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-slate-950/30"
              >
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-24 w-24 rounded-2xl bg-white object-contain p-2"
                  />

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h2 className="line-clamp-2 text-sm font-semibold">
                        {item.title}
                      </h2>

                      <p className="mt-2 text-xl font-bold text-cyan-300">
                        ${item.price}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                        <button
                          onClick={() => handleQuantityDecrement(item)}
                          className="text-lg font-bold transition hover:text-red-400"
                        >
                          −
                        </button>

                        <span className="font-semibold">{item.quantity}</span>

                        <button
                          onClick={() => handleQuantityIncrement(item)}
                          className="text-lg font-bold transition hover:text-green-400"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => handleDeleteItem(item.id)}
                        className="rounded-full bg-red-500/10 p-3 text-red-400 transition hover:bg-red-500 hover:text-white"
                      >
                        🗑
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="mt-24 flex flex-col items-center text-center">
              <div className="text-8xl">🛒</div>

              <h2 className="mt-5 text-2xl font-semibold">
                Your cart is empty
              </h2>

              <p className="mt-2 text-slate-400">
                Looks like you haven't added anything yet.
              </p>

              <button
                onClick={() => {
                  setShowCart(false);
                  navigate("/products");
                }}
                className="mt-8 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Browse Products
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-white/10 bg-slate-900/70 p-6">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-slate-400">Total Amount</span>

              <h2 className="text-3xl font-bold text-cyan-300">
                ${totalAmount.toFixed(2)}
              </h2>
            </div>

            <button
              onClick={handleCheckout}
              className="mb-3 w-full rounded-full bg-cyan-400 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Checkout →
            </button>

            <button
              onClick={handleClearCart}
              className="w-full rounded-full border border-red-500 py-3 font-semibold text-red-400 transition hover:bg-red-500 hover:text-white"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
