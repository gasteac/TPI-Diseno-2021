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
import Transacciones from "./transacciones.json";
import { tablaCajera } from "./tabla-TransReal";
import Table from "../../../../../components/Table";
import useAuth from "../../../../../hooks/useAuth";
import search from "../../../../../static/images/Search.svg";
import globalContext from "../../../../../context/globalContext";
import { useContext, useState } from "react";
import { Image, FormControl, InputGroup } from "react-bootstrap";
import BackButton from "../../../../../components/BackButton";

export default function TransaccionesRealizadas({ history }) {
  const user = useAuth(history);
  const GlobalContext = useContext(globalContext);
  const { setNombre } = GlobalContext;
  document.querySelector("body").style.background = "";

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

  const { fechaDesde, fechaHasta } = formState;

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout usuario={user}>
      <Container fluid>
        <Row className="justify-content-center">
          <h2 className="titulosSecciones">Transacciones Realizadas</h2>
        </Row>

        <Row>
            <Form
              noValidate
              validated={validatedFechas}
              onSubmit={handleSubmitFechas}
              className="ml-5"
            >
              <Card>
                <Card.Header as="h5">Filtrar por fecha</Card.Header>
                <Card.Body>
                  <Form.Row>
                    <Form.Group>
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
                      <Button
                        type="sumbit"
                        variant="success"
                        style={{ marginTop: "32px", marginLeft: "10px" }}
                      >
                        Filtrar
                      </Button>
                    </Form.Group>
                  </Form.Row>
                </Card.Body>
              </Card>
            </Form>
        </Row>
        <Row className="justify-content-center">
          <Table columnas={tablaCajera} datos={Transacciones} rows={7} />
        </Row>
        <Row className="justify-content-center">
          <Button className="mb-5" variant="primary">
            Imprimir reporte
          </Button>
        </Row>
      </Container>
    </Layout>
  );
}
