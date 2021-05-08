import React, { useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../../../../Layout";
import Fondo from '../../../../../static/images/fondoClientes1.jpg'
import Descripcion from "./components/Descripcion";
import LogoJumbotron from "./components/Logo";
import globalContext from "../../../../../context/globalContext";
import useAuth from "../../../../../hooks/useAuth";

const QuienesSomos = ({history}) => {
  
  const user = useAuth(history)

  document.querySelector('body').style.background = `url(${Fondo})`
  document.querySelector('body').style.backgroundSize = `cover`
  return (
    <Layout
      cliente={user}
    >
      <Container fluid="md">
        <Row>
          <Col>
              <LogoJumbotron />
          </Col>
          <Col>
            <Descripcion style={{background: "rgba(255,255,255,.7)"}} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default QuienesSomos;
