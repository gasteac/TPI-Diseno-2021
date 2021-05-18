import React from "react";
import { Jumbotron } from "react-bootstrap";

const Descripcion = () => {
  
  return (
  
    <Jumbotron className="text-center" style={{background: "rgba(255,255,255,.7)", minHeight: "100%"}}>
      
      <h3>SOBRE NOSOTROS</h3>
      <p>
        Domus se fundó en el año 1997 en la Ciudad de Corrientes.
        Tenemos años de experiencia en los que además pudimos perfeccionar
        nuestra atención para poder cubrir todas las necesidades de los
        clientes.
      </p>
      <p>
        Nuestro personal está totalmente capacitados para brindar un excelente
        asesoramiento a nuestros clientes, tanto a quienes desean encontrar un
        nuevo hogar como a los inversores.
      </p>
      <p>
        Nos preocupamos en que todo inmueble esté en óptimas condiciones para
        sus entregas y podemos garantizar gran calidad en todos ellos, y
        brindando además las mejores opciones de precios para adaptarnos a tus
        necesidades.
      </p>
    </Jumbotron>
  );
};

export default Descripcion;
