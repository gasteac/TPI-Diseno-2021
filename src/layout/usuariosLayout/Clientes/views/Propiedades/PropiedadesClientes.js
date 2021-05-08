import React from "react";
import Layout from "../../../../Layout";
import ListaPropiedades from "../../../../../components/ListaPropiedades/";
import propiedades from "../../../../../assets/propiedades.json";
import useAuth from "../../../../../hooks/useAuth";

const PropiedadesClientes = ({history}) => {
  const user = useAuth(history)


  document.querySelector("body").style.background = "";
  return (
    <Layout>
      <ListaPropiedades propiedades={propiedades} />
    </Layout>
  );
};

export default PropiedadesClientes;
