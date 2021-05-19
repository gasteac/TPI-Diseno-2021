import { Row, Col, Container } from "react-bootstrap";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import Table from "../../Table";
import useAuth from "../../../hooks/useAuth";
import propiedadesContext from "../../../context/contextPropiedades/propiedadesContext";
import { COLUMNS } from "./columnas";
import Layout from "../../../layout/Layout";
import Rpropiedades from "./ReportePropiedades.jpg";

export default function ReportePropiedades({ history }) {
  const user = useAuth(history);
  const PropiedadesContext = useContext(propiedadesContext);
  const { propiedades } = PropiedadesContext;
  document.querySelector("body").style.background = "";
  return (
    <Layout usuario={user}>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={4} className="d-flex justify-content-center">
            <h2 className="titulosSecciones">Propiedades</h2>
          </Col>
        </Row>
        <Row>
          <Col>
          <Table columnas={COLUMNS} datos={propiedades} rows={6} />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Button  type="button" variant="info" href={Rpropiedades}>
            Imprimir reporte
          </Button>
        </Row>
      </Container>
    </Layout>
  );
}
