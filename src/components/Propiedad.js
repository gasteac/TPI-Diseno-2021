import React, { useContext } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Image,
  Button,
  Carousel,
} from "react-bootstrap";
import useAuth from "../hooks/useAuth";
import Layout from "../layout/Layout";
import DatosDeContactoComponent from "./DatosDeContactoComponent";
import imagen2 from "./ListaPropiedades/components/propiedadesIMG/1.jpg";
import imagen3 from "./ListaPropiedades/components/propiedadesIMG/2.jpg";
import DatosDelInmuebleComponent from "./DatosDelInmuebleComponent";
import propiedadesContext from "../context/contextPropiedades/propiedadesContext";
import BackButton from "./BackButton";

const Propiedad = ({ history }) => {
  const user = useAuth(history);

  const PropiedadesContext = useContext(propiedadesContext);
  const { propiedadSeleccionada } = PropiedadesContext;

  const { DatosDeContacto, DatosDelInmueble, imagen } = propiedadSeleccionada;

  const handleClickEditar = () => {
    history.push("/agenteinmobiliario/propiedades/editarpropiedad");
  };

  const handleClickProgramarCita = () => {
    history.push("/cliente/programarcita");
  };

  const handleClickEditarImagenes = () => {
    history.push("/marketing/editarpropiedad");
  };

  const handleClickSiguiente = () => {
    history.push('/secretariacomercializacion/citas/asignaragente')
  }

  return (
    <Layout>
      <BackButton history={history} />
      <Container style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Row>
          <Col xs={7}>
            <Row>
              <Carousel>
                <Carousel.Item>
                  <Image
                    className="d-block w-100"
                    src={imagen}
                    style={{ marginBottom: "20px" }}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>
                      {DatosDelInmueble.tipo} {DatosDelInmueble.tituloPropiedad}
                    </h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    className="d-block w-100"
                    src={imagen2}
                    style={{ marginBottom: "20px" }}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3>
                      {DatosDelInmueble.tipo} {DatosDelInmueble.tituloPropiedad}
                    </h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    className="d-block w-100"
                    src={imagen3}
                    style={{ marginBottom: "20px" }}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>
                      {DatosDelInmueble.tipo} {DatosDelInmueble.tituloPropiedad}
                    </h3>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Row>
            <Row>
              <Card className="m-0 p-0">
                <Card.Header as="h4">Datos de Contacto</Card.Header>
                <Card.Body>
                  <DatosDeContactoComponent DatosDeContacto={DatosDeContacto} />
                </Card.Body>
              </Card>
            </Row>
          </Col>
          <Col xs={5} className="d-flex flex-column">
            <Row>
              <Col>
                <Card>
                  <Card.Header as="h4">Datos del inmueble</Card.Header>
                  <Card.Body>
                    <DatosDelInmuebleComponent
                      DatosDelInmueble={DatosDelInmueble}
                    />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center">
                {user === "agenteinmobiliario" ? (
                  <Button
                    style={{ marginTop: "20px" }}
                    type="button"
                    variant="outline-secondary"
                    onClick={handleClickEditar}
                  >
                    Editar Propiedad
                  </Button>
                ) : user === "cliente" ? (
                  <Button
                    style={{ marginTop: "20px" }}
                    type="button"
                    variant="outline-secondary"
                    onClick={handleClickProgramarCita}
                  >
                    Programar cita
                  </Button>
                ) : user === "marketing" ? (
                  <Button
                    style={{ marginTop: "20px" }}
                    type="button"
                    variant="outline-secondary"
                    onClick={handleClickEditarImagenes}
                  >
                    Editar Imágenes
                  </Button>
                ) : (
                  <Button
                    style={{ marginTop: "20px" }}
                    type="button"
                    variant="secondary"
                    onClick={handleClickSiguiente}
                  >
                    Siguiente
                  </Button>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Propiedad;
