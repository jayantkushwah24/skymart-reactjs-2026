import React from "react";
import { useNavigate } from "react-router";

const WelcomeBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between">
      <div>
        <p>Good morning 👋</p>
        <h1>
          Welcome back,
          <br />
          Jayant!
        </h1>
        <p>
          Discover today's picks — hand-curated products across electronics,
          fashion, and more.
        </p>
        <div>
          <button onClick={() => navigate("/products")}>Shop Now</button>
          <button onClick={() => navigate("/products")}>
            View All Products
          </button>
        </div>
      </div>
      <div>
        <div>
          <h2>20+</h2>
          <p>Products Available</p>
        </div>
        <div>
          <h2>Free</h2>
          <p>Delivery on ₹999+</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
