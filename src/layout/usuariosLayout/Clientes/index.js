import React from "react";
import Layout from "../../Layout";
import Container from "./components/Container";
import Buscador from "./components/Buscador";

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
