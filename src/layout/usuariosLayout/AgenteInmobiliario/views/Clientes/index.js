import clients from './assets/clients.json';
import { COLUMNS } from './assets/columns';
import useAuth from "../../../../../hooks/useAuth";
import Layout from '../../../../Layout';
import { Container } from 'react-bootstrap';
import Table from '../../../../../components/Table';
import BackButton from "../../../../../components/BackButton";

export default function ListaClientes({ history }) {
    const user = useAuth(history);
    return (
        <Layout
        items={["Inicio", "Clientes", "Agenda", "Propiedades"]}
        usuario={user}
        >
            <Container style={{display:'flex', justifyContent:'space-between', marginTop:'12px'}}>
      <BackButton history={history} />
      
      <h2 className='titulosSecciones'>Clientes</h2>
      <div style={{marginLeft:'115px'}}></div>
      </Container> 
            <Container fluid>
                <Table columnas={COLUMNS} datos={clients} />
            </Container>
        </Layout>
    );
}