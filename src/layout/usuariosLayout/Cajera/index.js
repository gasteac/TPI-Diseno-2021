import React from "react";
import { Container, Jumbotron, Row, Col, Card } from "react-bootstrap";
import ButtonCard from "../../../components/ButtonCard";
import useAuth from "../../../hooks/useAuth";
import Layout from "../../Layout";
import ButtonCardCaj from "./ButtonCardCaj";
import img from  "../../../../src/static/images/caCITA.jpg"



const Cajera = ({ history }) => {
  const user = useAuth(history);
  document.querySelector('body').style.background = `url(${img})`
document.querySelector('body').style.backgroundSize = `cover`
  return (
    <Layout>
      <Container style={{marginTop:'40px'}}>
        <Card style={{borderRadiusTopLeft:'100px', marginTop:'20px', border:'none', background:'#50628C99', borderTopLeftRadius:'30px', borderTopRightRadius:'30px' }}>
        <Card.Header as='h1' style={{background:'#50628C01', border:'none', color:'white', borderTopLeftRadius:'80px', borderTopRightRadius:'80px', textShadow:'2px 2px 5px black'}}> 
          Bienvenida, Jett.
          <h5 style={{marginTop:'2px'}}>Que hacemos hoy? :)</h5>
        </Card.Header>
        <Card.Body style={{background:'#B3BCE855', borderBottomLeftRadius:'12px', borderBottomRightRadius:'12px', border:'none'}}>
          <Row>
            <Col>
              <ButtonCardCaj user={user} seccion="EntradaSalida" link={"link-1"} style={{background:"#50628C", marginTop:'10px'}}/>
            </Col>
            <Col>
              <Row>
                <ButtonCardCaj
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
                <ButtonCardCaj
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
              <ButtonCardCaj user={user} seccion="Transacciones" link={"link-2"} style={{background:"#50628C"}}/>
            </Col>
            <Col>
              <ButtonCardCaj
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
