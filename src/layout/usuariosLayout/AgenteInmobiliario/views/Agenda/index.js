import Layout from "../../../../Layout";
import Table from "../../../../../components/Table/";
import MOCK_DATA from "./assets/MOCK_DATA.json";
import { COLUMNS } from "./assets/columns";
import { Container } from "react-bootstrap";
import useAuth from "../../../../../hooks/useAuth";

export default function Agenda({history}) {
    const user = useAuth(history)

  return (
    <Layout
      items={["Inicio", "Clientes", "Agenda", "Propiedades"]}
      usuario={user}
    >
      <Container fluid>
        <Table columnas={COLUMNS} datos={MOCK_DATA} />
      </Container>
    </Layout>
  );
}
