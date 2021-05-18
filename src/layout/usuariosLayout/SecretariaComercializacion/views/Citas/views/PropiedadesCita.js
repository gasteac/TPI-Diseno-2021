import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ListaPropiedades from "../../../../../../components/ListaPropiedades";
import useAuth from "../../../../../../hooks/useAuth";
import Layout from "../../../../../Layout";
const PropiedadesCita = ({ history }) => {
  const user = useAuth(history);
  document.querySelector("body").style.background = "";
  return (
    <Layout usuario={user}>
      <Container className="mt-3 flex-column ">
        <Row className="justify-content-center">
          <Col xs={4} className="d-flex justify-content-center">
            <h2 className="titulosSecciones m-auto">Propiedades</h2>
          </Col>
        </Row>
        <ListaPropiedades history={history} />
      </Container>
    </Layout>
  );
};

export default PropiedadesCita;
