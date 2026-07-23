import { createContext, useState } from "react";

export let CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("sm_cartItems")) || [],
  );
  const [showCart, setShowCart] = useState(false);

  localStorage.setItem("sm_cartItems", JSON.stringify(cartItems));

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, showCart, setShowCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
