import React from "react";
import logo from "../../assets/dark_logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Footer;
