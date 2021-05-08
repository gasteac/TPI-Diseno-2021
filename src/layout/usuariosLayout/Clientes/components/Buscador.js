import React from "react";
import { InputGroup, Jumbotron, FormControl } from "react-bootstrap";
import imagenes from "../../../../static/imagenes.js";

const { Lupa } = imagenes;

const Buscador = () => {
  return (
    <Jumbotron style={{background: "rgba(255,255,255,.7)"}}>
      <h1 className='mb-3'>Encuentra la propiedad perfecta en Dofus 2.0</h1>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <img src={Lupa} alt="buscador" className="icon" />
        </InputGroup.Prepend>
        <FormControl
          placeholder="Ingrese aqui la ubicación deseada"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <p></p>
    </Jumbotron>
  );
};

export default Buscador;
