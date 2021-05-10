import React from "react";
import { Container, Jumbotron, Row, Col, Card } from "react-bootstrap";
import ButtonCard from "../../../components/ButtonCard";
import useAuth from "../../../hooks/useAuth";
import Layout from "../../Layout";

const Cajera = ({ history }) => {
  const user = useAuth(history);
  return (
    <Layout>
      <Container>
        <Card style={{borderRadiusTopLeft:'10px'}}>
        <Card.Header as='h1' style={{background:'#50628C', color:'white'}}>
          Bienvenida Jett
        </Card.Header>
        <Card.Body style={{background:'#B3BCE8'}}>
          <Row>
            <Col>
              <ButtonCard user={user} seccion="EntradaSalida" link={"link-1"} style={{background:"#50628C"}}/>
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
                    background:"#50628C"
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
                    background:"#50628C"
                  }}
                />
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <ButtonCard user={user} seccion="Transacciones" link={"link-2"} style={{background:"#50628C"}}/>
            </Col>
            <Col>
              <ButtonCard
              style={{background:"#50628C"}}
                user={user}
                seccion="CierreDeCaja"
                link={"link-5"}
              />
            </Col>
          </Row>
          </Card.Body>
          </Card>
      </Container>

    </Layout>
  );
};

export default Cajera;
