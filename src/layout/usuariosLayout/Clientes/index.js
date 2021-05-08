import React, { useEffect, useContext } from "react";
import Layout from "../../Layout";
import Container from "./components/Container";
import Buscador from "./components/Buscador";
import Fondo from "../../../static/images/fondoClientes1.jpg";
import useAuth from "../../../hooks/useAuth";

const Clientes = ({history}) => {
  const user = useAuth(history)
  document.querySelector("body").style.background = `url(${Fondo})`;
  document.querySelector("body").style.backgroundSize = `cover`;
  return (
    <Layout
      cliente={true}
    >
      <Container>
        <Buscador />
      </Container>
    </Layout>
  );
};

export default Clientes;
