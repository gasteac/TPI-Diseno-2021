import React, { useContext, useEffect, useState } from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import BackButton from "../../../../../../components/BackButton";
import citasContext from "../../../../../../context/citasContext/citasContext";
import useAuth from "../../../../../../hooks/useAuth";
import Layout from "../../../../../Layout";

const AsignarAgente = ({ history }) => {
  const [formSate, setFormState] = useState({
    hora: "",
    fecha: "",
    agente: "",
  });
  const CitasContext = useContext(citasContext);
  const { citasSeleccionadas } = CitasContext;

  const [validated, setValidated] = useState(false);
  const [cliente, setCliente] = useState(citasSeleccionadas[0]);
  const [alerta, setAlerta] = useState(false);
  const [final, setFinal] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
    if (form.checkValidity()) {
      setValidated(false);
      setAlerta(true);
      citasSeleccionadas.shift();
      setFormState({
        hora: "",
        fecha: "",
        agente: "",
      });
      if (citasSeleccionadas.length === 0) {
        setFinal(true);
      } else {
        setCliente(citasSeleccionadas[0]);
      }
    }
  };

  const { hora, fecha, agente } = formSate;
 
  const user = useAuth(history);
 
  const {
    values: { first_name, last_name},
  } = cliente;

  const handleChange = (e) => {
    setFormState({
      ...formSate,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (alerta) {
      setInterval(() => setAlerta(false), 2000);
    }
  }, [alerta]);

  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col xs={4}>
            <BackButton history={history} />
          </Col>
          <Col xs={4}>
            {alerta ? (
              <Alert variant="success">¡Cita concretada con éxito!</Alert>
            ) : null}
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col xs={4}>
            <Card>
              <Card.Header>
                Cliente: {first_name} {last_name}
              </Card.Header>
              <Card.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row>
                    <Col>
                      <Form.Group>
                        <Form.Label>Seleccione fecha</Form.Label>
                        <Form.Control
                          placeholder=""
                          type="date"
                          name="fecha"
                          value={fecha}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>Seleccine hora</Form.Label>
                        <Form.Control
                          placeholder=""
                          type="time"
                          name="hora"
                          value={hora}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group>
                        <Form.Label>Seleccione un agente</Form.Label>
                        <Form.Control
                          as="select"
                          custom
                          name="agente"
                          value={agente}
                          onChange={handleChange}
                          disabled={!hora && !fecha}
                          required
                        >
                          <option hidden disabled value="">
                            Seleccione un agente
                          </option>
                          <option>Agente 1</option>
                          <option>Agente 2</option>
                          <option>Agente 3</option>
                          <option>Agente 4</option>
                          <option>Agente 5</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Button variant="primary" type="submit" disabled={final}>
                      Asignar agente
                    </Button>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col xs={6}>
            {final ? (
              <Alert variant="warning">
                Ha llegado al final de los seleccionados, para continuar regrese
                a citas.
              </Alert>
            ) : null}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default AsignarAgente;
