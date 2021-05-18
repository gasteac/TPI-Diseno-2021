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

        <Container
          fluid
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Row className="justify-content-flex-start">
            <Col className="d-flex justify-content-center">
              <Form
                noValidate
                validated={validatedFechas}
                onSubmit={handleSubmitFechas}
              >
                <Card
                  style={{
                    background: "#FAFAFA01",
                    border: "none",
                    display: "flex",
                    alignItems: "end",
                    alignContent: "end",
                  }}
                >
                  <Card.Header
                    className="d-flex justify-content-flex-start"
                    as="h5"
                    style={{
                      background: "#FAFAFA01",
                      border: "none",
                      fontWeight: "800",
                      textDecorationLine: "underline wavy",
                    }}
                  >
                    Filtrar por fecha:
                  </Card.Header>
                  <Card.Body>
                    <Form.Row className="d-flex justify-content-center">
                      <Form.Group style={{ marginRight: "20px" }}>
                        <Form.Label style={{ fontWeight: "800" }}>
                          Desde
                        </Form.Label>
                        <Form.Control
                          required
                          onChange={(e) => handleChange(e)}
                          type="date"
                          name="fechaDesde"
                          value={fechaDesde}
                        />
                      </Form.Group>
                      <Form.Group style={{ marginRight: "20px" }}>
                        <Form.Label style={{ fontWeight: "800" }}>
                          Hasta
                        </Form.Label>
                        <Form.Control
                          required
                          onChange={(e) => handleChange(e)}
                          type="date"
                          name="fechaHasta"
                          value={fechaHasta}
                        />
                      </Form.Group>

                      <Form.Group className="d-flex align-content-end align-items-end">
                        <Button
                          type="sumbit"
                          variant="success"
                          style={{ marginRight: "10px" }}
                        >
                          Filtrar
                        </Button>
                      </Form.Group>
                    </Form.Row>
                  </Card.Body>
                </Card>
              </Form>
            </Col>
          </Row>
        </Container>
        <Row className="justify-content-center">
          <Col>
            <Table columnas={tablaCajera} datos={Transacciones} rows={7} />
          </Col>
        </Row>
        <Row className="justify-content-center">
          {user.includes("gerentegeneral") ? (
            <Button style={{ marginTop: "20px" }} type="button" variant="info">
              Imprimir reporte
            </Button>
          ) : null}
        </Row>
      </Container>
    </Layout>
  );
}
