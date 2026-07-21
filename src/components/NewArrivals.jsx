import axios from "axios";
import React, { useEffect, useState } from "react";

const NewArrivals = () => {
  const [newArrivals, setNewArrivals] = useState([]);

  function getNewArrivals() {
    axios
      .get("https://fakestoreapi.com/products?limit=5")
      .then((response) => {
        let data = response.data;
        setNewArrivals(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getNewArrivals();
  }, []);

  return (
    <div>
      <div>
        <h1>New Arrivals</h1>
        <button onClick={() => navigation("/products")}>See All</button>
      </div>
      <div>
        {newArrivals.map((p) => {
          return (
            <div
              onClick={() => navigate(`/products/${p.id}`)}
              key={p.id}
              className="flex justify-between"
            >
              <div className="flex">
                <img src={p.image} width={30} alt="" />
                <h1>${p.price}</h1>
              </div>
              <div>🛒</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewArrivals;
