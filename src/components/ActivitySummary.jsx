import React from "react";

const ActivitySummary = () => {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <div>📦</div>
        <div>
          <h1>0</h1>
          <h3>Cart Items</h3>
          <h6>In your bag</h6>
        </div>
      </div>
      <div className="flex">
        <div>📈</div>
        <div>
          <h1>$</h1>
          <h3>Cart Value</h3>
          <h6>Ready to checkout</h6>
        </div>
      </div>
      <div className="flex">
        <div>⭐</div>
        <div>
          <h1>5</h1>
          <h3>Top Products</h3>
          <h6>Highly rated</h6>
        </div>
      </div>
      <div className="flex">
        <div>🏷️</div>
        <div>
          <h1>6</h1>
          <h3>Categories</h3>
          <h6>To explore</h6>
        </div>
      </div>
    </div>
  );
};

export default ActivitySummary;
