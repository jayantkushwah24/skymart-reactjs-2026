import { createContext, useState } from "react";
import { toast } from "react-toastify";

export let CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("sm_cartItems")) || [],
  );
  const [showCart, setShowCart] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  localStorage.setItem("sm_cartItems", JSON.stringify(cartItems));

  function handleAddToCart(item) {
    let result = cartItems.find((i) => i.id === item.id);
    if (result) {
      toast.error("Item already added in the cart");
      return;
    }
    setCartItems([...cartItems, { ...item, quantity: 1 }]);
    toast.success(item.title + " added to the cart");
    setShowCart(true);
    localStorage.setItem(
      "sm_cartItems",
      JSON.stringify([...cartItems, { ...item, quantity: 1 }]),
    );
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        showCart,
        setShowCart,
        handleAddToCart,
        totalAmount,
        setTotalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
