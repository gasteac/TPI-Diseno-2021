import React, { useState} from "react";
import { Col, Container, Row, Card, Button, Form, Modal } from "react-bootstrap";
import Layout from "../../../../../Layout";
import DatosDelCliente from "./DatosCliente"
import { Link } from "react-router-dom";
import BackButton from "../../../../../../components/BackButton";

const EditarCliente = ({history}) =>{

  const [validatedCliente, setValidatedCliente] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleSubmitCliente = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      handleShow();
      event.preventDefault();
      event.stopPropagation();
    }

    setValidatedCliente(true);
  
  };

  return(
      <Layout>
    
        <Container fluid>
          <BackButton history={history} /> 
          <Form
            noValidate 
            validated={validatedCliente}
            onSubmit={handleSubmitCliente}
          >
            <Form.Group as={Row} className="mt-3 justify-content-center">
              <Form.Group as={Col} xs={8}>
                <Form.Group as={Card}>
                  <Card.Header as="h2">Datos del cliente</Card.Header>
                  <Card.Body>
                    <DatosDelCliente/>
                  </Card.Body>
                </Form.Group>
              </Form.Group>
            </Form.Group>
            
            <Row className="justify-content-center my-3">
                <Col xs={4}>
                  <Button type="sumbit" variant="success" block >
                      Guardar
                  </Button>
                </Col>
              </Row>
              
          </Form>
      </Container>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header style={{ background: '#27d85a', color: '#FAFAFA', paddingBottom:'4px'}}>
          <h4 style={{alignSelf:'flex-end'}}>Información actualizada!</h4>
        </Modal.Header >
        <Modal.Body>
          <h5>información actualizada correctamente.</h5> 
          <h6>Podra observarlo en la lista de clientes.</h6> 
        </Modal.Body>
        <Modal.Footer>
          <Link to={'/agenteinmobiliario/Clientes'}>
            <Button type='primary' className="btn btn-success">
              Aceptar
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
}

export default EditarCliente;
