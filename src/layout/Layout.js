import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "../components/NavBar";

const Layout = ({items, usuario, cliente, ...props}) => {
  return (
    <>
      <NavBar items={items} usuario={usuario} cliente={cliente} />
      {props.children}
    </>
  );
};

export default Layout;
