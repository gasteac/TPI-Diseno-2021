import React from 'react'
import { Container } from 'react-bootstrap'
import Layout from '../../../../Layout'
import EnSaPos  from './ensapos.json'
import EnSaNeg from './ensaneg.json'
import {tablaCajera} from './tabla-entsal'
import Table from "../../../../../components/Table/";
import useAuth from "../../../../../hooks/useAuth";

export default function EntradaSalida({ history }) {
    const user = useAuth(history);



    return (
        <Layout
            usuario={user}>
            <Container fluid>
            <h2 className='titulosSecciones'>ENTRADAS</h2>
            <Table columnas={tablaCajera} datos={EnSaPos} rows={7}/>
            <h2 className='titulosSecciones'>SALIDAS</h2>
            <Table columnas={tablaCajera} datos={EnSaNeg} rows={7}/>
            </Container>
        </Layout>
    )
}


