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

  const [validatedFechasEntradas, setValidatedFechasEntradas] = useState(false);
  const [validatedFechasSalidas, setValidatedFechasSalidas] = useState(false);
  
  const handleSubmitFechasEntradas = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidatedFechasEntradas(true);
  
  };

  const handleSubmitFechasSalidas = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidatedFechasSalidas(true);
  
  };

  const [formStateEntradas, setFormStateEntradas] = useState({
    fechaDesdeEntradas: "",
    fechaHastaEntradas: "",
  });

  const [formStateSalidas, setFormStateSalidas] = useState({
    fechaDesdeSalidas: "",
    fechaHastaSalidas: "",
  });

  const {
    fechaDesdeEntradas,
    fechaHastaEntradas,
  } = formStateEntradas

  const {
    fechaDesdeSalidas,
    fechaHastaSalidas,
  } = formStateSalidas

  const handleChangeEntradas = (e) => {
    setFormStateEntradas({
      ...formStateEntradas,
      [e.target.name]: e.target.value
    })
  };

  const handleChangeSalidas = (e) => {
    setFormStateSalidas({
      ...formStateSalidas,
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
            <Form noValidate validated={validatedFechasEntradas} onSubmit={handleSubmitFechasEntradas}>
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
                            onChange={(e) => handleChangeEntradas(e)}
                            type="date"
                            name="fechaDesdeEntradas"
                            value={fechaDesdeEntradas}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Hasta</Form.Label>
                          <Form.Control
                            required
                            onChange={(e) => handleChangeEntradas(e)}
                            type="date"
                            name="fechaHastaEntradas"
                            value={fechaHastaEntradas}
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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', margin: '10px', marginTop: '30px' }} >
          <Container fluid>
            <Form noValidate validated={validatedFechasSalidas} onSubmit={handleSubmitFechasSalidas}>
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
                            onChange={(e) => handleChangeSalidas(e)}
                            type="date"
                            name="fechaDesdeSalidas"
                            value={fechaDesdeSalidas}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Hasta</Form.Label>
                          <Form.Control
                            required
                            onChange={(e) => handleChangeSalidas(e)}
                            type="date"
                            name="fechaHastaSalidas"
                            value={fechaHastaSalidas}
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
            <Button className='botoncita' style={{width:'200px',marginTop:'50px'}}>Agregar salida</Button>
          </div>
        </div>
        <Table columnas={tablaCajera} datos={EnSaNeg} rows={7} />
      </Container>
    </Layout>
  )
}


