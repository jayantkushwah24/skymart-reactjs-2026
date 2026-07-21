import React from "react";
import SignIn from "./pages/SignIn";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Products from "./pages/Products";
import About from "./pages/About";
import MainLayout from "./layout/MainLayout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products />} />
          {/* <Route path="products/:id" element={<ProductDetails />} /> */}
          <Route path="products/category/:category" element={<Products />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
