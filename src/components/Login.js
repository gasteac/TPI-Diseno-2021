import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Link to="/agente-inmobiliario/inicio">Agente Inmobiliario</Link>
      <Link to="/clientes/inicio">Clientes</Link>
    </>
  );
};

export default Login;
