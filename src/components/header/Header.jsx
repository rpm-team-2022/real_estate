import React from "react";
import logo from "../../assets/dark_logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Header;
