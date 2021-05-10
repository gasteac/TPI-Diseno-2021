import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  Card,
  Button,
} from "react-bootstrap";
import Layout from "../../../../../Layout";
import DatosDeLaPropiedadForm from "./components/DatosDeLaPropiedadForm";
import DatosDelPropietario from "./components/DatosDelPropietario";
import "./AgregarPropiedad.css";
import useAuth from "../../../../../../hooks/useAuth";
import BackButton from "../../../../../../components/BackButton";

const AgregarPropiedad = ({history}) => {
  // eslint-disable-next-line
    const user = useAuth(history)
  const [validatedPropiedad, setValidatedPropiedad] = useState(false);

  const handleSubmitPropiedad = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidatedPropiedad(true);
  };
  return (
    <Layout>
      <Container fluid>
      <BackButton history={history} />
        <Row className="mt-3">
          <Col xs={8}>
            <Card>
              <Card.Header as="h2">Datos de la propiedad</Card.Header>
              <Card.Body>
                <DatosDeLaPropiedadForm
                  validatedPropiedad={validatedPropiedad}
                  handleSubmitPropiedad={handleSubmitPropiedad}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}>
            <Card>
              <Card.Header as="h2">Datos del Propietario</Card.Header>
              <Card.Body>
                <DatosDelPropietario />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center my-3" >
          <Col xs={3}>
            <Button type="sumbit" variant="success" onClick={handleSubmitPropiedad} block>
              Agregar Propiedad
            </Button>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default AgregarPropiedad;
