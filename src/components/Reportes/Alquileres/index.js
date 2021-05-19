import { Button, Col, Container, Row } from "react-bootstrap";
import { COLUMNS } from "./columnas";
import Table from "../../Table";
import alquileres from "./alquilereslindo.json";
import useAuth from "../../../hooks/useAuth";
import Layout from "../../../layout/Layout";
import Ralquileres from "./ReporteAlquileres.jpg";

export default function Alquileres({ history }) {
  const user = useAuth(history);
  document.querySelector("body").style.background = "";
  return (
    <Layout usuario={user}>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={4} className="d-flex justify-content-center">
            <h2 className="titulosSecciones">Reportes Alquileres</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table columnas={COLUMNS} datos={alquileres} rows={7} />
          </Col>
        </Row>
        <Row className="justify-content-center">
            <Button type="button" variant="info" href={Ralquileres} target="_blank" rel="noopener noreferrer">
              Imprimir reporte
            </Button>
        </Row>
      </Container>
    </Layout>
  );
}
