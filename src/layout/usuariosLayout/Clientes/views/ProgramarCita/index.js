import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../../../../Layout";
import FormCita from "./components/FormCita";

const ProgramarCitaCliente = () => {
  document.querySelector('body').style.background = ''
  return (
    <Layout
      items={["Inicio", "Propiedades", "Programar Cita", "¿Quienes somos?"]}
      usuario={"clientes"}
    >
      <Container className='mt-4 mb-5'>
        <FormCita />
      </Container>
    </Layout>
  );
};

export default ProgramarCitaCliente;
