import { createRoot } from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { CartContextProvider } from "./context/CartContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartContextProvider>
      <ToastContainer position="top-right" theme="dark" />
      <App />
    </CartContextProvider>
  </BrowserRouter>,
);
