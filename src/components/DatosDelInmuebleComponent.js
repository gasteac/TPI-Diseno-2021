import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const DatosDelInmuebleComponent = ({ DatosDelInmueble }) => {
  const {
    nroInmueble,
    tipo,
    contrato,
    pais,
    CP,
    provincia,
    localidad,
    barrio,
    direccion,
    banios,
    habitaciones,
    suit,
    espacios,
    antiguedad,
    amueblada,
    servicios,
    estado,
  } = DatosDelInmueble;
  return (
    <>
      <Row>
        <Col>
          <Card.Title className="datosContacto">Inmueble</Card.Title>
          <Card.Text>{nroInmueble}</Card.Text>
        </Col>
        <Col>
          <Card.Title className="datosContacto">Tipo</Card.Title>
          <Card.Text>{tipo}</Card.Text>
        </Col>
        <Col>
          <Card.Title className="datosContacto">Contrato</Card.Title>
          <Card.Text>{contrato}</Card.Text>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card.Title className="datosContacto">País</Card.Title>
          <Card.Text>{pais}</Card.Text>
        </Col>
        <Col>
          <Card.Title className="datosContacto">Provincia</Card.Title>
          <Card.Text>{provincia}</Card.Text>
        </Col>
        <Col>
          <Card.Title className="datosContacto">Localidad</Card.Title>
          <Card.Text>{localidad}</Card.Text>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card.Title className="datosContacto">CP</Card.Title>
          <Card.Text>{CP}</Card.Text>
        </Col>
        <Col>
          <Card.Title className="datosContacto">Barrio</Card.Title>
          <Card.Text>{barrio}</Card.Text>
        </Col>
        <Col>
          <Card.Title className="datosContacto">Dirección</Card.Title>
          <Card.Text>{direccion}</Card.Text>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card.Title className="datosContacto">Cant. Baños</Card.Title>
          <Card.Text>{banios}</Card.Text>
        </Col>
        <Col>
          <Card.Title className="datosContacto">Cant. Hab.</Card.Title>
          <Card.Text>{habitaciones}</Card.Text>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card.Title className="datosContacto">Suit</Card.Title>
          <Card.Text>{suit}</Card.Text>
        </Col>
        <Col>
          <Card.Title className="datosContacto">Cant. Espacios</Card.Title>
          <Card.Text>{espacios}</Card.Text>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card.Title className="datosContacto">Antiguedad</Card.Title>
          <Card.Text>{antiguedad}</Card.Text>
        </Col>
        <Col>
          <Card.Title className="datosContacto">Amueblada</Card.Title>
          <Card.Text>{amueblada}</Card.Text>
        </Col>
        <Col>
          <Card.Title className="datosContacto">Servicios</Card.Title>
          <Card.Text>{servicios}</Card.Text>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card.Title className="datosContacto">Estado</Card.Title>
          <Card.Text>{estado}</Card.Text>
        </Col>
      </Row>
    </>
  );
};

export default DatosDelInmuebleComponent;
