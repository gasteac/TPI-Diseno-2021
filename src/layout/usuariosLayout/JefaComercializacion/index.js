import { Card, Container, Row } from "react-bootstrap";
import ButtonCard from "../../../components/ButtonCard";
import Notificaciones from "../../../components/Notificaciones";
import useAuth from "../../../hooks/useAuth";
import Layout from "../../Layout";
import img from "../../../../src/static/images/casita.jpg";

export default function JefaComercializacion({ history }) {
  const user = useAuth(history);
  document.querySelector("body").style.background = `url(${img})`;
  document.querySelector("body").style.backgroundSize = `cover`;
  return (
    <Layout usuario={user} cliente={true}>
      <Container fluid style={{ marginTop: "40px", justifyContent: "center" }}>
        <div
          className="card ml-3 "
          style={{
            minWidth: "90px",
            backgroundColor: "transparent",
            border: "none",
            borderRadius: "50px",
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
              Bienvenid@, Gertrudis.
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


        <Container style={{ display: "flex", justifyContent: "space-around" }}>
          <h2 style={{ fontWeight: "900", fontSize: "40px", color: "black" }}>
            Reportes
          </h2>
          <h2 style={{ fontWeight: "900", fontSize: "40px", color: "white" }}>
            Navegación
          </h2>
        </Container>
        <Row className="d-flex justify-content-center align-items-center mt-2">
          <ButtonCard
            user={user}
            reportes={true}
            seccion={"Ventas"}
            link={"link-4"}
            style={{ backgroundColor: "#00000080" }}
          />
          <ButtonCard
            user={user}
            reportes={true}
            seccion={"Alquileres"}
            link={"link-5"}
            style={{ backgroundColor: "#00000080" }}
          />
          <ButtonCard
            user={user}
            reportes={true}
            seccion={"Propiedades"}
            link={"link-7"}
            style={{ backgroundColor: "#00000080" }}
          />
          <ButtonCard user={user} seccion={"Agenda"} link={"link-1"} />
          <ButtonCard user={user} seccion={"Propiedades"} link={"link-2"} />
          <ButtonCard user={user} seccion={"Clientes"} link={"link-3"} />
        </Row>
      </Container>
    </Layout>
  );
}

// <Col xs={5} >
// <Notificaciones nombreDeUsuario="Gertrudis" />
// </Col>

// <Col className="d-flex align-items-center">
// <Row>
//   <ButtonCard user={user} seccion={"Agenda"} link={"link-1"} />

//   <ButtonCard user={user} seccion={"Propiedades"} link={"link-2"} />

//   <ButtonCard user={user} seccion={"Clientes"} link={"link-3"} />
// </Row>
// {/* reportes */}
// <Row>
//   <ButtonCard user={user} reportes={true} seccion={"Ventas"} link={"link-4"}/>

//   <ButtonCard user={user} reportes={true} seccion={"Alquileres"} link={"link-5"}/>

//   <ButtonCard user={user} reportes={true} seccion={"Propiedades"} link={"link-7"}/>
// </Row>
// </Col>
