import React, { useContext } from "react";
import { useParams } from "react-router";
import products from "../Products";

function Product() {
  const { productId } = useParams();
  const r_product = products.find((product) => product.title === productId);

  return (
    <div>
      <h1>Hello</h1>
      <h2>{r_product.title}</h2>
      <h2>{r_product.id}</h2>
      <h2>{r_product.price}</h2>
    </div>
  );
}

export default Product;
