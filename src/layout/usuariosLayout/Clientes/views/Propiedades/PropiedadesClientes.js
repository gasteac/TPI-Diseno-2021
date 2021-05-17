import React from "react";
import Layout from "../../../../Layout";
import ListaPropiedades from "../../../../../components/ListaPropiedades/";
import useAuth from "../../../../../hooks/useAuth";
import BackButton from "../../../../../components/BackButton";
import { Container, Row, Col } from "react-bootstrap";

const PropiedadesClientes = ({ history }) => {
  // eslint-disable-next-line
  const user = useAuth(history);

  document.querySelector("body").style.background = "";
  return (
    <Layout>
      <Container className="mt-3 flex-column ">
        <Row className="justify-content-center">
          <h2 className="titulosSecciones m-auto">Propiedades</h2>
        </Row>
        <Row>
          <ListaPropiedades history={history} />
        </Row>
      </Container>
    </Layout>
  );
};

export default PropiedadesClientes;
