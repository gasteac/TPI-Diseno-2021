import Layout from "../../../../Layout";
import Table from "../../../../../components/Table/";
import { Container } from "react-bootstrap";
// import BackButton from "../../../../../components/BackButton";
import { COLUMNS1, COLUMNS2 } from './assets/columns.js';
import columns1Data from './assets/columns1-data.json';
import columns2Data from './assets/columns2-data.json';
import useAuth from "../../../../../hooks/useAuth";

export default function Citas({ history }) {
    const user = useAuth(history);
    return (
        <Layout
        usuario={user}
        >
            
            {/* <BackButton history={history} /> */}
            <Container fluid>
            <div className='d-flex my-auto justify-content-center' >
                <h2 className='titulosSecciones'>Citas Confirmadas</h2>
            </div>
                <Table columnas={COLUMNS1} datos={columns1Data} rows={8}/>
            </Container>
            <Container fluid>
            <div className='d-flex my-auto justify-content-center' >
                <h2 className='titulosSecciones'>CITAS SIN AGENTE DESIGNADO</h2>
            </div>
                <Table columnas={COLUMNS2} datos={columns2Data} rows={8}/>
            </Container>
        </Layout>
    );
}