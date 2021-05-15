import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const DatosAlquiler = ({ DatosAlquiler }) => {
  const {
    NomInquilino,
    PrecioAlq,
    NomPropietario,
    FechaPago,
    NroInmueble,
    NroTrans,
  } = DatosAlquiler;
  return (
    <>
      <Row>
        <Col>
          <Card.Title className="datosContacto">Datos del Inquilino</Card.Title>
          <Card.Text className="datos">{NomInquilino}</Card.Text>
        </Col>
        <Col>
          <Card.Title className="datosContacto">Precio del Alquiler</Card.Title>
          <Card.Text className="datos">{PrecioAlq}</Card.Text>
        </Col>
       
      </Row>
      <Row>
      <Col>
          <Card.Title className="datosContacto">Nombre del Propietario</Card.Title>
          <Card.Text className="datos">{NomPropietario}</Card.Text>
        </Col>
        <Col>
          <Card.Title className="datosContacto">Fecha de Pago</Card.Title>
          <Card.Text className="datos">{FechaPago}</Card.Text>
        </Col>
      </Row>
      <Row>
      <Col>
          <Card.Title className="datosContacto">Nro. Inmueble</Card.Title>
          <Card.Text className="datos">{NroInmueble}</Card.Text>
        </Col>
        <Col>
          <Card.Title className="datosContacto">Nro. Transacción</Card.Title>
          <Card.Text className="datos">{NroTrans}</Card.Text>
        </Col>
      </Row>
    </>
  );
};

export default DatosAlquiler;
