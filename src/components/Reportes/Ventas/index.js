import { Button } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import Layout from "../../../layout/Layout";
import Table from "../../Table";
import { COLUMNS } from './columnas';
import ventas from './ventasEsteSI.json';

export default function Ventas({ history }) {
    const user = useAuth(history);
  return (
    <Layout
      usuario={user}
    >
        <h2>Ventas</h2>
        <Table columnas={COLUMNS} datos={ventas} rows={6}/>
        <Button
              style={{ marginTop: "20px" }}
              type="button"
              variant="info"
            >
              Imprimir reporte
        </Button>
    </Layout>
  )
}