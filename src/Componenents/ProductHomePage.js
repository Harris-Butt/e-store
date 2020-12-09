import React, { useContext, useState, useReducer } from "react";
import { Outlet } from "react-router";
import { AppContext } from "../App";
import GenderSelector from "./GenderSelector";
import ProductList from "./ProductList";

function PoroductHomePage() {
  const appContext = useContext(AppContext);

  function showComponent() {
    if (appContext.stateValue.gender === "") {
      return <ProductList />;
    } else {
      return;
    }
  }
  return (
    <div>
      <GenderSelector />
      <Outlet />
    </div>
  );
}

export default PoroductHomePage;
