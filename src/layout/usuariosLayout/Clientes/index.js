import React from "react";
import Layout from "../../Layout";
import Buscador from "./components/Buscador";
import Container from "./components/Container";

const Clientes = () => {
  return (
    <Layout
      items={["Inicio", "Propiedades", "Programar Cita", "¿Quienes somos?"]}
      usuario={"clientes"}
    >
      <Container>
        <Buscador />
      </Container>
    </Layout>
  );
};

export default Clientes;
