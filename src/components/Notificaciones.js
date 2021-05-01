import React from "react";
import Notificacion from "./Notificacion";

const Notificaciones = () => {
  return (
    <div className="siimple-card radius-16">
      <div className="siimple-card-header bg-violetaOscuro-2 text-white">
          <h1>
              Bienvenido Gastón
          </h1>
          <h3>Estos son tu eventos de hoy.</h3>
      </div>
      <div id="border-cero" className="siimple-card-body bg-rosa1">
          <div className="siimple-card bg-rosa2">
              <Notificacion />
          </div>
      </div>
      <div id="border-cero" className="siimple-card-body bg-rosa1">
          <div className="siimple-card bg-rosa2">
              <Notificacion />
          </div>
      </div>
      <div id="border-cero" className="siimple-card-body bg-rosa1">
          <div className="siimple-card bg-rosa2">
              <Notificacion />
          </div>
      </div>
    </div>
  );
};

export default Notificaciones;
