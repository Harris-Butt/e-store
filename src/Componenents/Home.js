import React from "react";
import { Link } from "react-router-dom";
import "../Componenents/Home";
import "../Componenents/Home.css";

function Home() {
  return (
    <>
      <Link to="products">
        <div id="main">
          <img src="https://static.zara.net/photos///contents/mkt/spots/aw20-worldwide/subhome-xmedia//w/1440/landscape_0.jpg?ts=1602699317250" alt="" />
        </div>
      </Link>
    </>
  );
}

export default Home;
