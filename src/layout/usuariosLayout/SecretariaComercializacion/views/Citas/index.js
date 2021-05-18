import Layout from "../../../../Layout";
import Table from "../../../../../components/Table/";
import { Button, Col, Container, Row } from "react-bootstrap";
import BackButton from "../../../../../components/BackButton";
import { COLUMNS1, COLUMNS2 } from "./assets/columns.js";
import columns1Data from "./assets/columns1-data.json";
import columns2Data from "./assets/columns2-data.json";
import useAuth from "../../../../../hooks/useAuth";
import { useContext } from "react";
import citasContext from "../../../../../context/citasContext/citasContext";

export default function Citas({ history }) {
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
                Agregar cita
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
          <Col className="d-flex align-items-center" xs={2}>
            <Button
              variant="primary"
              type="button"
              onClick={handleAsignarAgente}
            >
              Asignar agentes
            </Button>
          </Col>
          <Col xs={2}>
            <Button variant="secondary" type="button">
              Editar Citas
            </Button>
          </Col>
          <Col xs={8} className="d-flex justify-content-end">
            <Button variant="danger" type="button">
              Cancelar Citas
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
    </Layout>
  );
}
