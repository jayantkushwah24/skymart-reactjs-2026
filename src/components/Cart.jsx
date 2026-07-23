import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Cart = () => {
  const { cartItems, setCartItems, setShowCart } = useContext(CartContext);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  function handleQuantityIncrement(item) {
    setCartItems((prevCartItem) => {
      return prevCartItem.map((i) => {
        return i.id === item.id
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
    });
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
    } else if (item.quantity === 1) {
      handleDeleteItem(item.id);
    }
  }

  function handleClearCart() {
    setCartItems([]);
    localStorage.removeItem("sm_cartItems");
    toast.success("Cart is cleared.");
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
    <div>
      <div id="header">
        <h1>🛒 Cart</h1>
        <h1 onClick={() => setShowCart(false)}>❌</h1>
      </div>
      <hr />
      {cartItems.length !== 0 ? (
        <div id="cart-items">
          {cartItems.map((item) => {
            return (
              <div key={item.id}>
                <div>
                  <img src={item.image} alt="" width={20} />
                </div>
                <div>
                  <h1>{item.title}</h1>
                  <h3>{item.price}</h3>
                  <div>
                    <button onClick={() => handleQuantityIncrement(item)}>
                      +
                    </button>
                    {item.quantity}
                    <button onClick={() => handleQuantityDecrement(item)}>
                      -
                    </button>
                  </div>
                  <button onClick={() => handleDeleteItem(item.id)}>🗑</button>
                </div>
              </div>
            );
          })}
          <hr />
        </div>
      ) : (
        <div>
          <h1>Cart is empty</h1>
          <p>Go shop something cool!</p>
          <button onClick={() => navigate("/products")}>Browse Products</button>
        </div>
      )}

      <hr />
      <div id="checkout">
        <div id="total">
          <span>Total:</span>
          <h1>${totalAmount}</h1>
        </div>
        <button onClick={() => handleCheckout()}>Checkout➡️</button>
        <button onClick={() => handleClearCart()}>Clear Cart</button>
      </div>
      <hr />
    </div>
  );
};

export default Cart;
