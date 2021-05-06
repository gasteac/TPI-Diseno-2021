import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../../../../Layout";

const QuienesSomos = () => {
  return (
    <Layout
      items={["Inicio", "Propiedades", "Programar Cita", "¿Quienes somos?"]}
      usuario={"clientes"}
    >
      <Container fluid="md">
        <Row>
          <Col>
            <div style={{border: "1px solid red;"}}>hola</div>
          </Col>
          <Col>
            <div style={{border: "1px solid red;"}}>hola</div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default QuienesSomos;
