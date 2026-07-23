import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
import Feature from "./Feature";

const ProductDetails = () => {
  const { prodId } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const {
    image,
    price,
    title,
    description,
    id,
    category,
    rating = {},
  } = productDetail;

  function getProductDetail() {
    axios
      .get(`https://fakestoreapi.com/products/${prodId}`)
      .then((response) => {
        let data = response.data;
        setProductDetail(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getProductDetail();
  }, [prodId]);

  return (
    <div>
      <div>
        <NavLink to={"/products"}>⬅ products</NavLink> / {category} / {title}
      </div>
      <div id="img">
        <img src={image} alt="" />
      </div>
      <div id="text">
        <p>{category}</p>
        <h1>{prodId.title}</h1>
        <div>
          {rating.rate} ({rating.count})
        </div>
        <hr />
        <h2>${price}</h2>
        <hr />
        <p>{description}</p>
        <button>Add to Cart</button>
        <label class="add-fav">
          <input type="checkbox" />
          <i class="icon-heart">
            <i class="icon-plus-sign"></i>
          </i>
        </label>
        <div>
          <Feature />
        </div>
        <div>
          <NavLink to={`/products/${prodId - "1"}`}>◀ Previous</NavLink>
          <NavLink to={`/products/${Number(prodId) + 1}`}>Next ▶</NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
