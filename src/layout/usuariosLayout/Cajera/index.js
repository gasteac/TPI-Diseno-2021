import React from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import ButtonCard from "../../../components/ButtonCard";
import useAuth from "../../../hooks/useAuth";
import Layout from "../../Layout";

const Cajera = ({ history }) => {
  const user = useAuth(history);
  return (
    <Layout>
      <Container fluid="sm">
        <Jumbotron style={{minWidth: "980px", display: "grid", justifyContent: "space-evenly"}}>
          <Row>
            <Col>
              <ButtonCard user={user} seccion="EntradaSalida" link={"link-1"} />
            </Col>
            <Col>
              <Row>
                <ButtonCard
                  user={user}
                  seccion="PagoAlquiler"
                  link={"link-3"}
                  style={{
                    minWidth: "90px",
                    minHeight: "80px",
                    marginBottom: "10px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                />
              </Row>
              <Row>
                <ButtonCard
                  user={user}
                  seccion="PagoVenta"
                  link={"link-4"}
                  style={{
                    minWidth: "90px",
                    minHeight: "80px",
                    marginTop: "10px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                />
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <ButtonCard user={user} seccion="Transacciones" link={"link-2"} />
            </Col>
            <Col>
              <ButtonCard
                user={user}
                seccion="CierreDeCaja"
                link={"link-5"}
              />
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    </Layout>
  );
};

export default Cajera;
