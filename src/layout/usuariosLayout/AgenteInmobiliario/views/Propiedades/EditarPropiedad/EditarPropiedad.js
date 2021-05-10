import React, { useState } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import Layout from "../../../../../Layout";
import DatosDeLaPropiedadForm from "../AgregarPropiedad/components/DatosDeLaPropiedadForm";
import DatosDelPropietario from "../AgregarPropiedad/components/DatosDelPropietario";
import "../AgregarPropiedad/AgregarPropiedad.css";
import useAuth from "../../../../../../hooks/useAuth";
import propiedades from "../../../../../../assets/propiedades.json";
import BackButton from "../../../../../../components/BackButton";

const EditarPropiedad = ({ history }) => {
  // eslint-disable-next-line
  const user = useAuth(history);
  const [validatedPropiedad, setValidatedPropiedad] = useState(false);

  const { DatosDeContacto, DatosDelInmueble } = propiedades[0];

  const handleSubmitPropiedad = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidatedPropiedad(true);
  };


  const handleSubmitELiminar = () => {}
  return (
    <Layout>
      <BackButton history={history} />
      <Container fluid>
        <Row className="mt-3">
          <Col xs={8}>
            <Card>
              <Card.Header as="h2">Datos de la propiedad</Card.Header>
              <Card.Body>
                <DatosDeLaPropiedadForm
                  validatedPropiedad={validatedPropiedad}
                  handleSubmitPropiedad={handleSubmitPropiedad}
                  DatosDelInmueble={DatosDelInmueble}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}>
            <Card>
              <Card.Header as="h2">Datos del Propietario</Card.Header>
              <Card.Body>
                <DatosDelPropietario DatosDeContacto={DatosDeContacto}/>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center my-3">
          <Col xs={3}>
            <Button type="sumbit" variant="success" onClick={handleSubmitPropiedad} block>
              Editar Propiedad
            </Button>
          </Col>
          <Col xs={2}>
            <Button type="sumbit" variant="outline-danger" onClick={handleSubmitELiminar} block>
              Eliminar Propiedad
            </Button>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default EditarPropiedad;
