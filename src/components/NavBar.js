import React from "react";
import { Link } from "react-router-dom";
import Logo from "../static/images/inmoviliaria-1.svg";

const NavBar = ({items, usuario}) => {
  return (
    <div className="siimple-navbar siimple-navbar--fluid bg-violetaOscuro-2 text-white navbar">
      <a className="siimple-navbar-title logo">
        <img className="logo" src={Logo} alt="logo" />
      </a>
      <div className="siimple--float-right">
        {items && items.map(item => (
            <Link to={`/${usuario}/${item.toLowerCase()}`} className="siimple-navbar-item">{item}</Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
