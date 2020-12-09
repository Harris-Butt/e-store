import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://1000logos.net/wp-content/uploads/2017/05/Zara-log%D0%BE.png"
        alt=""
      />
      <div className="header__search">
        <h2>SEARCH</h2>
        <TextField className="header__searchInput" />
      </div>
      <div className="header__nav">
        <div className="header_option">
          <span>LOG IN</span>
        </div>
        <div className="header_option">
          <span>HELP</span>
        </div>
        <div className="header_option">
          <ShoppingBasketIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;
