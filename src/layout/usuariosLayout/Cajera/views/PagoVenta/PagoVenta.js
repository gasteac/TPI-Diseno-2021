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
import BackButton from "../../../../../components/BackButton";

const PagoVenta = ({history}) => {
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
  document.querySelector('body').style.background = ''
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleClickSubmit = () => handleSubmit();

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
      <Container style={{display:'flex', justifyContent:'start', marginTop:'12px'}}>
      <BackButton history={history} />
      
      <h2 className='titulosSecciones ml-5'>Pago Ventas</h2>
      
      </Container> 
      <Container style={{marginTop:'40px'}}>
        <Row>
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
            <div style={{display:'flex', justifyContent:'center'}}>
            <Button
              variant="success"
              size="lg"
              className="mt-3"
              onClick={handleShow}
            >
              Registrar Ventas
            </Button>
            </div>
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
                        name="dni"
                        placeholder="D.N.I Cliente"
                        value={dni}
                        onChange={hanldeChangeForm}
                        type="number"
                        required
                      />
                    </Col>
                  </Row>
                
                  <div style={{display:'flex', justifyContent:'flex-end'}}>
                    <Button variant="outline-danger" className="mt-3" onClick={handleClose}>
                        Cancelar
                    </Button>

                    <Button variant="outline-success" className="mt-3 ml-1" onClick={handleClose}>
                        Imprimir comprobante
                    </Button>
      
                    <Button variant="outline-success" type="submit" className="mt-3 ml-1">
                      Confirmar
                    </Button>
                  </div>
                 


                </Form>
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
        
      </Container>
    </Layout>
  );
};

export default PagoVenta;
