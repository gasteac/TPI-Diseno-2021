import { Col, Container, Row } from "react-bootstrap";
import ButtonCard from "../../../components/ButtonCard";
import Notificaciones from "../../../components/Notificaciones";
import useAuth from "../../../hooks/useAuth";
import Layout from "../../Layout";
import img from "../../../../src/static/images/casita.jpg";
export default function JefaAdministracion({ history }) {
  const user = useAuth(history);
  document.querySelector("body").style.background = `url(${img})`;
  document.querySelector("body").style.backgroundSize = `cover`;
  return (
    <Layout usuario={user} cliente={true}>
      <Container
        fluid
        className="d-flex justify-content-center"
        style={{ marginTop: "40px" }}
      >
        <Row>
          <Col xs={8} className="justify-content-center">
            <Notificaciones nombreDeUsuario="Franco" />
          </Col>
          <Col
            xs={4}
            className="d-flex align-content-center align-items-center"
          >
            <Row className="d-flex justify-content-center align-items-center">
                <ButtonCard
                  user={user}
                  seccion={"Transacciones"}
                  link={"link-1"}
                  style={{
                    background: "#50628C",
                    marginTop: "10px",
                    minWidth: "200px",
                    minHeight: "190px",
                  }}
                />
            
                <ButtonCard
                  user={user}
                  seccion={"Clientes"}
                  link={"link-2"}
                  style={{
                    background: "#50628C",
                    marginTop: "10px",
                    minWidth: "200px",
                    minHeight: "190px",
                  }}
                />
             
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
