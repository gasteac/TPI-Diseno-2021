import React from "react";
import {
  Col,
  Container,
  Row,
  Card,
  Button,
  Form,
  Modal,
} from "react-bootstrap";
import Layout from "../../../../Layout";
import EnSaPos from "./ensapos.json";
import EnSaNeg from "./ensaneg.json";
import { tablaCajera } from "./tabla-entsal";
import Table from "../../../../../components/Table";
import useAuth from "../../../../../hooks/useAuth";
import search from "../../../../../static/images/Search.svg";
import globalContext from "../../../../../context/globalContext";
import { useContext, useState } from "react";
import { Image, FormControl, InputGroup } from "react-bootstrap";
import BackButton from "../../../../../components/BackButton";
import { divide } from "lodash-es";

export default function EntradaSalida({ history }) {
  const user = useAuth(history);
  const GlobalContext = useContext(globalContext);
  const { setNombre } = GlobalContext;
  document.querySelector("body").style.background = "";

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

  const { fechaDesdeEntradas, fechaHastaEntradas } = formStateEntradas;

  const { fechaDesdeSalidas, fechaHastaSalidas } = formStateSalidas;

  const handleChangeEntradas = (e) => {
    setFormStateEntradas({
      ...formStateEntradas,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeSalidas = (e) => {
    setFormStateSalidas({
      ...formStateSalidas,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout usuario={user}>
      <Container fluid>
        <Row className="justify-content-center">
          <h2 className="titulosSecciones">Entradas</h2>
        </Row>
        <Row className="justify-content-center">
          <Col xs={6}>
            <Form
              className="d-flex justify-content-center"
              noValidate
              validated={validatedFechasEntradas}
              onSubmit={handleSubmitFechasEntradas}
            >
              <Card style={{maxWidth:'500px'}} >
                <Card.Header className='d-flex justify-content-center' as="h5">Filtrar por fecha</Card.Header>
                <Card.Body>
                  <Form.Row  className="d-flex justify-content-center">
                    <Form.Group style={{ marginRight: "20px" }}  >
                      <Form.Label >Desde</Form.Label>
                      <Form.Control
                      
                        required
                        onChange={(e) => handleChangeEntradas(e)}
                        type="date"
                        name="fechaDesdeEntradas"
                        value={fechaDesdeEntradas}
                      />
                    </Form.Group>
                    <Form.Group style={{ marginRight: "20px" }}>
                      <Form.Label>Hasta</Form.Label>
                      <Form.Control
                        required
                        onChange={(e) => handleChangeEntradas(e)}
                        type="date"
                        name="fechaHastaEntradas"
                        value={fechaHastaEntradas}
                      />
                    </Form.Group>
                    <Form.Group className='d-flex justify-content-center'>
                      <Button
                        type="sumbit"
                        variant="success"
                        style={{ marginTop: "10px", marginRight:'10px'  }}
                      >
                        Filtrar
                      </Button>
                      <Button variant="primary" type="button" style={{ marginTop: "10px" }}>
              Agregar entrada
            </Button>
                    </Form.Group>
                  </Form.Row>
                </Card.Body>
              </Card>
            </Form>
          </Col>
          
        </Row>
        <Row className="justify-content-center">
          <Col>
            <Table columnas={tablaCajera} datos={EnSaPos} rows={7} />
          </Col>
        </Row>
        { 
          (user.includes('gerentegeneral')) ? (
            <Button
              style={{ marginTop: "20px" }}
              type="button"
              variant="info"
            >
              Imprimir reporte
            </Button>
          ) : null
        }
      </Container>

      <Container fluid>
        <Row className="justify-content-center">
          <h2 className="titulosSecciones">Salidas</h2>
        </Row>
        <Row className="justify-content-center">
          <Col xs={6}>
            <Form
              className="d-flex justify-content-center"
              noValidate
              validated={validatedFechasEntradas}
              onSubmit={handleSubmitFechasEntradas}
            >
              <Card style={{maxWidth:'500px'}} >
                <Card.Header className='d-flex justify-content-center' as="h5">Filtrar por fecha</Card.Header>
                <Card.Body>
                  <Form.Row  className="d-flex justify-content-center">
                    <Form.Group style={{ marginRight: "20px" }}  >
                      <Form.Label >Desde</Form.Label>
                      <Form.Control
                      
                        required
                        onChange={(e) => handleChangeEntradas(e)}
                        type="date"
                        name="fechaDesdeEntradas"
                        value={fechaDesdeEntradas}
                      />
                    </Form.Group>
                    <Form.Group style={{ marginRight: "20px" }}>
                      <Form.Label>Hasta</Form.Label>
                      <Form.Control
                        required
                        onChange={(e) => handleChangeEntradas(e)}
                        type="date"
                        name="fechaHastaEntradas"
                        value={fechaHastaEntradas}
                      />
                    </Form.Group>
                    <Form.Group className='d-flex justify-content-center'>
                      <Button
                        type="sumbit"
                        variant="success"
                        style={{ marginTop: "10px", marginRight:'10px'  }}
                      >
                        Filtrar
                      </Button>
                      <Button variant="primary" type="button" style={{ marginTop: "10px" }}>
              Agregar salida
            </Button>
                    </Form.Group>
                  </Form.Row>
                </Card.Body>
              </Card>
            </Form>
          </Col>
          
        </Row>
        <Row className="justify-content-center">
          <Col>
            <Table columnas={tablaCajera} datos={EnSaNeg} rows={7} />
          </Col>
        </Row>
        { 
          (user.includes('gerentegeneral')) ? (
            <Button
              style={{ marginTop: "20px" }}
              type="button"
              variant="info"
            >
              Imprimir reporte
            </Button>
          ) : null
        }
      </Container>
    </Layout>
  );
}
