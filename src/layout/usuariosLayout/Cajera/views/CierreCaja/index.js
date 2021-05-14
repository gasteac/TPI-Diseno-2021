import Layout from "../../../../Layout";
import Table from "../../../../../components/Table/";
import useAuth from "../../../../../hooks/useAuth";
import BackButton from "../../../../../components/BackButton";
import { columns } from "./assets/columns";
import MOCK_DATA from "./assets/MOCK_DATA.json";
import { Container } from "react-bootstrap";

export default function CierreCaja({ history }) {
    const user = useAuth(history);

  return (
    <Layout
      usuario={user}
    >
    <Container style={{display:'flex', justifyContent:'space-between', marginTop:'12px'}}>
      <BackButton history={history} />
      
      <h2 className='titulosSecciones mb-4'>Transacciones realizadas</h2>
      <div style={{marginLeft:'115px'}}></div>
      </Container> 
      <div className='d-flex'>
         
        <Container fluid>
        <h3 className='titulosSecciones' style={{border:'none', margin:'0px'}}>Entrada / Salida</h3>
            <Table columnas={columns} datos={MOCK_DATA} flag={false}/>
        </Container>
        <Container fluid>
        <h3 className='titulosSecciones' style={{border:'none', margin:'0px'}}>Caja de alquileres</h3>
            <Table columnas={columns} datos={MOCK_DATA} flag={false} />
        </Container>
        <Container fluid>
        <h3 className='titulosSecciones' style={{border:'none', margin:'0px'}}>Caja Ventas</h3>
            <Table columnas={columns} datos={MOCK_DATA} flag={false} />
        </Container>
      </div>
    </Layout>
  )
}