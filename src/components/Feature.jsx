import React from "react";

const Feature = () => {
  return (
    <div className="grid grid-cols-3">
      <div className="flex">
        <div>⚡</div>
        <div>
          <h2>Fast Delivery</h2>
          <p>Same-day on select items</p>
        </div>
      </div>
      <div className="flex">
        <div>🛡️</div>
        <div>
          <h2>Secure Payments</h2>
          <p>100% encrypted checkout</p>
        </div>
      </div>
      <div className="flex">
        <div>🏷️</div>
        <div>
          <h2>Best Prices</h2>
          <p>Price-match guarantee</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
