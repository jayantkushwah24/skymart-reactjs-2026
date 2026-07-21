import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const TopRated = () => {
  const [TopRatedProducts, setTopRatedProducts] = useState([]);
  const navigate = useNavigate();

  function getTopRatedProducts() {
    axios
      .get("https://fakestoreapi.com/products?limit=5")
      .then((response) => {
        let data = response.data;
        data.sort((a, b) => b.rating.rate - a.rating.rate);
        setTopRatedProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getTopRatedProducts();
  }, []);

  return (
    <div>
      <div>
        <h1>Top Rated</h1>
        <button onClick={() => navigate("/products")}>See All</button>
      </div>
      <div>
        {TopRatedProducts.map((p) => {
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

export default TopRated;
