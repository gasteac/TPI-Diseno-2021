import React from "react";
import Layout from "../../Layout";
import Container from "./components/Container";
import Buscador from "./components/Buscador";
import Fondo from "../../../static/images/fondoClientes1.jpg";

const Clientes = () => {
  document.querySelector("body").style.background = `url(${Fondo})`;
  document.querySelector("body").style.backgroundSize = `cover`;
  return (
    <Layout
      items={["Inicio", "Propiedades", "Programar Cita", "¿Quienes somos?"]}
      usuario={"clientes"}
      cliente={true}
    >
      <Container>
        <Buscador />
      </Container>
    </Layout>
  );
};

export default Clientes;
