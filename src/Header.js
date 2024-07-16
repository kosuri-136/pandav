import React from "react";
import "./Header.css";
import image from "./G.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-name">
        <span className="logo">
        <img src={image} alt="pic" className="image"/>
        </span>
        <span className="name">Welcome to Pandav's Portfolio</span>
      </div>

      <div></div>
    </header>
  );
};

export default Header;
