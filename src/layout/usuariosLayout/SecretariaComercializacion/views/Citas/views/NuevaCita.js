import React, { useContext, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import BackButton from "../../../../../../components/BackButton";
import citasContext from "../../../../../../context/citasContext/citasContext";
import useAuth from "../../../../../../hooks/useAuth";
import Layout from "../../../../../Layout";

const NuevaCita = ({ history }) => {
  const CitasContext = useContext(citasContext);
  const { setCitasSeleccionadas } = CitasContext;
  const user = useAuth(history);

  const [formState, setFromState] = useState({
    values: {
      first_name: "",
      last_name: "",
    },
  });

  const { last_name, first_name } = formState;

  const handleChange = (e) => {
    setFromState({
      values: {
        ...formState.values,
        [e.target.name]: e.target.value,
      },
    });
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      history.push("/secretariacomercializacion/citas/propiedadesCita");
      setCitasSeleccionadas([formState]);
      return;
    }

    setValidated(true);
  };
  return (
    <Layout>
      <Container fluid>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Col>
              <BackButton history={history} />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={4}>
              <Card>
                <Card.Header as="h4">
                  Complete los datos del cliente
                </Card.Header>
                <Card.Body>
                  <Form.Group>
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                      placeholder="Apellido"
                      type="text"
                      required
                      name="last_name"
                      value={last_name}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      placeholder="Nombre"
                      type="text"
                      required
                      name="first_name"
                      value={first_name}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control placeholder="Teléfono" type="tel" required />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control placeholder="Email" type="email" required />
                  </Form.Group>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={10} className="justify-content-end d-flex">
              <Button variant="secondary" type="submit">
                Siguiente
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Layout>
  );
};

export default NuevaCita;
