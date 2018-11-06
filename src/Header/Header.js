import React from "react";
import "./Header.css";

const Header = ({ onSectionChange }) => (
    <header className="Header">
      {/* <Menu onSectionChange={onSectionChange} /> */}
      <div className="Header__banner">
        <img className="Header__logo" src="/static/img/me.png" alt="Antoine LEPROUST" />
        <h1 className="Header__name">Antoine Leproust</h1>
        <h2 className="Header__job" data-section="headline">
          Web developer @ Ubisoft Montréal
        </h2>
      </div>
    </header>
  );
  
  export default Header;