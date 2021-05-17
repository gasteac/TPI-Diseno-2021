import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import Layout from "../../Layout";
import FormAdmin from "./components/FormAdmin";

const Admin = ({ history }) => {
  const user = useAuth(history);
  return (
    <Layout>
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
        <Row className="justify-content-center mt-3">
          <Col xs={8}>
            <FormAdmin usuario={"Secretaria de Comercialización"} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Admin;
