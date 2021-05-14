import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Image,
  Button,
  Spinner,
} from "react-bootstrap";
import useAuth from "../hooks/useAuth";
import Layout from "../layout/Layout";
import DatosDeContactoComponent from "./DatosDeContactoComponent";
import propiedades from "../assets/propiedades.json";
import PropiedadResize from "../static/images/Propiedad2.svg";
import DatosDelInmuebleComponent from "./DatosDelInmuebleComponent";
import propiedadesContext from "../context/contextPropiedades/propiedadesContext";
import axios from "axios";

const Propiedad = ({ history }) => {
  const user = useAuth(history);

  const PropiedadesContext = useContext(propiedadesContext);
  const { propiedadSeleccionada, idImagenPropiedad } = PropiedadesContext;

  const { DatosDeContacto, DatosDelInmueble } = propiedadSeleccionada;

  const [image, setImage] = useState(null);

  const handleClickEditar = () => {
    history.push("/agenteinmobiliario/propiedades/editarpropiedad");
  };

  const handleClickProgramarCita = () => {
    history.push("/cliente/programarcita");
  };

  useEffect(() => {
    axios
      .get(
        `https://pixabay.com/api/?key=20807034-598a329be1f2fd78a78a2cb26&id=${idImagenPropiedad}`
      )
      .then((res) => setImage(res.data.hits[0].largeImageURL));
  }, [idImagenPropiedad]);

  return (
    <Layout>
      {/* <BackButton history={history} /> */}
      <Container style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Row>
          <Col xs={7}>
            <Row className="d-flex justify-content-center">
              {!image ? (
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              ) : (
                <Image
                  src={image}
                  className="img-thumbnail"
                  style={{ marginBottom: "20px" }}
                />
              )}
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
              <Button
                style={{ marginTop: "20px" }}
                type="button"
                variant="outline-secondary"
                onClick={() => handleClickEditar()}
              >
                Editar Propiedad
              </Button>
            ) : (
              <Button
                style={{ marginTop: "20px" }}
                type="button"
                variant="outline-secondary"
                onClick={() => handleClickProgramarCita()}
              >
                Programar cita
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Propiedad;
