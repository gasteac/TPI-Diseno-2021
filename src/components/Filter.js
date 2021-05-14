import { Card, Accordion, Image } from "react-bootstrap";

import "react-input-range/lib/css/index.css";
import AccordionElement from "./AccordionElement";
import x from "../static/images/equis.svg";

export default function Filter({ show, handleShow }) { 

  return (
    <div className="sidebar" style={{display: show ? '' : "none", overflowY:"scroll" }} onMouseLeave={() => handleShow(false)}>
      <Card style={{ minWidth: "300px"}}>
        <Card.Header>
          <Card.Title className="d-flex justify-content-between">
            <Image src={x} onClick={() => handleShow(false)} />
            <p className="m-0 h1 font-weight-bold">Filtros</p>
          </Card.Title>
        </Card.Header>

        <Accordion>
          <AccordionElement eventKey={"0"} nombre={"Precio"} />
          <AccordionElement eventKey={"1"} nombre={"Tipo"} />
          <AccordionElement eventKey={"2"} nombre={"Ubicación"} />
          <AccordionElement eventKey={"3"} nombre={"Habitaciones"} />
          <AccordionElement eventKey={"4"} nombre={"Baños"} />
          <AccordionElement eventKey={"5"} nombre={"m2 Totales"} />
        </Accordion>
      </Card>
    </div>
    // <div style={{display: "none"}}>
    //     <h3>Nombre</h3>
    //     <input type='text' onChange={e => {setNombre(e.target.value)}}/>
  );
}
