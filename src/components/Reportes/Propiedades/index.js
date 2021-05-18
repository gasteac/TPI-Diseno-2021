import { Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import Table from "../../Table";
import useAuth from "../../../hooks/useAuth";
import propiedadesContext from "../../../context/contextPropiedades/propiedadesContext";
import { COLUMNS } from "./columnas";
import Layout from "../../../layout/Layout";

export default function ReportePropiedades({ history }) {
  const user = useAuth(history);
  const PropiedadesContext = useContext(propiedadesContext);
  const { propiedades } = PropiedadesContext;
  return (
    <Layout usuario={user}>
      <Row className="justify-content-center">
        <Col xs={4} className="d-flex justify-content-center">
          <h2 className="titulosSecciones">Propiedades</h2>
        </Col>
      </Row>
      
      <Table columnas={COLUMNS} datos={propiedades} rows={7} />
      <div className='d-flex justify-content-center align-items-center align-content-center'>
        <Button
              style={{ }}
              type="button"
              variant="info"
            >
              Imprimir reporte
        </Button>
        </div>
    </Layout>
  );
}
