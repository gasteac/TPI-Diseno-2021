import React, { useContext, useState } from "react";
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
import InquilinoPropietario from "./Inquilino-Propietario.json";
import useAuth from "../../../../../hooks/useAuth";
import Alquiler from "./DatosAlquiler";
import { Link } from "react-router-dom";
import Comprobante from "./pagoalquiler.jpg"
import globalContext from "../../../../../context/globalContext";

const PagoAlquiler = ({ history }) => {
  useAuth(history);
  const { DatosAlquiler } = InquilinoPropietario[0];
  const GlobalContext = useContext(globalContext);
  const {setActiveNavbarLink} = GlobalContext;
  const [formState, setFormState] = useState({
    mes: "",
    año: "",
    intereses: "",
    precio: "",
    totalapagar: "",
    formapago: "",
  });

  const { mes, year, intereses, precio, totalapagar, formapago } = formState;

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else handleShow();
    setValidated(true);
    event.preventDefault();
    event.stopPropagation();
  };

  const hanldeChangeForm = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  document.querySelector("body").style.background = "";

  return (
    <Layout>
      <Container
        fluid
      >
        <Row className="justify-content-center">
          <h2 className="titulosSecciones ml-5">Pago Alquiler</h2>
        </Row>
        <Row>
          <Col xs={5}>
            <Card>
              <Card.Header as="h2">Registrar pago por alquiler</Card.Header>
              <Card.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row style={{ marginLeft: "5px", marginRight: "5px" }}>
                    <Card.Title className="datosContacto">
                      Datos del Pago
                    </Card.Title>
                    <Form.Control
                      className="mt-2"
                      name="mes"
                      placeholder="Mes"
                      value={mes}
                      onChange={hanldeChangeForm}
                      type="text"
                      required
                    />

                    <Form.Control
                      className="mt-2"
                      name="year"
                      placeholder="Año"
                      value={year}
                      onChange={hanldeChangeForm}
                      type="number"
                      required
                    />

                    <Form.Control
                      className="mt-2"
                      name="intereses"
                      placeholder="Intereses"
                      value={intereses}
                      onChange={hanldeChangeForm}
                      type="number"
                      required
                    />

                    <Form.Control
                      className="mt-2"
                      name="precio"
                      placeholder="Precio"
                      value={precio}
                      onChange={hanldeChangeForm}
                      type="money"
                      required
                    />

                    <Form.Control
                      className="mt-2"
                      name="totalapagar"
                      placeholder="Total a pagar"
                      value={totalapagar}
                      onChange={hanldeChangeForm}
                      type="number"
                      required
                    />

                    <Form.Control
                      className="mt-2"
                      as="select"
                      name="formapago"
                      required
                      value={formapago}
                      onChange={hanldeChangeForm}
                    >
                      <option hidden disabled value="">
                        Seleccione un metodo de pago
                      </option>
                      <option>MercadoPago</option>
                      <option>Tarjeta de Credito</option>
                    </Form.Control>
                  </Row>
                  <Button
                    variant="success"
                    type="submit"
                    block
                    className="mt-3"
                  >
                    Confirmar
                  </Button>
                  <Modal show={show} onHide={handleClose} backdrop="static">
                    <Modal.Header
                      style={{ background: "#27d85a", color: "#FAFAFA" }}
                    >
                      Pago de alquiler registrado!
                    </Modal.Header>

                    <Modal.Footer>
                    
                        <Button type="primary" href={Comprobante} variant="outline-success" target="_blank" rel="noopener noreferrer">
                          Imprimir comprobante
                        </Button>
                 

                      <Link to={`/cajera/inicio`}>
                        <Button type="primary" className="btn btn-success"  onClick={()=>setActiveNavbarLink("link-0")}>
                          Aceptar
                        </Button>
                      </Link>
                    </Modal.Footer>
                  </Modal>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={7}>
            <Card>
              <Card.Header as="h2">Datos del inmueble</Card.Header>
              <Card.Body>
                <Alquiler DatosAlquiler={DatosAlquiler} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default PagoAlquiler;
