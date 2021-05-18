import React, { useState, useContext, useEffect } from "react";
import {
  Container,
  Form,
  Jumbotron,
  Button,
  Col,
  Row,
  Image,
} from "react-bootstrap";
import globalContext from "../context/globalContext";
import Logo from "../static/images/inmoviliaria-1.svg";
import Fondo from '../static/images/interiores.jpg'

const Login = ({ history }) => {
  const GlobalContext = useContext(globalContext);
  const { userLogin, setActiveNavbarLink, logOut } = GlobalContext;

  const [login, setLogin] = useState(localStorage.setItem("user", ""));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (login?.includes("cliente")) {
      history.push("/cliente/inicio");
      document.querySelector("body").style.background = "";
    }
    if (login?.includes("agenteinmobiliario")) {
      history.push("/agenteinmobiliario/inicio");
      document.querySelector("body").style.background = "";
    }
    if (login?.includes("secretariacomercializacion")) {
      history.push("/secretariacomercializacion/inicio");
      document.querySelector("body").style.background = "";
    }
    if(login?.includes("cajera")) {
      history.push('/cajera/inicio')
      document.querySelector("body").style.background = "";
    }
    if(login?.includes("marketing")) {
      history.push('/marketing/inicio')
      document.querySelector("body").style.background = "";
    }
    if(login?.includes("jefacomercializacion")) {
      history.push('/jefacomercializacion/inicio')
      document.querySelector("body").style.background = "";
    }
    if(login?.includes("admin")) {
      history.push('/admin/inicio')
    }
    if(login?.includes("jefaadministracion")) {
      history.push('/jefaadministracion/inicio')
      document.querySelector("body").style.background = "";
    }
    if(login?.includes("gerentegeneral")) {
      history.push('/gerentegeneral/inicio')
      document.querySelector("body").style.background = "";
    }
    localStorage.setItem("user", login);
    userLogin(login);
  };

  const handleChange = (e) => {
    setLogin(e.target.value.split("@")[0]);
  };

  useEffect(() => {
    setActiveNavbarLink('link-0')
    logOut()
  }, [])

  document.querySelector('body').style.background = `url(${Fondo})`
  document.querySelector('body').style.backgroundSize = `cover`
  document.querySelector('body').style.backgroundPosition = `auto`
  document.querySelector('body').style.backgroundSize = `no-repeat`

  return (
    <>

      <div className=''>
      <Container
        // fluid="xs"
        // className="mx-auto mt-5"
        // style={{ maxWidth: "50%" }}
      >
        <Jumbotron className="p-0">
          <Row>
            <Col
              className="p-5"
              sm="8"
              style={{
                display: "grid",
                justifyContent: "center",
                borderTopLeftRadius: ".4rem",
                borderBottomLeftRadius: ".4rem",
              }}
            >
              <h1 className="titulo-login">Ingresar a Domus</h1>
              <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group controlId="formBasicEmail">
                  {/* <Form.Label>Ingrese su correo</Form.Label> */}
                  <Form.Control
                    type="email"
                    placeholder="Ingrese su correo electrónico"
                    onChange={(e) => handleChange(e)}
                  />
                  <Form.Text className="text-muted">
                    {/* Nunca compartiremos tu contraseña con nadie. */}
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  {/* <Form.Label>Ingrese su contraseña</Form.Label> */}
                  <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>
                <hr/>
                <Button className='boton-inicio' variant="primary" type="submit" block style={{background:'#8E97C8', border:'none', borderRadius:'9px'}}>
                Ingresar
                </Button>
              </Form>
            </Col>
            <Col
              sm="4"
              style={{
                background: "#8E97C8",
                borderTopRightRadius: ".3rem",
                borderBottomRightRadius: ".3rem",
                display: "grid",
                alignContent: "center",
              }}
              className="justify-content-center"
            >
              <Image src={Logo} style={{ minHeight: "80%"}} />
              <h1 className="font-weight-bold mt-3"   style={{textShadow:'3px 3px grey', color:'white', textAlign:'center'}}>Domus</h1>
            </Col>
          </Row>
        </Jumbotron>
      </Container>
      </div>
    </>
  );
};

export default Login;
