import React from "react";
import logo from "../../config/images/CH_logo.png";
import scroll from "../../config/images/scroll.png";
import "./styles.css";

const TopHeader = () => {
  return (
    <div className="top">
      <div className="register-container">
        <a href="#form">REGISTER NOW</a>
      </div>
      <div className="top-center-container">
        <img className="top-logo" src={logo} alt="logo" />
        <h1>COCO HOUSE</h1>
        <span>A BETTER LIFE</span>
      </div>
      <img className="scroll" src={scroll} alt="scroll" />
    </div>
  );
};

export default TopHeader;
