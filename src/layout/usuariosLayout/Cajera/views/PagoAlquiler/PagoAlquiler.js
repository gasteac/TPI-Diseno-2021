import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  Card,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import Layout from "../../../../Layout";
import propiedades from "../../../../../assets/propiedades.json";
import DatosDelInmuebleComponent from "../../../../../components/DatosDelInmuebleComponent";
import DatosDeContactoComponent from "../../../../../components/DatosDeContactoComponent";
import useAuth from "../../../../../hooks/useAuth";

const PagoAlquiler = ({history}) => {
    useAuth(history)
  const { DatosDelInmueble, DatosDeContacto } = propiedades[0];
  const [formState, setFormState] = useState({
    tipo: "",
    comision: 0,
    formaDePago: "",
    precio: 0,
    moneda: "",
    dni: 0,
  });

  const { tipo, comision, formaDePago, precio, moneda, dni } = formState;

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

//   const handleClickSubmit = () => handleSubmit();

  const hanldeChangeForm = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Layout>
      <Container fluid>
        <Row className="my-5">
          <Col xs={5}>
            <Card>
              <Card.Header as="h2">Datos del inmueble</Card.Header>
              <Card.Body>
                <DatosDelInmuebleComponent
                  DatosDelInmueble={DatosDelInmueble}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={7}>
            <Card>
              <Card.Header as="h2">Datos de Contacto</Card.Header>
              <Card.Body>
                <DatosDeContactoComponent DatosDeContacto={DatosDeContacto} />
              </Card.Body>
            </Card>
            <Button
              variant="success"
              block
              className="mt-5"
              onClick={handleShow}
            >
              Registrar Ventas
            </Button>
          </Col>
        </Row>

        <Modal show={show} onHide={handleClose} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Registrar pago por venta</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card>
              <Card.Header>Datos del pago</Card.Header>
              <Card.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row>
                    <Col>
                      <Card.Title className="datosContacto">
                        Tipo de venta
                      </Card.Title>
                      <Form.Control
                        className="mt-2"
                        name="tipo"
                        placeholder="Tipo de venta"
                        value={tipo}
                        onChange={hanldeChangeForm}
                        type="text"
                        required
                      />
                    </Col>
                    <Col>
                      <Card.Title className="datosContacto">Precio</Card.Title>
                      <Form.Control
                        className="mt-2"
                        name="precio"
                        placeholder="Precio"
                        value={precio}
                        onChange={hanldeChangeForm}
                        type="number"
                        required
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Card.Title className="datosContacto">
                        Porcentaje de comisión
                      </Card.Title>
                      <Form.Control
                        className="mt-2"
                        name="comision"
                        placeholder="Comisión"
                        value={comision}
                        onChange={hanldeChangeForm}
                        type="number"
                        required
                      />
                    </Col>
                    <Col>
                      <Card.Title className="datosContacto">Moneda</Card.Title>
                      <Form.Control
                        className="mt-2"
                        name="moneda"
                        placeholder="Moneda"
                        value={moneda}
                        onChange={hanldeChangeForm}
                        type="text"
                        required
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Card.Title className="datosContacto">
                        Forma de pago
                      </Card.Title>
                      <Form.Control
                        className="mt-2"
                        name="formaDePago"
                        placeholder="Forma de Pago"
                        value={formaDePago}
                        onChange={hanldeChangeForm}
                        type="text"
                        required
                      />
                    </Col>
                    <Col>
                      <Card.Title className="datosContacto">
                        D.N.I Cliente
                      </Card.Title>
                      <Form.Control
                        className="mt-2"
                        nmae="dni"
                        placeholder="D.N.I Cliente"
                        value={dni}
                        onChange={hanldeChangeForm}
                        type="number"
                        required
                      />
                    </Col>
                  </Row>
                  <Button
                    variant="outline-success"
                    type="submit"
                    block
                    className="mt-3"
                  >
                    Confirmar
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger" onClick={handleClose}>
              Cancelar
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </Layout>
  );
};

export default PagoAlquiler


