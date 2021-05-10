import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import "./DatosDeContactoComponent.css";

const DatosDeContactoComponent = ({ DatosDeContacto }) => {
  const {
    nroCliente,
    tipoCliente,
    nombre,
    apellido,
    telefono,
    email,
    direccion,
  } = DatosDeContacto;
  return (
    <>
      <Row>
        <Col>
          <Card.Title className="datosContacto">Nro. Cliente</Card.Title>
          <Card.Text className="datos2">{nroCliente}</Card.Text>
        </Col>
        <Col>
          <Card.Title className="datosContacto">Nombre y Apellido</Card.Title>
          <Card.Text  className="datos2">{nombre} {apellido}</Card.Text>
        </Col>
        <Col>
          <Card.Title className="datosContacto">Dirección</Card.Title>
          <Card.Text className="datos2">{direccion}</Card.Text>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card.Title className="datosContacto">Teléfono</Card.Title>
          <Card.Text className="datos2">{telefono}</Card.Text>
        </Col>
        <Col>
          <Card.Title className="datosContacto">Tipo Cliente</Card.Title>
          <Card.Text className="datos2">{tipoCliente}</Card.Text>
        </Col>
        <Col>
          <Card.Title className="datosContacto">Email</Card.Title>
          <Card.Text className="datos2">{email}</Card.Text>
        </Col>
      </Row>
    </>
  );
};

export default DatosDeContactoComponent;
