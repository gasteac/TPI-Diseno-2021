import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import useAuth from "../../../../../hooks/useAuth";
import Layout from "../../../../Layout";
import FormCita from "./components/FormCita";

const ProgramarCitaCliente = ({history}) => {
  const user = useAuth(history)
  document.querySelector('body').style.background = ''
  return (
    <Layout
    >
      <Container className='mt-4 mb-5'>
        <FormCita />
      </Container>
    </Layout>
  );
};

export default ProgramarCitaCliente;
