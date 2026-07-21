import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [productsList, setProductsList] = useState([]);
  const [products, setProducts] = useState([]);

  function getProductsData() {
    try {
      axios.get("https://fakestoreapi.com/products").then((response) => {
        const data = response.data;
        setProductsList(data);
        setProducts(data);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getProductsData();
  }, []);

  function handleSearchProduct(e) {
    let value = e.target.value.toLowerCase();
    let result = productsList.filter(
      (p) =>
        p.title.toLowerCase().includes(value) ||
        p.description.toLowerCase().includes(value),
    );
    setProducts(result);
  }

  function handleCategoryFilter(e) {
    let value = e.target.value;
    if (value === "all") {
      setProducts(productsList);
      return;
    }
    let result = productsList.filter((p) => p.category === value);
    setProducts(result);
  }

  function handleSorting(e) {
    let value = e.target.value;

    if (value === "default") {
      setProducts(productsList);
    } else if (value === "price-low-high") {
      let result = productsList.toSorted((a, b) => a.price - b.price);
      setProducts(result);
    } else if (value === "price-high-low") {
      let result = productsList.toSorted((a, b) => b.price - a.price);
      setProducts(result);
    } else if (value === "low-rated") {
      let result = productsList.toSorted(
        (a, b) => a.rating.rate - b.rating.rate,
      );
      setProducts(result);
    } else if (value === "top-rated") {
      let result = productsList.toSorted(
        (a, b) => b.rating.rate - a.rating.rate,
      );
      setProducts(result);
    }
  }

  return (
    <div>
      <h1>All Products</h1>
      <p>50 products found</p>
      <form action="">
        <input
          onChange={(e) => handleSearchProduct(e)}
          type="search"
          placeholder="🔍︎ Search products..."
        />
        <select name="category" onChange={(e) => handleCategoryFilter(e)}>
          <option value="all" selected>
            All Categories
          </option>
          <option value="men's clothing">Men's clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="women's clothing">Women's clothing</option>
        </select>
        <select name="sorting" onChange={(e) => handleSorting(e)}>
          <option value="default" selected>
            Featured
          </option>
          <option value="price-low-high">Price: Low » High</option>
          <option value="price-high-low">Price: High » Low</option>
          <option value="top-rated">Top Rated</option>
          <option value="low-rated">Low Rated</option>
        </select>
      </form>
      <div className="grid grid-cols-5 gap-4">
        {products.map((p) => {
          return (
            <div id="products-card" key={p.id}>
              <div>
                <p>{p.category}</p>
                <img src={p.image} alt="img" />
              </div>
              <div>
                <h1>{p.title}</h1>
                <div>
                  ⭐{p.rating.rate} ({p.rating.count})
                </div>
                <hr />
                <h2>${p.price}</h2>
                <button>Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
