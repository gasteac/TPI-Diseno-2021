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
        <Card style={{ marginTop:'20px', border:'none', background:'#a79ba790', borderTopLeftRadius:'30px', borderTopRightRadius:'30px', borderBottomLeftRadius:'30px', borderBottomRightRadius:'30px' }}>
        <Card.Header as='h1' style={{background:'#50628C01', border:'none', color:'white', borderTopLeftRadius:'30px', borderTopRightRadius:'30px', textShadow:'2px 2px 5px black'}}> 
          Bienvenida, Jett.
          <h5 style={{marginTop:'2px'}}>Que hacemos hoy? :)</h5>
        </Card.Header>
        <Card.Body  style={{background:'#B3BCE855', borderBottomLeftRadius:'30px', borderBottomRightRadius:'30px', border:'none'}}>
          <Row className='d-flex, justify-content-space-around'>
            <Col >
              <ButtonCardCaj 
              user={user} 
              seccion="EntradaSalida" 
              link={"link-1"} 
              style={{
                background:"#50628C",
                marginTop:'10px',
                minWidth: "200px",
                minHeight: "180px",
                }}
                />
            </Col>
            <Col>
              <ButtonCardCaj user={user} seccion="Transacciones" link={"link-2"} 
              style={{
                background:"#50628C",
                marginTop:'10px',
                minWidth: "200px",
                minHeight: "180px",
                }}
              />
            </Col>
            <Col>
              <ButtonCardCaj
                user={user}
                seccion="CierreDeCaja"
                link={"link-5"}
                style={{
                  background:"#50628C",
                  marginTop:'10px',
                  minWidth: "200px",
                  minHeight: "180px",
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
                    minHeight: "71px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
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
                    minHeight: "71px",
                    display: "flex",
                    flexDirection: "row",
                    alignContent:'center',
                    justifyContent: "center",
                    background:"#50628C"
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
