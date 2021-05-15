import React from 'react'
import { Col, Container, Row, Card, Button, Form, Modal } from "react-bootstrap";
import Layout from '../../../../Layout'
import EnSaPos from './ensapos.json'
import EnSaNeg from './ensaneg.json'
import { tablaCajera } from './tabla-entsal'
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
import BackButton from '../../../../../components/BackButton'

export default function EntradaSalida({ history }) {
  const user = useAuth(history);
  const GlobalContext = useContext(globalContext);
  const { setNombre } = GlobalContext;
  document.querySelector('body').style.background = ''

  const [validatedFechas, setValidatedFechas] = useState(false);
  
  const handleSubmitFechas = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidatedFechas(true);
  
  };


  const [formState, setFormState] = useState({
    fechaDesde: "",
    fechaHasta: "",
  });

  const {
    fechaDesde,
    fechaHasta,
  } = formState

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  };


  return (
    <Layout
      usuario={user}>
      <Container style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px' }}>
        <BackButton history={history} />

        <h2 className='titulosSecciones'>Entradas</h2>
        <div style={{ marginLeft: '115px' }}></div>
      </Container>
      <Container fluid>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', margin: '10px', marginTop: '30px' }} >
      

          <Container fluid>
            <Form
              noValidate
              validated={validatedFechas}
              onSubmit={handleSubmitFechas}
            >
              <Form.Group as={Row} className="mt-3">
                <Form.Group as={Col} xs={8}>
                  <Form.Group as={Card}>
                    <Card.Header as="h5">Filtrar por fecha</Card.Header>
                    <Card.Body>
                      <Form.Row>

                        <Form.Group >
                          <Form.Label>Desde</Form.Label>
                          <Form.Control
                            required
                            onChange={(e) => handleChange(e)}
                            type="date"
                            name="fechaDesde"
                            value={fechaDesde}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Hasta</Form.Label>
                          <Form.Control
                            required
                            onChange={(e) => handleChange(e)}
                            type="date"
                            name="fechaHasta"
                            value={fechaHasta}
                          />
                        </Form.Group>

                        <Form.Group>
                          <Button type="sumbit" variant="success" style={{marginTop:'32px', marginLeft:'10px'}}>
                            Filtrar
                          </Button>
                        </Form.Group>
          
                      </Form.Row>

                      
                     
                    </Card.Body>
                  </Form.Group>
                </Form.Group>
            </Form.Group>
            </Form>
          </Container>
          
          <div>
            <Button className='botoncita' style={{width:'200px',marginTop:'50px'}}>Agregar entrada</Button>
          </div>
        </div>
        <Table columnas={tablaCajera} datos={EnSaPos} rows={7} />

        <Container style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px' }}>
          <div></div>
          <h2 className='titulosSecciones'>Salidas</h2>
          <div></div>
        </Container>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px', marginTop: '30px', marginRight: '75px' }}>
          <InputGroup.Prepend className="ml-5 mr-2">
            <Image src={search} />
          </InputGroup.Prepend>
          <FormControl
            style={{ maxWidth: "20%" }}
            placeholder="Buscar por rango de fechas"
            onChange={(e) => setNombre(e.target.value)}
          />
          <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '20px' }}>
            <Button className='botoncita'>Agregar Salida</Button></div>
        </div>
        <Table columnas={tablaCajera} datos={EnSaNeg} rows={7} />
      </Container>
    </Layout>
  )
}


