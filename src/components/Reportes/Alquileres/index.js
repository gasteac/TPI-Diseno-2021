import { Button, Col, Row } from "react-bootstrap";
import { COLUMNS } from './columnas';
import Table from "../../Table";
import alquileres from './alquilereslindo.json';
import useAuth from "../../../hooks/useAuth";
import Layout from "../../../layout/Layout";
import Ralquileres from "./ReporteAlquileres.jpg"

export default function Alquileres({ history }) {
    const user = useAuth(history);
    document.querySelector('body').style.background = ""
  return (
    <Layout
      usuario={user}
    >
      <Row className="justify-content-center">
          <Col xs={4} className="d-flex justify-content-center">
            <h2 className="titulosSecciones">Alquileres</h2>
            
          </Col>
        </Row>
        <Table columnas={COLUMNS} datos={alquileres} rows={7}/>
        <div className='d-flex justify-content-center align-items-center align-content-center'>
        <Button
              style={{ }}
              type="button"
              variant="info"
              href={Ralquileres}
            >
              Imprimir reporte
        </Button>
        </div>
    </Layout>
  )
}