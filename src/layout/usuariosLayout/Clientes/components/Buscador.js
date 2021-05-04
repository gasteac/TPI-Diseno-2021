import React, { useState } from "react";
import imagenes from "../../../../static/imagenes.js";

const { Lupa } = imagenes;

const Buscador = () => {
  return (
    <div
      className="siimple-box"
      style={{
        maxWidth: "85%",
        display: "grid",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div className="siimple-box-title">
        Encuentra la propiedad perfecta en Dofus 2.0
      </div>
      <div className="input-icons">
        <img src={Lupa} alt="buscador" className="icon" />
        <input type="text" className="siimple-input siimple-input--fluid input-field" />
      </div>
    </div>
  );
};

export default Buscador;
