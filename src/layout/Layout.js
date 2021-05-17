import React from "react";
import NavBar from "../components/NavBar";
import './Layout.css'

const Layout = ({cliente, ...props}) => {
  return (
    <>
      <NavBar cliente={cliente} />
      {props.children}
    </>
  );
};

export default Layout;
