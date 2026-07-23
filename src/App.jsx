import React, { useContext } from "react";
import SignIn from "./pages/SignIn";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Products from "./pages/Products";
import About from "./pages/About";
import MainLayout from "./layout/MainLayout";
import ProductDetails from "./components/ProductDetails";
import { CartContext } from "./context/CartContext";
import Cart from "./components/Cart";

const App = () => {
  const { showCart } = useContext(CartContext);

  return (
    <div className="min-h-screen bg-transparent text-slate-100">
      {showCart && <Cart />}
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:prodId" element={<ProductDetails />} />
          <Route path="products/category/:category" element={<Products />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
