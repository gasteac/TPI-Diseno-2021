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
            <BackButton history={history} />
            <Container fluid>
            <div className='d-flex my-auto justify-content-center' >
                <h2 className='titulosSecciones'>CLIENTES</h2>
            </div>
                <Table columnas={COLUMNS} datos={clients} />
            </Container>
        </Layout>
    );
}