import React from "react";
import Layout from "../../Layout";
import Notificaciones from "../../../components/Notificaciones";
import ButtonCard from "../../../components/ButtonCard";
import useAuth from "../../../hooks/useAuth";
import img from "../../../../src/static/images/caCITA.jpg";
import { Col, Container, Row } from "react-bootstrap";

const AgenteInmobiliario = ({ history }) => {
  const user = useAuth(history);

  document.querySelector("body").style.background = `url(${img})`;
  document.querySelector("body").style.backgroundSize = `cover`;

  return (
    <Layout usuario={user} cliente={true}>
      <Container fluid>
        <Row>
          <Col xs={12} md={5}>
            <Notificaciones nombreDeUsuario="Chifflets" />
          </Col>
          <Col className="d-flex align-items-center">
            <Row>
              <Col>
                <ButtonCard user={user} seccion={"Clientes"} link={"link-1"} />
              </Col>
              <Col>
                <ButtonCard user={user} seccion={"Agenda"} link={"link-2"} />
              </Col>
              <Col>
                <ButtonCard user={user}  seccion={"Propiedades"} link={"link-3"} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default AgenteInmobiliario;
