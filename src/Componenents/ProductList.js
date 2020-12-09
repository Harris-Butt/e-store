import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import "./ProductList.css";

function IsGenderValueSet(gender) {
  if (gender !== "") {
    return true;
  } else {
    return false;
  }
}

function AreBothGenderAndWearTypeValuesSet(gender, wearType) {
  if ((gender !== "") & (wearType !== "")) {
    return true;
  } else {
    return false;
  }
}

function ProductList() {
  const appContext = useContext(AppContext);
  return (
    <>
      <div className="wrapper">
        {AreBothGenderAndWearTypeValuesSet(
          appContext.stateValue.gender,
          appContext.stateValue.wearType
        )
          ? appContext.productList
              .filter(
                (product) =>
                  product.gender === appContext.stateValue.gender &&
                  product.type === appContext.stateValue.wearType
              )
              .map((product) => <img src={product.mainImage} />)
          : IsGenderValueSet(appContext.stateValue.gender)
          ? appContext.productList
              .filter(
                (product) => product.gender === appContext.stateValue.gender
              )
              .map((product) => <img src={product.mainImage} />)
          : appContext.productList.map((product) => (
              <div className="productImage">
                <img src={product.mainImage} />
              </div>
            ))}
      </div>
    </>
  );
}

export default ProductList;
