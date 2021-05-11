import { Button, Card, Form, Modal} from "react-bootstrap";
import "./FormCita.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";



// const user = useAuth(history)

const FormCita = () => {

  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    fecha: "",
    hora: "",
  });
  const [focus, setFocus] = useState({
    nombreFocus: false,
    apellidoFocus: false,
    emailFocus: false,
    telefonoFocus: false,
  });

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else
    handleShow();
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
  };

  const { nombre, apellido, email, telefono, fecha, hora } = datos;
  const { nombreFocus, apellidoFocus, emailFocus, telefonoFocus } = focus;

  const handleFocus = (e) => {
    setFocus({
      ...focus,
      [e.target.name + "Focus"]: true,
    });
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      setFocus({
        ...focus,
        [e.target.name + "Focus"]: false,
      });
    }
  };
  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
  
    <Card>
      <Card.Header as="h1">Programar Cita</Card.Header>
      <Card.Body>

      <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              Cita guardada! 
            </Modal.Header >
            <Modal.Body>
              Un agente se contactará pronto para informarle la hora de la cita programada, gracias por confiar en nosotros. <br/>
              Atte. Dofus.
            </Modal.Body>
            <Modal.Footer>
            <Link to={`/cliente/inicio`}>
              <Button type='primary' onClick={handleClose}>
                Aceptar
              </Button>
              </Link>
            </Modal.Footer>
          </Modal>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Card.Title>Datos Personales</Card.Title>
          <Form.Group className="form-group-2" controlId="validationName">
            <Form.Label
              className="form-label-2"
              style={{
                top: nombreFocus ? "0" : "12px",
                fontSize: nombreFocus ? ".8rem" : "1rem",
              }}
            >
              Nombre
            </Form.Label>
            <Form.Control
              required
              className="form-control-2"
              onFocus={(e) => handleFocus(e)}
              onBlur={(e) => handleBlur(e)}
              onChange={(e) => handleChange(e)}
              type="text"
              name="nombre"
              value={nombre}
            />
            <Form.Control.Feedback className="feedbackCustom" type="invalid">
              
            </Form.Control.Feedback>
            <Form.Control.Feedback className="feedbackCustom">
              
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="form-group-2" controlId="validationSurName">
            <Form.Label
              className="form-label-2"
              style={{
                top: apellidoFocus ? "0" : "12px",
                fontSize: apellidoFocus ? ".8rem" : "1rem",
              }}
            >
              Apellido
            </Form.Label>
            <Form.Control
              required
              className="form-control-2"
              onFocus={(e) => handleFocus(e)}
              onBlur={(e) => handleBlur(e)}
              onChange={(e) => handleChange(e)}
              type="text"
              name="apellido"
              value={apellido}
            />
            <Form.Control.Feedback className="feedbackCustom" type="invalid">
              
            </Form.Control.Feedback>
            <Form.Control.Feedback className="feedbackCustom">
              
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="form-group-2" controlId="validationEmail">
            <Form.Label
              className="form-label-2"
              style={{
                top: emailFocus ? "0" : "12px",
                fontSize: emailFocus ? ".8rem" : "1rem",
              }}
            >
              Email
            </Form.Label>
            <Form.Control
              required
              className="form-control-2"
              onFocus={(e) => handleFocus(e)}
              onBlur={(e) => handleBlur(e)}
              onChange={(e) => handleChange(e)}
              type="email"
              name="email"
              value={email}
            />
            <Form.Control.Feedback className="feedbackCustom" type="invalid">
              
            </Form.Control.Feedback>
            <Form.Control.Feedback className="feedbackCustom">
              
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="form-group-2" controlId="validationTel">
            <Form.Label
              className="form-label-2"
              style={{
                top: telefonoFocus ? "0" : "12px",
                fontSize: telefonoFocus ? ".8rem" : "1rem",
              }}
            >
              Número de celular
            </Form.Label>
            <Form.Control
              required
              className="form-control-2"
              onFocus={(e) => handleFocus(e)}
              onBlur={(e) => handleBlur(e)}
              onChange={(e) => handleChange(e)}
              type="tel"
              name="telefono"
              value={telefono}
            />
            <Form.Control.Feedback className="feedbackCustom" type="invalid">
              
            </Form.Control.Feedback>
            <Form.Control.Feedback className="feedbackCustom">
              
            </Form.Control.Feedback>
          </Form.Group>

          <Card.Title> Datos de la cita</Card.Title>
          <Form.Group>
            <Form.Label>Fecha</Form.Label>
            <Form.Control
            required
              onChange={(e) => handleChange(e)}
              type="date"
              name="fecha"
              value={fecha}
            />
          </Form.Group>
          {/* <Form.Group>
            <Form.Label>Hora</Form.Label>
            <Form.Control
            required
              onChange={(e) => handleChange(e)}
              type="time"
              name="hora"
              value={hora}
            />
          </Form.Group> */}
          <div style={{display:'flex', justifyContent:'center'}}>
          <Button variant="primary" type="submit" style={{display:'flex'}}>Programar</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>

  
    </>
  );
};

export default FormCita;
