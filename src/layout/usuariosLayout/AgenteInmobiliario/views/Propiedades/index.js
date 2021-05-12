import Layout from "../../../../Layout";
import ListaPropiedades from "../../../../../components/ListaPropiedades/";
import useAuth from "../../../../../hooks/useAuth";

// import BackButton from "../../../../../components/BackButton";

export default function Propiedades({history}) {

  const user = useAuth(history)

  return (
    <Layout
      usuario={user}
    >
      {/* <BackButton history={history} /> */}
      <div className='d-flex my-auto justify-content-center' >
                <h2 className='titulosSecciones'>PROPIEDADES</h2>
            </div>
      <ListaPropiedades history={history}/>
    </Layout>
  );
}