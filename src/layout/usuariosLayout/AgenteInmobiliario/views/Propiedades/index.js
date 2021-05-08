import Layout from "../../../../Layout";
import propiedades from "../../../../../assets/propiedades.json";
import ListaPropiedades from "../../../../../components/ListaPropiedades/";
import useAuth from "../../../../../hooks/useAuth";

export default function Propiedades({history}) {
  const user = useAuth(history)
  return (
    <Layout
      usuario={user}
    >
      <ListaPropiedades propiedades={propiedades} history={history}/>
    </Layout>
  );
}