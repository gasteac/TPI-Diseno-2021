import Layout from "../../../../Layout";
import propiedades from "../../../../../assets/propiedades.json";
import ListaPropiedades from "../../../../../components/ListaPropiedades/";
import { Container } from "react-bootstrap";
import Filter from "../../../../../components/Filter";
import useAuth from "../../../../../hooks/useAuth";

export default function Propiedades({history}) {
  const user = useAuth(history)
  return (
    <Layout
      items={["Inicio", "Clientes", "Agenda", "Propiedades"]}
      usuario={user}
    >
      <ListaPropiedades propiedades={propiedades} />
    </Layout>
  );
}