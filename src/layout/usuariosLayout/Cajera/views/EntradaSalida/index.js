import React from 'react'
import { Container } from 'react-bootstrap'
import Layout from '../../../../Layout'
import EnSaPos  from './ensapos.json'
import EnSaNeg from './ensaneg.json'
import {tablaCajera} from './tabla-entsal'
import Table from "../../../../../components/Table/";
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

export default function EntradaSalida({ history }) {
    const user = useAuth(history);
    const GlobalContext = useContext(globalContext);
    const { setNombre } = GlobalContext;


    return (
        <Layout
            usuario={user}>
            <Container fluid>
            <h2 className='titulosSecciones'>ENTRADAS</h2>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', margin:'10px', marginTop:'30px', marginRight:'75px'}}>
            <InputGroup.Prepend className="ml-5 mr-2">
          <Image src={search} />
        </InputGroup.Prepend>
        <FormControl
          style={{ maxWidth: "16%" }}
          placeholder="Buscar por rango de fechas"
          onChange={(e) => setNombre(e.target.value)}
        />
        <div style={{display:'flex', justifyContent:'center', marginLeft: '20px'}}>
            <Button className='botoncita' >Agregar entrada</Button></div>
        </div>
            <Table columnas={tablaCajera} datos={EnSaPos} rows={7}/>
            
            <h2 className='titulosSecciones'>SALIDAS</h2>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', margin:'10px', marginTop:'30px', marginRight:'75px'}}>
            <InputGroup.Prepend className="ml-5 mr-2">
          <Image src={search} />
        </InputGroup.Prepend>
        <FormControl
          style={{ maxWidth: "16%" }}
          placeholder="Buscar por rango de fechas"
          onChange={(e) => setNombre(e.target.value)}
        />
        <div style={{display:'flex', justifyContent:'center', marginLeft: '20px'}}>
            <Button className='botoncita'>Agregar Salida</Button></div>
            </div> 
            <Table columnas={tablaCajera} datos={EnSaNeg} rows={7}/>
            </Container>
        </Layout>
    )
}


