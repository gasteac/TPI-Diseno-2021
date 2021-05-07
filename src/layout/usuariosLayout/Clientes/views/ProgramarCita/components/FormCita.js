import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import "./FormCita.css";

const FormCita = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    fecha: "",
    hora: "",
  });
  const [focus, setFocus] = useState({
    nombreFocus: false,
    apellidoFocus: false,
    emailFocus: false,
    telefonoFocus: false,
  });

  const { nombre, apellido, email, telefono, fecha, hora } = datos;
  const { nombreFocus, apellidoFocus, emailFocus, telefonoFocus } = focus;

  const handleFocus = (e) => {
    setFocus({
      ...focus,
      [e.target.name + "Focus"]: true,
    });
  };
  const handleBlur = e => {
      if (!e.target.value) {
        setFocus({
            ...focus,
            [e.target.name + "Focus"]: false,
          });
      }
  }
  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Card>
      <Card.Header as="h1">Programar Cita</Card.Header>
      <Card.Body>
        <Form>
          <Card.Title>Datos Personales</Card.Title>
          <Form.Group>
            <Form.Label
              style={{
                top: nombreFocus ? "0" : "12px",
                fontSize: nombreFocus ? '.8rem' : "1rem"
            }}
            >
              Nombre
            </Form.Label>
            <Form.Control
              onFocus={(e) => handleFocus(e)}
              onBlur = {(e) => handleBlur(e)}
              onChange={(e) => handleChange(e)}
              type="text"
              name="nombre"
              value={nombre}
              />
          </Form.Group>
          <Form.Group>
            <Form.Label
              style={{
                  top: apellidoFocus ? "0" : "12px",
                  fontSize: apellidoFocus ? '.8rem' : "1rem"
                }}
                >
              Apellido
            </Form.Label>
            <Form.Control
              onFocus={(e) => handleFocus(e)}
              onBlur = {(e) => handleBlur(e)}
              onChange={(e) => handleChange(e)}
              type="text"
              name="apellido"
              value={apellido}
              />
          </Form.Group>
          <Form.Group>
            <Form.Label
              style={{
                  top: emailFocus ? "0" : "12px",
                  fontSize: emailFocus ? '.8rem' : "1rem"
                }}
                >
              Email
            </Form.Label>
            <Form.Control
              onFocus={(e) => handleFocus(e)}
              onBlur = {(e) => handleBlur(e)}
              onChange={(e) => handleChange(e)}
              type="email"
              name="email"
              value={email}
              />
          </Form.Group>
          <Form.Group>
            <Form.Label
              style={{
                  top: telefonoFocus ? "0" : "12px",
                  fontSize: telefonoFocus ? '.8rem' : "1rem"
                }}
                >
              Número de celular
            </Form.Label>
            <Form.Control
              onFocus={(e) => handleFocus(e)}
              onBlur = {(e) => handleBlur(e)}
              onChange={(e) => handleChange(e)}
              type="tel"
              name="telefono"
              value={telefono}
            />
          </Form.Group>

          <Card.Title> Datos de la cita</Card.Title>
          <Form.Group>
            <Form.Control
              onChange={(e) => handleChange(e)}
              type="date"
              name="fecha"
              value={fecha}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              onChange={(e) => handleChange(e)}
              type="time"
              name="hora"
              value={hora}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Programar
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default FormCita;
