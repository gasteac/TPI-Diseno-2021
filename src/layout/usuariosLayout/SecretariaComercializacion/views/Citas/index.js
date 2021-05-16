import Layout from "../../../../Layout";
import Table from "../../../../../components/Table/";
import { Col, Container, Row } from "react-bootstrap";
import BackButton from "../../../../../components/BackButton";
import { COLUMNS1, COLUMNS2 } from "./assets/columns.js";
import columns1Data from "./assets/columns1-data.json";
import columns2Data from "./assets/columns2-data.json";
import useAuth from "../../../../../hooks/useAuth";

export default function Citas({ history }) {
  const user = useAuth(history);

  return (
    <Layout usuario={user}>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={4}>
            <h2 className="titulosSecciones">Citas Confirmadas</h2>
          </Col>
          <Col>
            <Table columnas={COLUMNS1} datos={columns1Data} rows={7} />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={4}>
            <h2 className="titulosSecciones">Solicitudes de citas</h2>
          </Col>
          <Col xs={12}>
            <Table columnas={COLUMNS2} datos={columns2Data} rows={8} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
