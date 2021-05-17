import { Button } from "react-bootstrap";
import { COLUMNS } from './columnas';
import Table from "../../Table";
import alquileres from './alquilereslindo.json';
import useAuth from "../../../hooks/useAuth";


export default function Alquileres({ history }) {
    const user = useAuth(history);
  return (
    <Layout
      usuario={user}
    >
        <h2>Alquileres</h2>
        <Table columnas={COLUMNS} datos={alquileres} rows={7}/>
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