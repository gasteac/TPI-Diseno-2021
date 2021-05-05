import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Link to="/agente-inmobiliario/inicio" style={{backgroundColor:"black"}}>Agente Inmobiliario</Link>
      <Link to="/clientes/inicio" style={{backgroundColor:"black"}}>Clientes</Link>
    </>
  );
};

export default Login;
