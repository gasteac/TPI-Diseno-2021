import { Col, Container, Row } from "react-bootstrap";
import ButtonCard from "../../../components/ButtonCard";
import Notificaciones from "../../../components/Notificaciones";
import useAuth from "../../../hooks/useAuth";
import Layout from "../../Layout";
import img from "../../../../src/static/images/casita.jpg";



export default function GerenteGeneral({ history }) {
  const user = useAuth(history);
document.querySelector("body").style.background = `url(${img})`;
document.querySelector("body").style.backgroundSize = `cover`;
  return (
    <Layout usuario={user} cliente={true}>
      <Container 
      fluid
      className=""
      style={{ marginTop: "40px" }}
      >
        <Row className="d-flex align-content-center align-items-center">
          <Col md={5}>
            <Notificaciones nombreDeUsuario="Puppy" />
          </Col> 
          <Col >
          <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <ButtonCard user={user} seccion={"Clientes"} link={"link-1"} />
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
            <ButtonCard user={user} seccion={"EntradaSalida"} link={"link-3"} />
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
            <ButtonCard user={user} seccion={"Transacciones"} link={"link-5"} />
            </Col>
            </Row>

            <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <ButtonCard user={user} seccion={"Alquileres"} link={"link-2"} />
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
            <ButtonCard user={user} seccion={"Propiedades"} link={"link-4"} />
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
            <ButtonCard user={user} seccion={"Ventas"} link={"link-6"} />
            </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
