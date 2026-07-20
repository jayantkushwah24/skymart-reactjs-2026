import React from "react";
import SignIn from "./pages/SignIn";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Register from "./pages/Register";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
    </div>
  );
};

export default App;
