import React from 'react'
import { Col, Container, Row, Card, Button, Form, Modal } from "react-bootstrap";
import Layout from '../../../../Layout'
import Transacciones from './transacciones.json'
import { tablaCajera } from './tabla-TransReal'
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

export default function TransaccionesRealizadas({ history }) {
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

    <Layout usuario={user}>
      <Container style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px' }}>
        <BackButton history={history} />
        <h2 className='titulosSecciones'>Transacciones Realizadas</h2>
        <div style={{ marginLeft: '115px' }}></div>
      </Container>

      <Container fluid>
        
      <Container fluid>
            <Form
              noValidate
              validated={validatedFechas}
              onSubmit={handleSubmitFechas}
            >
              <Form.Group as={Row} className="mt-3">
                <Form.Group as={Col} xs={6}>
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
        
        <Table columnas={tablaCajera} datos={Transacciones} rows={7} />
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button className='botoncita mb-5' style={{ padding: '8px 20px', borderRadius: '10px' }} >Imprimir reporte</Button>
        </div>

      </Container>
    </Layout>
  )
}




