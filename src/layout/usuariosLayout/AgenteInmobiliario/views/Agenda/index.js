import Layout from "../../../../Layout";
import Table from "../../../../../components/Table/";
import MOCK_DATA from "./assets/MOCK_DATA.json";
import { COLUMNS } from "./assets/columns";
import { Container } from "react-bootstrap";
import useAuth from "../../../../../hooks/useAuth";
import BackButton from "../../../../../components/BackButton";

export default function Agenda({history}) {
    const user = useAuth(history)
    document.querySelector('body').style.background = ''
  return (
    <Layout
      usuario={user}
    >
      <Container style={{display:'flex', justifyContent:'space-between', marginTop:'12px'}}>
      <BackButton history={history} />
      
      <h2 className='titulosSecciones'>Agenda</h2>
      <div style={{marginLeft:'115px'}}></div>
      </Container>
      
      <Container fluid>
        

        <Table columnas={COLUMNS} datos={MOCK_DATA} />
      </Container>
    </Layout>
  );
}
