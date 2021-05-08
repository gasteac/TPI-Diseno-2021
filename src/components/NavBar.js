import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import globalContext from "../context/globalContext";
import Logo from "../static/images/inmoviliaria-1.svg";

const NavBar = ({ cliente }) => {
  const GlobalContext = useContext(globalContext);
  const { user, activeNavBarLink, setActiveNavbarLink } = GlobalContext;

  const items = {
    cliente: ["Inicio", "Propiedades", "Programar Cita", "¿Quienes Somos?"],
    agenteinmobiliario: ["Inicio", "Clientes", "Agenda", "Propiedades"],
  };

  const handleClick = (i) => {
    setActiveNavbarLink(`link-${i}`);
  };
  return (
    <Navbar style={{ backgroundColor: cliente ? "" : "#50628C" }} expand="lg">
      <Navbar.Brand>
        <Link to="/">
          <img src={Logo} alt="logo" style={{ maxHeight: "60px" }} />
          Dofus 2.0{" "}
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="ml-auto"
          variant="pills"
          defaultActiveKey={activeNavBarLink}
        >
          {user &&
            items[user].map((item, i) => (
              <Nav.Item onClick={() => handleClick(i)} key={i}>
                <Nav.Link
                  as={Link}
                  to={`/${user}/${item
                    .toLowerCase()
                    .replace(" ", "")
                    .replace("¿", "")}`}
                  style={{
                    color: cliente ? "black" : "white",
                    textDecoration: "none",
                  }}
                  eventKey={`link-${i}`}
                >
                  {item}
                </Nav.Link>
              </Nav.Item>
            ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
