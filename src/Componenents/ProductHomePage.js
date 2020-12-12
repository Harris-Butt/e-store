import React from "react";
import { Outlet } from "react-router";

import GenderSelector from "./GenderSelector";

function PoroductHomePage() {
  return (
    <div>
      <GenderSelector />
      <Outlet />
    </div>
  );
}

export default PoroductHomePage;
