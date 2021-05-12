import { Button, Card, Container, Form, Modal} from "react-bootstrap";
import "./FormCita.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import legoshi from "./legoshi.png";



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
    <Container>
      <div>
      <img style={{maxHeight:'400px', marginRight:'50px'}} src={legoshi} alt='legoshi'/>
      <h2 style={{textAlign:'center'}}>Legoshi hermoso uwu</h2></div>
    <Card style={{border:'none'}}>
      <Card.Header as="h1" style={{textShadow:'2px 2px 5px black',background:'#2B3860', color:'white', borderTopRightRadius:'10px', borderTopLeftRadius:'10px'}}>Programar Cita</Card.Header>
      <Card.Body style={{background:'#8E97C8', borderBottomLeftRadius:'10px', borderBottomRightRadius:'10px'}}>

      

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Card.Title  style={{color:'white', textShadow:'2px 2px 7px black'}}>Ingrese sus datos Personales</Card.Title>
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
              
              value={nombre}
              color='white'
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
              value={telefono}
            />
            <Form.Control.Feedback className="feedbackCustom" type="invalid">
              
            </Form.Control.Feedback>
            <Form.Control.Feedback className="feedbackCustom">
              
            </Form.Control.Feedback>
          </Form.Group>

          {/* <Card.Title> Datos de la cita</Card.Title>
          <Form.Group>
            <Form.Label>Fecha</Form.Label>
            <Form.Control
            required
              onChange={(e) => handleChange(e)}
              type="date"
              name="fecha"
              value={fecha}
            />
          </Form.Group> */}
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
          <Button className='botoncita'>Programar</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
            </Container>

    <Modal show={show} onHide={handleClose}>
            <Modal.Header>
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
    </>
  );
};

export default FormCita;
