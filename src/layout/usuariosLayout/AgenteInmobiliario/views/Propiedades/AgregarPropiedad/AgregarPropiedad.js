import React, { useState, useContext } from "react";
import { Col, Container, Row, Card, Button, Form, Modal } from "react-bootstrap";
import Layout from "../../../../../Layout";
import DatosDeLaPropiedadForm from "./components/DatosDeLaPropiedadForm";
import DatosDelPropietario from "./components/DatosDelPropietario";
import "./AgregarPropiedad.css";
import useAuth from "../../../../../../hooks/useAuth";
import propiedadesContext from "../../../../../../context/contextPropiedades/propiedadesContext";
import { v4 } from "uuid";
import { Link } from "react-router-dom";
import BackButton from "../../../../../../components/BackButton";
document.querySelector('body').style.background = ''
const AgregarPropiedad = ({ history }) => {
  // eslint-disable-next-line
  const user = useAuth(history);
  const [validatedPropiedad, setValidatedPropiedad] = useState(false);

  const PropiedadesContext = useContext(propiedadesContext);
  const { addPropiedad, propiedades, imagenesPropiedades } = PropiedadesContext;

  const [nuevaPropiedad, setPropiedad] = useState({
    _id: v4(),
    DatosDeContacto: {
      nroCliente: 1,
      tipoCliente: "Particular",
      nombre: "Prueba",
      apellido: "1",
      telefono: "+54 (362) 999-9999",
      email: "test@test.com",
      direccion: "Calle falsa 123",
      pais: "El Corazon",
      provincia: "De Valen",
    },
    DatosDelInmueble: {
      tituloPropiedad: "",
      nroInmueble: "",
      tipo: "",
      con: "",
      contrato: "",
      pais: "",
      CP: 0,
      provincia: "",
      localidad: "",
      barrio: "",
      direccion: "",
      banios: 0,
      habitaciones: 0,
      suit: 0,
      espacios: 0,
      antiguedad: 0,
      amueblada: "Completa",
      servicios: [],
      estado: "",
      metrosCuadrados: 0,
      precio: 0,
    },
    imagen: imagenesPropiedades[propiedades.length].largeImageURL
  });


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmitPropiedad = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      addPropiedad(nuevaPropiedad);
      handleShow();
      event.preventDefault();
      event.stopPropagation();
    }
    setValidatedPropiedad(true);
  
  };

   

  return (
    <Layout>
      <Container style={{display:'flex', justifyContent:'space-between', marginTop:'12px'}}>
      <BackButton history={history} />
      
      <h2 className='titulosSecciones'>Agregar propiedad</h2>
      <div style={{marginLeft:'115px'}}></div>
      </Container> 
      <Container fluid>
      
        <Form
          noValidate
          validated={validatedPropiedad}
          onSubmit={handleSubmitPropiedad}
        >
          <Form.Group as={Row} className="mt-3">
            <Form.Group as={Col} xs={8}>
              <Form.Group as={Card}>
                <Card.Header as="h2">Datos de la propiedad</Card.Header>
                <Card.Body>
                  <DatosDeLaPropiedadForm
                    setPropiedad={setPropiedad}
                    nuevaPropiedad={nuevaPropiedad}
                  />
                </Card.Body>
              </Form.Group>
            </Form.Group>
            <Form.Group as={Col} xs={4}>
              <Card>
                <Card.Header as="h2">Datos del Propietario</Card.Header>
                <Card.Body>
                  <DatosDelPropietario />
                </Card.Body>
              </Card>
            </Form.Group>
            <Row className="justify-content-center">
                <Col xs={4}>
              <Button type="sumbit" variant="success" block >
                Agregar Propiedad
              </Button>
                </Col>
            </Row>
            
          </Form.Group>
          
        </Form>
      </Container>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header style={{ background: '#27d85a', color: '#FAFAFA', paddingBottom:'4px'}}>
          <h4 style={{alignSelf:'flex-end'}}>Propiedad guardada!</h4>
        </Modal.Header >
        <Modal.Body>
          <h5>Propiedad registrada correctamente.</h5> 
          <h6>Podra observarla en la lista de propiedades.</h6> 
        </Modal.Body>
        <Modal.Footer>
          <Link to={`/agenteinmobiliario/Propiedades`}>
            <Button type='primary' className="btn btn-success">
              Aceptar
              </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
};

export default AgregarPropiedad;
