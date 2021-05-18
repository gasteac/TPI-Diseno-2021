import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  Card,
  Button,
  Form,
  Modal
} from "react-bootstrap";
import Layout from "../../../Layout";
import { Link } from "react-router-dom";
import DatosDelUsuarioRegistrar from "./DatosDelUsuarioRegistrar";
import BackButton from "../../../../components/BackButton";
document.querySelector('body').style.background = ""
const FormNuevoUsuario = ({ history }) => {
  const [validatedUsuario, setValidatedUsuario] =
    useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmitUsuario = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      handleShow();
      event.preventDefault();
      event.stopPropagation();
    }

    setValidatedUsuario(true);
  };

  return (
    <Layout>
      <Container fluid>
        <div className='mt-3' >
        <BackButton history={history} />
        </div>
        <Form
          noValidate
          validated={validatedUsuario}
          onSubmit={handleSubmitUsuario}
        >
          <Row className="mt-3 justify-content-center">
            <Col xs={8}>
              <Card>
                <Card.Header as="h2">Datos del usuario</Card.Header>
                <Card.Body>
                  <DatosDelUsuarioRegistrar />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="justify-content-center my-3">
            <Col xs={4}>
              <Button type="sumbit" variant="success" block>
                Registrar usuario
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header
          style={{
            background: "#27d85a",
            color: "#FAFAFA",
            paddingBottom: "4px",
          }}
        >
          <h4 style={{ alignSelf: "flex-end" }}>Cliente registrado!</h4>
        </Modal.Header>
        <Modal.Body>
          <h5>Usuario registrado correctamente.</h5>
          <h6>Podra observarlo en la lista de usuarios.</h6>
        </Modal.Body>
        <Modal.Footer>
          <Link to={"/admin/inicio"}>
            <Button type="primary" className="btn btn-success">
              Aceptar
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
};

export default FormNuevoUsuario;
