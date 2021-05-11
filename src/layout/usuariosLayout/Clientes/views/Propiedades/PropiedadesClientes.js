import React from "react";
import Layout from "../../../../Layout";
import ListaPropiedades from "../../../../../components/ListaPropiedades/";
import propiedades from "../../../../../assets/propiedades.json";
import useAuth from "../../../../../hooks/useAuth";
// import BackButton from "../../../../../components/BackButton";

const PropiedadesClientes = ({history}) => {
  // eslint-disable-next-line
  const user = useAuth(history)


  document.querySelector("body").style.background = "";
  return (
    <Layout>
      {/* <BackButton history={history} /> */}
      <div className='d-flex my-auto justify-content-center' >
                <h2 className='titulosSecciones'>PROPIEDADES</h2>
            </div>
      <ListaPropiedades propiedades={propiedades} history={history}/>
    </Layout>
  );
};

export default PropiedadesClientes;
