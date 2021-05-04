import React from "react";
import NavBar from "./NavBar";

const Layout = ({items, usuario, ...props}) => {
  return (
    <>
      <NavBar items={items} usuario={usuario} />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
