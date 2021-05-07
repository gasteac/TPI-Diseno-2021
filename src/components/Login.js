import React, { useState } from "react";
import { Container, Form, Jumbotron, Button, Col, Row, Image } from "react-bootstrap";
import Logo from '../static/images/inmoviliaria-1.svg'

const Login = ({history}) => {
  document.querySelector("body").style.background = "#2B3860";
  const [login, setLogin] = useState(localStorage.setItem('user',''))
  const [bandera, setBandera] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault()
    setBandera(false);
    if (login?.length === 0) {
      setBandera(true);
      return
    }
    if (login?.includes('cliente')) {
      history.push('/clientes/inicio')
      document.querySelector('body').style.background = ''
    }
    if (login?.includes('agente')) {
      history.push('/agente-inmobiliario/inicio')
      document.querySelector('body').style.background = ''
    }
    localStorage.setItem('user', login)
  };

  const handleChange = (e) => {
    setLogin(e.target.value)
  }
  return (
    <>
      <Container fluid="xs" className="mt-5 mx-auto " style={{maxWidth: "60%"}}>
        <Jumbotron className="p-0">
          <Row>
            <Col
              className="p-5"
              sm="8"
              style={{
                display: "grid",
                justifyContent: "center",
                background: "",
                borderTopLeftRadius: ".3rem",
                borderBottomLeftRadius: ".3rem",
              }}
            >
              <h1 className="font-weight-bold">Ingresar a Dofus</h1>
              <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Correo electronico</Form.Label>
                  <Form.Control type="email" placeholder="example@example.com" onChange={e => handleChange(e)} />
                  <Form.Text className="text-muted ml-1">
                    Nunca compartiremos tu contraseña con nadie. 
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>
                <Button variant="primary" type="submit" block style={{background:'#8E97C8', border:'none', borderRadius:'9px'}}>
                Ingresar
                </Button>
              </Form>
            </Col>
            <Col sm="4" style={{ background: "#8E97C8", borderTopRightRadius: ".3rem", borderBottomRightRadius: ".3rem", display: "grid", alignContent: "center" }} className="justify-content-center">
              <Image src={Logo} style={{minHeight:"80%"}}/>
              <h1 className="font-weight-bold">Dofus 2.0</h1>
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    </>
  );
};

export default Login;
