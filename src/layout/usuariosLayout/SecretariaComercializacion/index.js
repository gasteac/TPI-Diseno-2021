import useAuth from "../../../hooks/useAuth";
import Layout from "../../Layout";
import Notificaciones from "../../../components/Notificaciones";
import ButtonCard from "../../../components/ButtonCard";
import img from "../../../../src/static/images/caCITA.jpg";
import { Col, Container, Row } from "react-bootstrap";
export default function SecretariaComercializacion({ history }) {
  const user = useAuth(history);
  document.querySelector("body").style.background = `url(${img})`;
  document.querySelector("body").style.backgroundSize = `cover`;
  return (
    <Layout cliente={true}>
      <Container fluid>
        <Row>
          <Col xs={12} md={5}>
            <Notificaciones nombreDeUsuario="Maria" />
          </Col>
          <Col className="d-flex align-items-center justify-content-center ">
            <Row>
              <Col>
                <ButtonCard user={user} seccion={"Agenda"} link={"link-1"} />
              </Col>
              <Col>
                <ButtonCard user={user} seccion={"Citas"} link={"link-2"} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
