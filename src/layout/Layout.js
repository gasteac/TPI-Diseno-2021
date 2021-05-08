import React from "react";
import NavBar from "../components/NavBar";

const Layout = ({cliente, ...props}) => {
  return (
    <>
      <NavBar cliente={cliente} />
      {props.children}
    </>
  );
};

export default Layout;
