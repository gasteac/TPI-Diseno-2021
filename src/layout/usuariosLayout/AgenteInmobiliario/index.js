import React from "react";
import Layout from "../../Layout";
import Notificaciones from "../../../components/Notificaciones";
import ButtonCard from "../../../components/ButtonCard";
import useAuth from "../../../hooks/useAuth";
import img from  "../../../../src/static/images/caCITA.jpg"

const AgenteInmobiliario = ({history}) => {
  const user = useAuth(history)

  document.querySelector('body').style.background = `url(${img})`
  document.querySelector('body').style.backgroundSize = `cover`

  return (
    <Layout
      usuario={user}
    >
      <div className="container-fluid ">
        {/* parte izquierda */}
        <div className="row ">
          <div className="col-5 mt-5 ">
            <Notificaciones nombreDeUsuario='Chifflets'  />
          </div>
          {/* parte derecha */}
          <div className="col-7 sm-12 my-auto mt-5 d-flex justify-content-around">
            <div className="row" >
              <div className="col" >
                <ButtonCard user={user} seccion={"Agenda"} link={'link-2'}/>
              </div>
              <div className="col">
                <ButtonCard user={user} seccion={"Propiedades"} link={'link-3'} />
              </div>
              <div className="col">
                <ButtonCard user={user} seccion={"Clientes"} link={'link-1'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AgenteInmobiliario;
