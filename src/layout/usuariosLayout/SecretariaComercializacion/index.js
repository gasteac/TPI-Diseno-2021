import useAuth from "../../../hooks/useAuth";
import Layout from "../../Layout";
import Notificaciones from "../../../components/Notificaciones";
import ButtonCard from "../../../components/ButtonCard";
import img from "../../../../src/static/images/casita.jpg";
import { Col, Container, Row } from "react-bootstrap";
export default function SecretariaComercializacion({ history }) {
  const user = useAuth(history);
  document.querySelector("body").style.background = `url(${img})`;
  document.querySelector("body").style.backgroundSize = `cover`;
  return (
    <Layout cliente={true} user={user}>
      <Container
        fluid
        className="d-flex justify-content-center"
        style={{ marginTop: "40px" }}
      >
        <Row>
          <Col xs={8} className="justify-content-center">
            <Notificaciones nombreDeUsuario="Maria" />
          </Col>
          <Col xs={4} className="d-flex align-content-center align-items-center">
            <Row  className="d-flex justify-content-center align-items-center">
              
                <ButtonCard
                  user={user}
                  seccion={"Agenda"}
                  link={"link-1"}
                  style={{
                    background: "#50628C",
                    marginTop: "10px",
                    minWidth: "200px",
                    minHeight: "190px",
                  }}/>
   
                <ButtonCard
                  user={user}
                  seccion={"Citas"}
                  link={"link-2"}
                  style={{
                    background: "#50628C",
                    marginTop: "10px",
                    minWidth: "200px",
                    minHeight: "190px",
                  }}/>
             
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
