import React, { useContext, useState } from "react";
import {
  Col,
  Container,
  Row,
  Card,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import Layout from "../../../../../Layout";
import DatosDeLaPropiedadForm from "../AgregarPropiedad/components/DatosDeLaPropiedadForm";
import DatosDelPropietario from "../AgregarPropiedad/components/DatosDelPropietario";
import "../AgregarPropiedad/AgregarPropiedad.css";
import useAuth from "../../../../../../hooks/useAuth";
import { Link } from "react-router-dom";
import BackButton from "../../../../../../components/BackButton";
import propiedadesContext from "../../../../../../context/contextPropiedades/propiedadesContext";

const EditarPropiedad = ({ history }) => {
  // eslint-disable-next-line
  const user = useAuth(history);
  const [validatedPropiedad, setValidatedPropiedad] = useState(false);

  const PropiedadesContext = useContext(propiedadesContext);
  const { propiedadSeleccionada, updatePropiedades, deletePropiedad } = PropiedadesContext;

  const { DatosDeContacto, DatosDelInmueble: DatosDelInmuebleEditar } =
  propiedadSeleccionada;

  const [nuevaPropiedad, setPropiedad] = useState(propiedadSeleccionada);

  const [showEditar, setShowEditar] = useState(false);
  const handleCloseEditar = () => {
    setShowEditar(false)
    history.push('/agenteinmobiliario/propiedades')
  };
  const handleShowEditar = () => setShowEditar(true);

  const [showEliminar, setShowEliminar] = useState(false);
  const handleCloseEliminar = () => setShowEliminar(false);
  const handleShowEliminar = () => setShowEliminar(true);

  const handleSubmitPropiedad = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      updatePropiedades(nuevaPropiedad)
      handleShowEditar();
      event.preventDefault();
      event.stopPropagation();
    }

    setValidatedPropiedad(true);
  };

  const handleSubmitELiminar = () => {
    handleShowEliminar();
    deletePropiedad(propiedadSeleccionada);
    history.push('/agenteinmobiliario/propiedades')
  };

  return (
    <Layout>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "12px",
        }}
      >
        <BackButton history={history} />

        <h2 className="titulosSecciones">Editar propiedad</h2>
        <div style={{ marginLeft: "115px" }}></div>
      </Container>
      <Container fluid>
        <Form
          noValidate
          validated={validatedPropiedad}
          onSubmit={handleSubmitPropiedad}
        >
          <Row className="mt-3">
            <Col xs={8}>
              <Card>
                <Card.Header as="h2">Datos de la propiedad</Card.Header>
                <Card.Body>
                  <DatosDeLaPropiedadForm
                    DatosDelInmuebleEditar={DatosDelInmuebleEditar}
                    nuevaPropiedad={nuevaPropiedad}
                    setPropiedad={setPropiedad}
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col xs={4}>
              <Card>
                <Card.Header as="h2">Datos del Propietario</Card.Header>
                <Card.Body>
                  <DatosDelPropietario DatosDeContacto={DatosDeContacto} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="justify-content-center my-3">
            <Col xs={3}>
              <Button
                type="sumbit"
                variant="success"
                block
              >
                Editar Propiedad
              </Button>
            </Col>
            <Col xs={2}>
              <Button
                variant="outline-danger"
                onClick={handleShowEliminar}
                block
              >
                Eliminar Propiedad
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>

      <Modal show={showEditar} onHide={handleCloseEditar} backdrop="static">
        <Modal.Header style={{ background: "#27d85a", color: "#FAFAFA" }}>
          Propiedad editada!
        </Modal.Header>
        <Modal.Body>Los datos de la propiedad estan actualizados.</Modal.Body>
        <Modal.Footer>
          <Link onClick={handleCloseEditar}>
            <Button type="primary" className="btn btn-success">
              Aceptar
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>

      <Modal show={showEliminar} onHide={handleCloseEliminar} backdrop="static">
        <Modal.Header style={{ background: "#e10016", color: "#FAFAFA" }}>
          Advertencia
        </Modal.Header>
        <Modal.Body>
          ¿Esta seguro de que quieres eliminar la propiedad?
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-danger"  onClick={handleCloseEliminar}>
              No eliminar
            </Button>
            <Button variant="danger"  onClick={handleSubmitELiminar}>
              Eliminar
            </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
};

export default EditarPropiedad;
