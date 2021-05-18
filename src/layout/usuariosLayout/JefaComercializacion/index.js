import { Col, Container, Row } from "react-bootstrap";
import ButtonCard from "../../../components/ButtonCard";
import Notificaciones from "../../../components/Notificaciones";
import useAuth from "../../../hooks/useAuth";
import Layout from "../../Layout";
import img from  "../../../../src/static/images/caCITA.jpg"

export default function JefaComercializacion({ history }) {
    const user = useAuth(history);
    document.querySelector('body').style.background = `url(${img})`
document.querySelector('body').style.backgroundSize = `cover`
    return (
      <Layout usuario={user} cliente={true}>
        <Container style={{marginTop:'40px'}}>
          <Row>
            <Col xs={12} md={6}>
                <Notificaciones nombreDeUsuario="Chifflets" />
            </Col>
            <Col className="d-flex align-items-center">
                <Row>
                    <Col>
                        <ButtonCard user={user} seccion={"Reportes"} link={"link-1"} />
                    </Col>
                    <Col>
                        <ButtonCard user={user} seccion={"Agenda"} link={"link-2"} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ButtonCard user={user}  seccion={"Propiedades"} link={"link-3"} />
                    </Col>
                    <Col>
                        <ButtonCard user={user}  seccion={"Clientes"} link={"link-4"} />
                    </Col>
                </Row>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  };