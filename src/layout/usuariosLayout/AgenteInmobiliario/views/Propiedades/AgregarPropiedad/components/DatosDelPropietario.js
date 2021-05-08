import React, { useEffect, useState } from "react";
import { Col, Form } from "react-bootstrap";

const DatosDelPropietario = ({ DatosDeContacto }) => {
  const [formState, setStateForm] = useState({
    nroCliente: "",
    tipoCliente: "", 
    nombre: "", 
    telefono:"",
    email: "", 
    direccion: ""
  });
  useEffect(() => {
    if(DatosDeContacto) {
        setStateForm(DatosDeContacto)
    }
  }, [])
  const { nroCliente, tipoCliente, nombre, telefono, email, direccion } = formState;
  const [nombre2, apellido] = nombre.split(" ");
  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Número de Cliente</Form.Label>
          <Form.Control
            type="number"
            placeholder="Número de Cliente"
            name="nroCliente"
            value={nroCliente}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Tipo Cliente</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tipo"
            name="tipo"
            disabled
            value={tipoCliente}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre"
            name="nombre"
            disabled
            value={nombre2}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Apellido"
            name="apellido"
            disabled
            value={apellido}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>DNI</Form.Label>
          <Form.Control
            type="number"
            placeholder="DNI"
            name="dni"
            disabled
            value={12312313}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>País</Form.Label>
          <Form.Control
            type="text"
            placeholder="País"
            name="pais"
            disabled
            value={"Argentina"}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Provincia</Form.Label>
          <Form.Control
            type="text"
            placeholder="Provincia"
            name="provincia"
            disabled
            value={"Chaco"}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            placeholder="Dirección"
            name="direccion"
            disabled
            value={direccion}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Teléfono"
            name="telefono"
            disabled
            value={telefono}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            disabled
            value={email}
          />
        </Form.Group>
      </Form.Row>
    </Form>
  );
};

export default DatosDelPropietario;
