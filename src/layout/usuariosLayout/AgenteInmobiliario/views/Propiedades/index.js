import Layout from "../../../../Layout";
import propiedades from "../../../../../assets/propiedades.json";
import ListaPropiedades from "../../../../../components/ListaPropiedades/";
import { Container } from "react-bootstrap";
import Filter from "../../../../../components/Filter";

export default function Propiedades() {
  const usuario = "agente-inmobiliario";

  return (
    <Layout
      items={["Inicio", "Clientes", "Agenda", "Propiedades"]}
      usuario={usuario}
    >
      <ListaPropiedades propiedades={propiedades} />
    </Layout>
  );
}
