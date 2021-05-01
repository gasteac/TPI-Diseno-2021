import React from "react";
import NavBar from "./NavBar";

const Layout = ({items, ...props}) => {
  return (
    <>
      <NavBar items={items}/>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
