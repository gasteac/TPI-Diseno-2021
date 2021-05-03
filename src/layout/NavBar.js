import React from "react";
import Logo from "../static/images/inmoviliaria-1.svg";

const NavBar = ({items}) => {
  return (
    <div className="siimple-navbar siimple-navbar--fluid bg-violetaOscuro-2 text-white navbar">
      <a className="siimple-navbar-title logo">
        <img className="logo" src={Logo} alt="logo" />
      </a>
      <div className="siimple--float-right">
        {items.map(item => (
            <a className="siimple-navbar-item">{item}</a>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
