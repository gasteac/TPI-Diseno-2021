import Layout from "../../../../Layout";
import Table from "../../../../../components/Table/";
import MOCK_DATA from "./assets/MOCK_DATA.json";
import { COLUMNS } from "./assets/columns";
import { Container, Row, Col } from "react-bootstrap";
import useAuth from "../../../../../hooks/useAuth";
import BackButton from "../../../../../components/BackButton";

export default function Agenda({ history }) {
  const user = useAuth(history);
  document.querySelector("body").style.background = "";
  return (
    <Layout usuario={user}>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={2} className="d-flex justify-content-center">
            <h2 className="titulosSecciones">Agenda</h2>
            
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col>
            <Table columnas={COLUMNS} datos={MOCK_DATA} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
