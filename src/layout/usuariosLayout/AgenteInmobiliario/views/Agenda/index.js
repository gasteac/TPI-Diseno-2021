import Layout from "../../../../Layout";
import Table from "./components/Table";

export default function Agenda() {
    const usuario = 'agente-inmobiliario';

    return (
        <Layout items={["Inicio", "Clientes", "Agenda", "Propiedades"]} usuario={usuario}>
            <Table />
        </Layout>
    );
}