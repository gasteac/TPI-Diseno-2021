import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./FormAdmin.css";

const FormAdmin = ({usuario}) => {
  return (
    <>
      <div className="pestania">{usuario}</div>
      <Form className="form-custom ">
        <Form.Group as={Row} className="justify-content-center mt-3">
          <Col xs={8}>
            <Form.Control placeholder="Buscar Usuario" />
          </Col>
          <Col xs={2}>
            <Button variant="primary" type="submit">
              Buscar
            </Button>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="justify-content-center">
          <Col xs={10} className="d-flex justify-content-between">
            <Button variant="outline-success" type="button">
              Nuevo Usuario
            </Button>
            <Button variant="outline-info" type="button">
              Ver Todos
            </Button>
            <Button variant="outline-warning" type="button">
              Editar Permisos
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </>
  );
};

export default FormAdmin;
