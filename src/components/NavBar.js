import React from "react";
import {
  Navbar,
  Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../static/images/inmoviliaria-1.svg";

const NavBar = ({ items, usuario, cliente }) => {
  return (
    <Navbar style={{backgroundColor: cliente ? "" : "#50628C"}} expand="lg">
      <Navbar.Brand>
        <Link to="/">
          <img src={Logo} alt="logo" style={{ maxHeight: "60px" }} />
          Dofus 2.0{" "}
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {items &&
            items.map((item) => (
              <Nav.Link>
                <Link
                
                  to={`/${usuario}/${item
                    .toLowerCase()
                    .replace(" ", "")
                    .replace("¿", "")}`}
                  style={{color: cliente? "black" : "white", textDecoration: "none" }}
                >
                  {item}
                </Link>
              </Nav.Link>
            ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
