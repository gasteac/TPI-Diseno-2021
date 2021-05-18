import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import Layout from "../../Layout";
import FormAdmin from "./components/FormAdmin";
import Fondo from "../../../../src/static/images/casitablur.jpg";

const Admin = ({ history }) => {
  const user = useAuth(history);
  document.querySelector('body').style.background = `url(${Fondo})`
  document.querySelector('body').style.backgroundSize = `cover`
  return (
    <Layout user={user}>
      <Container fluid>
        <Row className="justify-content-center mt-3">
          <Col xs={8}>
            <FormAdmin usuario={"Comercialización"} />
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col xs={8}>
            <FormAdmin usuario={"Agente Inmobiliario"} />
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col xs={8}>
            <FormAdmin usuario={"Cajera"} />
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col xs={8}>
            <FormAdmin usuario={"Empleado de Marketing"} />
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col xs={8}>
            <FormAdmin usuario={"Jefa de Comercialización"} />
          </Col>
        </Row>
        <Row className="justify-content-center mt-3 mb-5">
          <Col xs={8}>
            <FormAdmin usuario={"Secretaria de Comercialización"} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Admin;
