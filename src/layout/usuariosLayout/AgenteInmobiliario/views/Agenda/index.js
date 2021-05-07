import Layout from "../../../../Layout";
import Table from "../../../../../components/Table/";
import MOCK_DATA from "./assets/MOCK_DATA.json";
import { COLUMNS } from "./assets/columns";
import { Container } from "react-bootstrap";

export default function Agenda() {
  const usuario = "agente-inmobiliario";

  return (
    <Layout
      items={["Inicio", "Clientes", "Agenda", "Propiedades"]}
      usuario={usuario}
    >
      <Container fluid>
        <Table columnas={COLUMNS} datos={MOCK_DATA} />
      </Container>
    </Layout>
  );
}
