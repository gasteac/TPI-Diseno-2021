import React, {useContext, useEffect, useState} from "react";
import { Card, Col, Container, Row, Image, Button } from "react-bootstrap";
import useAuth from "../hooks/useAuth";
import Layout from "../layout/Layout";
import DatosDeContactoComponent from "./DatosDeContactoComponent";
import propiedades from "../assets/propiedades.json";
import PropiedadResize from "../static/images/Propiedad2.svg";
import DatosDelInmuebleComponent from "./DatosDelInmuebleComponent";
import propiedadesContext from "../context/contextPropiedades/propiedadesContext";
// import BackButton from "./BackButton";


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
      <Container fluid style={{marginTop:'20px', marginBottom:'20px'}}>
        <Row>
          <Col xs={7}>
            <Row>
              <Image src={PropiedadResize} height={350} style={{marginBottom:'20px'}} />
            </Row>
            <Row>
              <Card className="m-auto">
                <Card.Header as="h2">Datos de Contacto</Card.Header>
                <Card.Body>
                  <DatosDeContactoComponent DatosDeContacto={DatosDeContacto} />
                </Card.Body>
              </Card>
            </Row>
          </Col>
          <Col xs={5}>
            <Card>
              <Card.Header as="h2">Datos del inmueble</Card.Header>
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
