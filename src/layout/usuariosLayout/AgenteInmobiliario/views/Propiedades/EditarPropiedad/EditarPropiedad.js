import React, { useState } from "react";
import { Col, Container, Row, Card, Button, Modal } from "react-bootstrap";
import Layout from "../../../../../Layout";
import DatosDeLaPropiedadForm from "../AgregarPropiedad/components/DatosDeLaPropiedadForm";
import DatosDelPropietario from "../AgregarPropiedad/components/DatosDelPropietario";
import "../AgregarPropiedad/AgregarPropiedad.css";
import useAuth from "../../../../../../hooks/useAuth";
import propiedades from "../../../../../../assets/propiedades.json";
import { Link } from "react-router-dom";

// import BackButton from "../../../../../../components/BackButton";

const EditarPropiedad = ({ history }) => {
  // eslint-disable-next-line
  const user = useAuth(history);
  const [validatedPropiedad, setValidatedPropiedad] = useState(false);

  const { DatosDeContacto, DatosDelInmueble: DatosDelInmuebleEditar } = propiedades[0];

  const [showEditar, setShowEditar] = useState(false);
  const handleCloseEditar = () => setShowEditar(false);
  const handleShowEditar = () => setShowEditar(true);

  const [showEliminar, setShowEliminar] = useState(false);
  const handleCloseEliminar = () => setShowEliminar(false);
  const handleShowEliminar = () => setShowEliminar(true);

  const handleSubmitPropiedad = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidatedPropiedad(true);
    handleShowEditar();
  };


  const handleSubmitELiminar = (event) => {
    event.preventDefault();
    handleShowEliminar();
  }


  return (
    <Layout>
      {/* <BackButton history={history} /> */}
      <Container fluid>
        <Row className="mt-3">
          <Col xs={8}>
            <Card>
              <Card.Header as="h2">Datos de la propiedad</Card.Header>
              <Card.Body>
                <DatosDeLaPropiedadForm
                  validatedPropiedad={validatedPropiedad}
                  handleSubmitPropiedad={handleSubmitPropiedad}
                  DatosDelInmuebleEditar={DatosDelInmuebleEditar}
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

      <Modal show={showEditar} onHide={handleCloseEditar} backdrop="static">
        <Modal.Header style={{ background: '#27d85a', color: '#FAFAFA' }}>
          Propiedad editada!
            </Modal.Header >
        <Modal.Body>
          Los datos de la propiedad estan actualizados.
            </Modal.Body>
        <Modal.Footer>
          <Link onClick={() => history.goBack()}>
            <Button type='primary' className="btn btn-success">
              Aceptar
              </Button>
          </Link>
        </Modal.Footer>
      </Modal>

      <Modal show={showEliminar} onHide={handleCloseEliminar} backdrop="static">
        <Modal.Header style={{ background: '#e10016', color: '#FAFAFA' }}>
          Advertencia
        </Modal.Header >
        <Modal.Body>
          ¿Esta seguro de que quieres eliminar la propiedad?
        </Modal.Body>
        <Modal.Footer>
          <Link onClick={() => handleCloseEliminar()}>
              <Button  variant="outline-danger" block>
                No eliminar
              </Button>
          </Link>
          <Link to={'/agenteinmobiliario/Propiedades'}>
            <Button variant="danger" block>
              Eliminar 
            </Button>
          </Link>     
        </Modal.Footer>
      </Modal>

    </Layout>
  );
};

export default EditarPropiedad;
