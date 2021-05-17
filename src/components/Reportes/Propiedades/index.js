import { useContext } from "react";
import { Button } from "react-bootstrap";
import Table from "../../Table";
import useAuth from "../../../hooks/useAuth";
import propiedadesContext from "../../../context/contextPropiedades/propiedadesContext";
import { COLUMNS } from './columnas';
import Layout from "../../../layout/Layout";

export default function ReportePropiedades({ history }) {
    const user = useAuth(history);
    const PropiedadesContext = useContext(propiedadesContext);
    const {
      propiedades
    } = PropiedadesContext;
  return (
    <Layout
      usuario={user}
    >
        <h2>Propiedades</h2>
        <Table columnas={COLUMNS} datos={propiedades} rows={7}/>
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