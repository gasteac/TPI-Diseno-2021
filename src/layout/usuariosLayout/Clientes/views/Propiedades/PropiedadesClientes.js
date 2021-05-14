import React from "react";
import Layout from "../../../../Layout";
import ListaPropiedades from "../../../../../components/ListaPropiedades/";
import propiedades from "../../../../../assets/propiedades.json";
import useAuth from "../../../../../hooks/useAuth";
import BackButton from "../../../../../components/BackButton";
import { Container } from "react-bootstrap";

const PropiedadesClientes = ({history}) => {
  // eslint-disable-next-line
  const user = useAuth(history)

  document.querySelector("body").style.background = "";
  return (
    <Layout>
      <Container style={{display:'flex', justifyContent:'space-between', marginTop:'12px'}}>
      <BackButton history={history} />
      
      <h2 className='titulosSecciones'>Propiedades</h2>
      <div style={{marginLeft:'115px'}}></div>
      </Container> 
      <ListaPropiedades propiedades={propiedades} history={history}/>
    </Layout>
  );
};

export default PropiedadesClientes;
