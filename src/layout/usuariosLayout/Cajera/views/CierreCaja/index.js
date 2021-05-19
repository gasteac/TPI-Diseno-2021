import Layout from "../../../../Layout";
import Table from "../../../../../components/Table/";
import useAuth from "../../../../../hooks/useAuth";
import { columns } from "./assets/columns";
import MOCK_DATA from "./assets/MOCK_DATA.json";
import { Col, Container, Row } from "react-bootstrap";
import Totales from "./components/Totales";
import { Button } from "react-bootstrap";
export default function CierreCaja({ history }) {
  const user = useAuth(history);
  document.querySelector("body").style.background = "";
  return (
    <Layout usuario={user}>
      <Container fluid>
        <Row className="justify-content-center">
          <h2 className="titulosSecciones mb-4">Cierre de Caja</h2>
         
        </Row>
        <div className='d-flex justify-content-center'>
        <Button variant="primary">
            Imprimir Balance
          </Button></div>
        <Row className="justify-content-center">
          <Col xs={6} className="d-flex flex-column align-items-center">
            <h3
              className="titulosSecciones"
              style={{ border: "none", margin: "0px" }}
            >
              Entrada / Salida
            </h3>
            <Table columnas={columns} datos={MOCK_DATA} flag={false} />
            <Totales datos={MOCK_DATA} />
          </Col>
          <Col xs={6} className="d-flex flex-column align-items-center">
            <h3
              className="titulosSecciones"
              style={{ border: "none", margin: "0px" }}
            >
              Caja de alquileres
            </h3>
            <Table columnas={columns} datos={MOCK_DATA} flag={false} />
            <Totales datos={MOCK_DATA} />
          </Col>
          <Col xs={6} className="d-flex flex-column align-items-center">
            <h3
              className="titulosSecciones"
              style={{ border: "none", margin: "0px" }}
            >
              Caja Ventas
            </h3>
            <Table columnas={columns} datos={MOCK_DATA} flag={false} />
            <Totales datos={MOCK_DATA} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
