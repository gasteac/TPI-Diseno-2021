import { Card, Col, Container, Row } from "react-bootstrap";
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
          <Card.Header  style={{display:'flex', justifyContent:'center', fontWeight:'900', background:'#50628C90', border:'none', borderRadius:'30px'}}>
          <div>
          <h2 style={{fontWeight:'900', color:'white', textShadow:'2px 2px 10px black'}}>Reportes</h2>
          </div>
          </Card.Header>
          <Row>
          <Col className="d-flex justify-content-center align-items-center">
            
            <ButtonCard user={user} seccion={"R.Clientes"} link={"link-1"} />
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
            <ButtonCard user={user} seccion={"R.EntradasSalidas"} link={"link-3"} />
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
            <ButtonCard user={user} seccion={"R.Transacciones"} link={"link-5"} />
            </Col>
            </Row>

            <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <ButtonCard user={user} seccion={"R.Alquileres"} link={"link-2"} />
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
            <ButtonCard user={user} seccion={"R.Propiedades"} link={"link-4"} />
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
            <ButtonCard user={user} seccion={"R.Ventas"} link={"link-6"} />
            </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
