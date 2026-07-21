import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const ShopByCategory = () => {
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  function getProductCategory() {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        let data = response.data;
        setCategory(data);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(category);
  }

  useEffect(() => {
    getProductCategory();
  }, []);

  return (
    <div>
      <h1>Shop By Category</h1>
      <div className="grid grid-cols-4">
        {category.map((c, idx) => {
          return (
            <div key={idx} onClick={() => navigate(`/products/category/${c}`)}>
              <div>📦</div>
              <div>{c}</div>
              <div></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShopByCategory;
