import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import Layout from "../../Layout";
import img from "../../../../src/static/images/casita.jpg";
import ButtonCard from "../../../components/ButtonCard";



const Cajera = ({ history }) => {
  const user = useAuth(history);
document.querySelector('body').style.background = `url(${img})`
document.querySelector('body').style.backgroundSize = `cover`
  return (
    <Layout cliente={true}> 
      
      <Container fluid style={{ marginTop: "40px", justifyContent: "center" }}>
        <div
          className="card ml-3 "
          style={{
            minWidth: "90px",
            backgroundColor: "transparent",
            border: "none",
            borderRadius: "50px",
            marginBottom:'50px'
          }}
        >
          <div
            className="card-header "
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "#FAFAFA",
              borderRadius: "50px",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <h1
              style={{
                textShadow: "2px 2px 10px black",
                fontWeight: "900",
                fontSize: "50px",
              }}
            >
              Bienvenid@, Gastón.
            </h1>
          </div>
          <h1
              style={{
                textAlign:'center',
                textShadow: "2px 2px 10px black",
                fontWeight: "900",
                fontSize: "25px",
                color:'white'
              }}
            >
              No tienes notificaciones.
            </h1>
        </div>


            
          <Row style={{display:'flex', justifyContent:'center'}}>
            <Col style={{display:'flex', justifyContent:'center'}}>
          <h2 style={{ fontWeight: "900", fontSize: "40px", color: "white", textShadow:'2px 2px 25px black'  }}>
            Navegación
          </h2>
          </Col>
          <Col style={{display:'flex', justifyContent:'center'}}>
          <h2 style={{ fontWeight: "900", fontSize: "40px", color: "black", textShadow:'2px 2px 25px white' }}>
            Alquileres / Ventas
          </h2>
          </Col>
          </Row>
       
        <Row className="d-flex justify-content-center align-items-center mt-2">
        <Col style={{display:'flex', justifyContent:'center'}}>
          <ButtonCard user={user} seccion="EntradaSalida" link={"link-1"}/>
          <ButtonCard user={user} seccion="Transacciones" link={"link-2"} />
          <ButtonCard user={user} seccion="CierreDeCaja" link={"link-5"}/>
          </Col>
          <Col style={{display:'flex', justifyContent:'center'}}>
          <ButtonCard
                  user={user}
                  seccion="PagoAlquiler"
                  link={"link-3"}
                  style={{ backgroundColor: "#00000080" }}/>
          <ButtonCard
                  user={user}
                  seccion="PagoVenta"
                  link={"link-4"}
                  style={{ backgroundColor: "#00000080" }}/>
          </Col>
        </Row>
      </Container>

    </Layout>
  );
};

export default Cajera;
