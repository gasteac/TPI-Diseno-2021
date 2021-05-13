import React, {useContext, useEffect, useState} from "react";
import { Card, Col, Container, Row, Image, Button } from "react-bootstrap";
import useAuth from "../hooks/useAuth";
import Layout from "../layout/Layout";
import DatosDeContactoComponent from "./DatosDeContactoComponent";
import propiedades from "../assets/propiedades.json";
import PropiedadResize from "../static/images/Propiedad2.svg";
import DatosDelInmuebleComponent from "./DatosDelInmuebleComponent";
import propiedadesContext from "../context/contextPropiedades/propiedadesContext";
import img0 from "./ListaPropiedades/components/propiedadesIMG/1.jpg";
import img1 from "./ListaPropiedades/components/propiedadesIMG/2.jpg";
import img2 from "./ListaPropiedades/components/propiedadesIMG/3.jpg";
import img3 from "./ListaPropiedades/components/propiedadesIMG/4.jpg";
import img4 from "./ListaPropiedades/components/propiedadesIMG/5.jpg";
import img5 from "./ListaPropiedades/components/propiedadesIMG/6.jpg";
import img6 from "./ListaPropiedades/components/propiedadesIMG/7.jpg";
import img7 from "./ListaPropiedades/components/propiedadesIMG/8.jpg";
import img8 from "./ListaPropiedades/components/propiedadesIMG/9.jpg";
import img9 from "./ListaPropiedades/components/propiedadesIMG/10.jpg";
import img10 from "./ListaPropiedades/components/propiedadesIMG/11.jpg";
import img11 from "./ListaPropiedades/components/propiedadesIMG/12.jpg";
import img12 from "./ListaPropiedades/components/propiedadesIMG/13.jpg";

// import BackButton from "./BackButton";
var theImages = new Array()
theImages[46140] = img0;
theImages[35894] = img1;
theImages[11574] = img2;
theImages[42017] = img3;
theImages[18325] = img4;
theImages[47777] = img5;
theImages[16771] = img6;
theImages[33979] = img7;
theImages[40016] = img8;
theImages[25984] = img9;
theImages[26396] = img10;
theImages[16398] = img11;
theImages[14777] = img12;


const Propiedad = ({ history }) => {
  const user = useAuth(history);
  
  const PropiedadesContext = useContext(propiedadesContext)
  const { propiedadSeleccionada } = PropiedadesContext;
  
  const { DatosDeContacto, DatosDelInmueble } = propiedadSeleccionada;
  const handleClickEditar = () => {
    history.push("/agenteinmobiliario/propiedades/editarpropiedad");
  };

  return (
    
    <Layout>
      {/* <BackButton history={history} /> */}
      <Container style={{marginTop:'20px', marginBottom:'20px'}}>
        <Row>
          <Col xs={7}>
            <Row className='d-flex justify-content-center'>
              <Image src={theImages[DatosDelInmueble.nroInmueble]} className='img-thumbnail' style={{marginBottom:'20px', width:'575px'}} />
            </Row>
            <Row>
              <Card className="m-0 p-0" >
                <Card.Header as="h4">Datos de Contacto</Card.Header>
                <Card.Body>
                  <DatosDeContactoComponent DatosDeContacto={DatosDeContacto} />
                </Card.Body>
              </Card>
            </Row>
          </Col>
          <Col xs={5}>
            <Card>
              <Card.Header as="h4">Datos del inmueble</Card.Header>
              <Card.Body>
                <DatosDelInmuebleComponent
                  DatosDelInmueble={DatosDelInmueble}
                />
              </Card.Body>
            </Card>
            {user !== "cliente" ? (
              <Button style={{marginTop:'20px'}}
                type="button"
                variant="outline-secondary"
                onClick={() => handleClickEditar()}
              >
                Editar Propiedad
              </Button>
            ) : null}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Propiedad;
