import React from "react";
import { Link } from "react-router-dom";
import Logo from "../static/images/inmoviliaria-1.svg";

const NavBar = ({items, usuario}) => {
  return (
    <div className="siimple-navbar siimple-navbar--fluid bg-violetaOscuro-2 text-white navbar">
      <Link to="/" className="siimple-navbar-title logo">
        <img className="logo" src={Logo} alt="logo" />
      </Link>
      <div className="siimple--float-right">
        {items && items.map(item => (
            <Link to={`/${usuario}/${item.toLowerCase().replace(" ", '').replace("¿",'')}`} className="siimple-navbar-item">{item}</Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
