import React from "react";
import Layout from "../../Layout";
import Notificaciones from "../../../components/Notificaciones";
import ButtonCard from "../../../components/ButtonCard";

const AgenteInmobiliario = () => {
  const usuario = "agente-inmobiliario";

  return (
    <Layout
      usuario={usuario}
    >
      <div className="container-fluid">
        {/* parte izquierda */}
        <div className="row">
          <div className="col-5 mt-5">
            <Notificaciones />
          </div>
          {/* parte derecha */}
          <div className="col-7 sm-12 my-auto mt-5 d-flex justify-content-around">
            <div className="row">
              <div className="col">
                <ButtonCard usuario={usuario} seccion={"Agenda"} />
              </div>
              <div className="col">
                <ButtonCard usuario={usuario} seccion={"Propiedades"} />
              </div>
              <div className="col">
                <ButtonCard usuario={usuario} seccion={"Clientes"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AgenteInmobiliario;
