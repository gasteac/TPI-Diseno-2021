import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import "./DatosDeContactoComponent.css";

const DatosDeContactoComponent = ({ DatosDeContacto }) => {
  const {
    nroCliente,
    tipoCliente,
    nombre,
    telefono,
    email,
    direccion,
  } = DatosDeContacto;
  return (
    <>
      <Row>
        <Col>
          <Card.Title className="datosContacto">Nro. Cliente</Card.Title>
          <Card.Text>{nroCliente}</Card.Text>
        </Col>
        <Col>
          <Card.Title className="datosContacto">Nombre y Apellido</Card.Title>
          <Card.Text>{nombre}</Card.Text>
        </Col>
        <Col>
          <Card.Title className="datosContacto">Dirección</Card.Title>
          <Card.Text>{direccion}</Card.Text>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card.Title className="datosContacto">Teléfono</Card.Title>
          <Card.Text>{telefono}</Card.Text>
        </Col>
        <Col>
          <Card.Title className="datosContacto">Tipo Cliente</Card.Title>
          <Card.Text>{tipoCliente}</Card.Text>
        </Col>
        <Col>
          <Card.Title className="datosContacto">Email</Card.Title>
          <Card.Text>{email}</Card.Text>
        </Col>
      </Row>
    </>
  );
};

export default DatosDeContactoComponent;
