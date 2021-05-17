import { Col, Container, Row } from "react-bootstrap";
import ButtonCard from "../../../components/ButtonCard";
import Notificaciones from "../../../components/Notificaciones";
import useAuth from "../../../hooks/useAuth";
import Layout from "../../Layout";

export default function GerenteGeneral({ history }) {
    const user = useAuth(history);
    return (
      <Layout usuario={user}>
        <Container className="mt-3 flex-column ">
          <Row>
            <Col xs={12} md={5}>
                <Notificaciones nombreDeUsuario="Chifflets" />
            </Col>
            <Col className="d-flex align-items-center">
                <Row>
                  <h3>Reportes</h3>
                  <Col>
                    <ButtonCard user={user} seccion={"Clientes"} link={"link-1"} />
                    <ButtonCard user={user} seccion={"Alquileres"} link={"link-2"} />
                    <ButtonCard user={user} seccion={"Entradas/Salidas"} link={"link-3"} />
                  </Col>
                  <Col>
                    <ButtonCard user={user} seccion={"Propiedades"} link={"link-4"} />
                    <ButtonCard user={user} seccion={"Transacciones"} link={"link-5"} />
                    <ButtonCard user={user} seccion={"Ventas"} link={"link-6"} />
                  </Col>
                </Row>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  };