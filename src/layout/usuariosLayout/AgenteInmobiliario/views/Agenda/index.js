import Layout from "../../../../Layout";
import Table from "../../../../../components/Table/";
import MOCK_DATA from './assets/MOCK_DATA.json';
import { COLUMNS } from './assets/columns';

export default function Agenda() {
    const usuario = 'agente-inmobiliario';

    return (
        <Layout items={["Inicio", "Clientes", "Agenda", "Propiedades"]} usuario={usuario}>
            <Table columnas={COLUMNS} datos={MOCK_DATA}/>
        </Layout>
    );
}