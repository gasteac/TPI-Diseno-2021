import React from "react";
import Layout from "../../../Layout";
import Container from "../components/Container";

const QuienesSomos = () => {
  return (
    <Layout
      items={["Inicio", "Propiedades", "Programar Cita", "¿Quienes somos?"]}
      usuario={"clientes"}
    >
      <Container>
        <div className="siimple-grid">
          <div className="siimple-grid-row">
            <div className="siimple-grid-col siimple-grid-col--6">6</div>
            <div className="siimple-grid-col siimple-grid-col--6">6</div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default QuienesSomos;
