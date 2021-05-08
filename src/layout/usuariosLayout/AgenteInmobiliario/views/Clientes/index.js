import clients from './assets/clients.json';
import columns from './assets/columns.js';
import useAuth from "../../../../../hooks/useAuth";

export default function ListaClientes({ history }) {
    const user = useAuth(history);
    return (
        <Layout 
        items={["Inicio", "Clientes", "Agenda", "Propiedades"]}
        usuario={user}
        >
            <Container fluid>
                <Table columnas={columns} datos={clients} />
            </Container>
        </Layout>
    );
}