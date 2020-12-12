import React, { useContext } from "react";
import { useParams } from "react-router";
import { AppContext } from "../App";
import "./ProductDetail.css";

function findProduct(arr, name) {
  let productIndex = arr.findIndex((p) => p.title === name);
  const product = arr[productIndex];
  console.log(product);
  return product;
}
function ProductDetail() {
  const { productId } = useParams();
  const appContext = useContext(AppContext);
  const desireProduct = findProduct(appContext.productList, productId);
  return (
    <div className="product__detail">
      <div className="column1">
        {desireProduct.secondaryImages.map((image) => (
          <div className="product__image">
            <img src={image} alt="" />
          </div>
        ))}
      </div>

      <div className="column2">
        <div className="product__title">
          <h1>{desireProduct.title}</h1>
        </div>
        <div className="product__price">
          <span>{desireProduct.price}</span>
        </div>
        <div className="product__color">
          <span>{desireProduct.id}</span>
        </div>
        <br />
        <div className="product__description">
          <span>{desireProduct.description}</span>
        </div>
        <hr />
        <div className="product__size">
          <hr></hr>
          {desireProduct.sizes.map((size) => (
            <span>
              {size}

              <br />
              <br />
            </span>
          ))}
          <hr></hr>
        </div>
        <br></br>
        <button className="product__addToCart">ADD</button>
      </div>
    </div>
  );
}

export default ProductDetail;
