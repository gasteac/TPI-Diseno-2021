import React from 'react'
import { Container } from 'react-bootstrap'
import Layout from '../../../../Layout'
import EnSaPos  from './ensapos.json'
import EnSaNeg from './ensaneg.json'
import {tablitauwu} from './tablitauwu'
import Table from "../../../../../components/Table/";
import useAuth from "../../../../../hooks/useAuth";

export default function EntradaSalida({ history }) {
    const user = useAuth(history);



    return (
        <Layout>
            <Container fluid>
            <h2 className='titulosSecciones'>ENTRADAS</h2>
            <Table columnas={tablitauwu} datos={EnSaPos} />
            <h2 className='titulosSecciones'>SALIDAS</h2>
            <Table columnas={tablitauwu} datos={EnSaNeg} />
            </Container>
        </Layout>
    )
}


