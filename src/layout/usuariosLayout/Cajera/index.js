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
    <Layout cliente={true}> 
      
      <Container style={{alignItems:'center'}}>
        <Card style={{ marginTop:'20px', border:'none', background:'#8E97C860', borderTopLeftRadius:'30px', borderTopRightRadius:'30px', borderBottomLeftRadius:'30px', borderBottomRightRadius:'30px' }}>
        <Card.Header as='h1' style={{background:'#50628C', border:'none', color:'white', borderTopLeftRadius:'30px', borderTopRightRadius:'30px', textShadow:'2px 2px 10px black'}}> 
          Bienvenid@, Jett.
          <h5 style={{marginTop:'2px'}}>Que hacemos hoy? :)</h5>
        </Card.Header>
        <Card.Body  style={{background:'#8E97C860', borderBottomLeftRadius:'30px', borderBottomRightRadius:'30px', border:'none'}}>
          <Row className='d-flex, justify-content-space-around'>
            <Col >
              <ButtonCardCaj 
              user={user} 
              seccion="EntradaSalida" 
              link={"link-1"} 
              style={{
                background:"#50628C95",
                marginTop:'10px',
                minWidth: "200px",
                minHeight: "190px",
                }}
                />
            </Col>
            <Col>
              <ButtonCardCaj user={user} seccion="Transacciones" link={"link-2"} 
              style={{
                marginTop:'10px',
                minWidth: "200px",
                minHeight: "190px",
                }}
              />
            </Col>
            <Col>
              <ButtonCardCaj
                user={user}
                seccion="CierreDeCaja"
                link={"link-5"}
                style={{
                  marginTop:'10px',
                  minWidth: "200px",
                  minHeight: "190px",
                  }}
              />
            </Col>
            <Col>
              <Row>
                <ButtonCardCaj
                  user={user}
                  seccion="PagoAlquiler"
                  link={"link-3"}
                  style={{
                    minWidth: "185px",
                    minHeight: "76px",
                    flexDirection: "row",
                  }}
                />
              </Row>
              <Row>
                <ButtonCardCaj
                  user={user}
                  seccion="PagoVenta"
                  link={"link-4"}
                  style={{
                    minWidth: "185px",
                    minHeight: "76px",
                    flexDirection: "row",
                  }}
                />
              </Row>
            </Col>
          </Row>
          <Row>
            
           
          </Row>
          </Card.Body>
          </Card>
      </Container>

    </Layout>
  );
};

export default Cajera;
