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
import InquilinoPropietario from "./Inquilino-Propietario.json";
import DatosAlquiler from "./DatosAlquiler";
import useAuth from "../../../../../hooks/useAuth";
import BackButton from "../../../../../components/BackButton";
import Alquiler from "./DatosAlquiler";


const PagoAlquiler = ({history}) => {
    useAuth(history)
  const {DatosAlquiler} = InquilinoPropietario[0];

  const [formState, setFormState] = useState({
    mes: "",
    año: 0,
    intereses: "",
    precio: "",
    totalapagar: 0,
    formapago: "",
  });

  const { mes, año, intereses, precio, totalapagar, formapago } = formState;

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
      <Container style={{display:'flex', justifyContent:'start', marginTop:'12px'}}>
      <BackButton history={history} />
      
      <h2 className='titulosSecciones ml-5'>Pago Alquiler</h2>
      
      </Container> 
      <Container fluid>
        <Row className="my-5">
          <Col xs={5}>
            <Card>
              <Card.Header as="h2">Datos del inmueble</Card.Header>
              <Card.Body>
                <Alquiler
                  DatosAlquiler={DatosAlquiler}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default PagoAlquiler


