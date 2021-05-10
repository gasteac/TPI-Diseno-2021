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
          <Card.Text className="datos">{nroInmueble}</Card.Text>
        </Col>
        <Col>
          <Card.Title className="datosContacto">Tipo</Card.Title>
          <Card.Text className="datos">{tipo}</Card.Text>
        </Col>
        <Col>
          <Card.Title className="datosContacto">Contrato</Card.Title>
          <Card.Text className="datos">{contrato}</Card.Text>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card.Title className="datosContacto">País</Card.Title>
          <Card.Text className="datos">{pais}</Card.Text>
        </Col>
        <Col>
          <Card.Title className="datosContacto">Provincia</Card.Title>
          <Card.Text className="datos">{provincia}</Card.Text>
        </Col>
        <Col>
          <Card.Title className="datosContacto">Localidad</Card.Title>
          <Card.Text className="datos">{localidad}</Card.Text>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card.Title className="datosContacto">CP</Card.Title>
          <Card.Text className="datos">{CP}</Card.Text>
        </Col>
        <Col>
          <Card.Title className="datosContacto">Barrio</Card.Title>
          <Card.Text className="datos">{barrio}</Card.Text>
        </Col>
        <Col>
          <Card.Title className="datosContacto">Dirección</Card.Title>
          <Card.Text className="datos">{direccion}</Card.Text>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card.Title className="datosContacto">Baños</Card.Title>
          <Card.Text className="datos">{banios}</Card.Text>
        </Col>
        <Col>
          <Card.Title className="datosContacto">Habitaciones</Card.Title>
          <Card.Text className="datos">{habitaciones}</Card.Text>
        </Col>
        <Col>
          <Card.Title className="datosContacto">Espacios</Card.Title>
          <Card.Text className="datos">{espacios}</Card.Text>
        </Col>
        <Col>
          <Card.Title className="datosContacto">Suit</Card.Title>
          <Card.Text className="datos">{suit}</Card.Text>
        </Col>
      </Row>
      <Row>
        <Col >
          <Card.Title className="datosContacto">Antiguedad</Card.Title>
          <Card.Text className="datos">{antiguedad}</Card.Text>
        </Col>
        <Col xs={5}>
          <Card.Title className="datosContacto">Servicios</Card.Title>
          <Card.Text className="datos">
            {servicios.map((servicio) => servicio + " ")}
          </Card.Text>
        </Col>
        <Col>
          <Card.Title className="datosContacto">Amueblada</Card.Title>
          <Card.Text className="datos">{amueblada}</Card.Text>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card.Title className="datosContacto">Estado</Card.Title>
          <Card.Text className="datos">{estado}</Card.Text>
        </Col>
      </Row>
    </>
  );
};

export default DatosDelInmuebleComponent;
