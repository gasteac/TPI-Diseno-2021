import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./FormAdmin.css";
document.querySelector('body').style.background = ""
const FormAdmin = ({usuario}) => {
  return (
    <>
      <div className="pestania">{usuario}</div>
      <Form className="form-custom " style={{background:'#50628C99', border:'none'}}>
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
            <Link to={'/admin/nuevoUsuario'}>
              <Button variant="success" type="button">
                Nuevo Usuario
              </Button>
            </Link>

            <Link to={'/admin/listadoDeUsuarios'}>
              <Button variant="info" type="button">
                Ver Todos
              </Button>  
            </Link>
            
          </Col>
        </Form.Group>
      </Form>
    </>
  );
};

export default FormAdmin;
