import React from 'react'
import { Container } from 'react-bootstrap'
import Layout from '../../../../Layout'
import Transacciones from './transacciones.json'
import {tablaCajera} from './tabla-TransReal'
import Table from "../../../../../components/Table";
import useAuth from "../../../../../hooks/useAuth";
import search from "../../../../../static/images/Search.svg";
import globalContext from "../../../../../context/globalContext";
import { useContext, useState } from "react";
import {
    Image,
    FormControl,
    InputGroup,
  } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import BackButton from '../../../../../components/BackButton'

export default function TransaccionesRealizadas({ history }) {
    const user = useAuth(history);
    const GlobalContext = useContext(globalContext);
    const { setNombre } = GlobalContext;
    return (
        
        <Layout
        
             usuario={user}>
                 <Container style={{display:'flex', justifyContent:'space-between', marginTop:'12px'}}>
      <BackButton history={history} />
      
      <h2 className='titulosSecciones'>Transacciones Realizadas</h2>
      <div style={{marginLeft:'115px'}}></div>
      </Container> 
            <Container fluid>
           <div style={{display:'flex', justifyContent:'center', alignItems:'center', margin:'10px', marginTop:'30px', marginRight:'75px'}}>
            <InputGroup.Prepend className="ml-5 mr-2">
          <Image src={search} />
        </InputGroup.Prepend>
        <FormControl
          style={{ maxWidth: "30%" }}
          placeholder="Buscar por rango de fechas"
          onChange={(e) => setNombre(e.target.value)}
        />
        </div>
            <Table columnas={tablaCajera} datos={Transacciones} rows={7} />
            <div style={{display:'flex', justifyContent:'center'}}>
            <Button className='botoncita mb-5' style={{padding:'8px 20px', borderRadius:'10px'}} >Imprimir reporte</Button></div>
            </Container>
        </Layout>
    )
}




