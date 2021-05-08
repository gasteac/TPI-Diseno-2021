import React from "react";
import { Card, Col, Container, Row, Image, Button } from "react-bootstrap";
import useAuth from "../hooks/useAuth";
import Layout from "../layout/Layout";
import DatosDeContactoComponent from "./DatosDeContactoComponent";
import propiedades from "../assets/propiedades.json";
import PropiedadResize from "../static/images/Propiedad2.svg";
import DatosDelInmuebleComponent from "./DatosDelInmuebleComponent";

const Propiedad = ({ history }) => {
  const user = useAuth(history);
  console.log(user);
  console.log(propiedades[0]);
  const { DatosDeContacto, DatosDelInmueble } = propiedades[0];
  const handleClickEditar = () => {
    history.push("/agenteinmobiliario/propiedades/editarpropiedad");
  };
  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col xs={7}>
            <Row>
              <Image src={PropiedadResize} height={350} />
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
              <Button
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
