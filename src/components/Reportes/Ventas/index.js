import { Button, Row, Col } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import Layout from "../../../layout/Layout";
import Table from "../../Table";
import { COLUMNS } from './columnas';
import ventas from './ventasEsteSI.json';
import Rventas from "./ReporteVentas.jpg"

export default function Ventas({ history }) {
    const user = useAuth(history);
    document.querySelector('body').style.background = ""
  return (
    <Layout
      usuario={user}
    >
       <Row className="justify-content-center">
          <Col xs={4} className="d-flex justify-content-center">
            <h2 className="titulosSecciones">Ventas</h2>
            
          </Col>
        </Row>
       

        <Row >
          <Col>
        <Table columnas={COLUMNS} datos={ventas} rows={6}/>
       
        </Col>
        </Row>
       <div className='d-flex justify-content-center align-items-center align-content-center'>
        <Button
              style={{ }}
              type="button"
              variant="info"
              href={Rventas}
            >
              Imprimir reporte
        </Button>
        </div>
    </Layout>
  )
}