import React from "react";
import { Outlet } from "react-router";
import TypeSelector from "./TypeSelector";

function GenderProducts() {
  return (
    <div>
      <TypeSelector />
      <Outlet />
    </div>
  );
}

export default GenderProducts;
