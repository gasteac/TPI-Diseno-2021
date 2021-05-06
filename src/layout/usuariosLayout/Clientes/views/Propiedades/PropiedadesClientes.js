import React from 'react';
import Layout from "../../../../Layout";
import ListaPropiedades from '../../../../../components/ListaPropiedades';
import propiedades from '../../../../../assets/propiedades.json';


const PropiedadesClientes = () => {
    document.querySelector('body').style.background = ''
    return (
        <Layout
        items={["Inicio", "Propiedades", "Programar Cita", "¿Quienes somos?"]}
        usuario={"clientes"}
      >
        <ListaPropiedades propiedades={propiedades} />
      </Layout>
    )
}

export default PropiedadesClientes
