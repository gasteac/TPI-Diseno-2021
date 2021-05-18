import React, { useContext } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  CarouselItem,
  Carousel,
} from "react-bootstrap";
import ButtonCard from "../../../components/ButtonCard";
import Notificaciones from "../../../components/Notificaciones";
import propiedadesContext from "../../../context/contextPropiedades/propiedadesContext";
import useAuth from "../../../hooks/useAuth";
import Layout from "../../Layout";
import img from "../../../../src/static/images/casita.jpg";





const EmpleadoDeMarketing = ({ history }) => {
  const user = useAuth(history);
  const asdsa = useContext(propiedadesContext);
  const { propiedades } = asdsa;
  document.querySelector('body').style.background = `url(${img})`
document.querySelector('body').style.backgroundSize = `cover`
  return (
    <Layout usuario={user} cliente={true}>
      <Container className="flex-column" style={{marginTop:'40px'}}>
        <Row>
          <Col>
            <Notificaciones nombreDeUsuario="Pepita" />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <ButtonCard user={user} seccion={"Propiedades"} link={"link-1"} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default EmpleadoDeMarketing;
