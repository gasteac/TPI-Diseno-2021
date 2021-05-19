import Layout from "../../../../Layout";
import Table from "../../../../../components/Table/";
import { Button, Col, Container, Row, Modal } from "react-bootstrap";
import { COLUMNS1, COLUMNS2 } from "./assets/columns.js";
import columns1Data from "./assets/columns1-data.json";
import useAuth from "../../../../../hooks/useAuth";
import { useContext, useState } from "react";
import citasContext from "../../../../../context/citasContext/citasContext";


export default function Citas({ history }) {

  const [showEliminar, setShowEliminar] = useState(false);
  const handleCloseEliminar = () => setShowEliminar(false);
  
  const handleShowEliminar = () => setShowEliminar(true);
    
  

  const user = useAuth(history);

  const CitasContext = useContext(citasContext);
  const { solicitudes, citasSeleccionadas, setCitasSeleccionadas } =
    CitasContext;

  const handleAsignarAgente = () => {
    if (citasSeleccionadas.length !== 0) {
      history.push("/secretariacomercializacion/citas/asignaragente");
    }
  };

  
  const handleNuevaCita = () => {
    history.push('/secretariacomercializacion/citas/nuevacita')
  }

  document.querySelector("body").style.background = "";
  return (
    <Layout usuario={user}>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} className="d-flex justify-content-center">
            <h2 className="titulosSecciones">Citas Confirmadas</h2>
          </Col>
          <Col xs={12} className="d-flex justify-content-start">
            <Button variant="success" type="submit" onClick={handleNuevaCita}>
                Agregar Cita
            </Button>
            <Button variant="danger" type="button" className="ml-3" onClick={handleShowEliminar}>
                Cancelar Citas
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col>
            <Table columnas={COLUMNS1} datos={columns1Data} rows={7} />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} className="d-flex justify-content-center">
            <h2 className="titulosSecciones">Solicitudes de citas</h2>
          </Col>
          <Col className="d-flex align-items-start" xs={12}>
            <Button
              variant="primary"
              type="button"
              onClick={handleAsignarAgente}
            >
              Asignar agentes
            </Button>
            <Button variant="dark" type="button" className="ml-3">
              Editar Citas
            </Button>
          </Col>
      
          <Col xs={12}>
            <Table
              columnas={COLUMNS2}
              datos={solicitudes}
              rows={8}
              setCitasSeleccionadas={setCitasSeleccionadas}
            />
          </Col>
        </Row>
      </Container>

      <Modal show={showEliminar} onHide={handleCloseEliminar} backdrop="static">
        <Modal.Header style={{ background: "#e10016", color: "#FAFAFA" }}>
          Advertencia
        </Modal.Header>
        <Modal.Body>
          ¿Esta seguro de que quieres calcelar la cita?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleCloseEliminar}>
            No cancelar
          </Button>
          <Button variant="danger" onClick={handleCloseEliminar}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
}
