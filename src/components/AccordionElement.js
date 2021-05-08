import React, { useContext, useEffect, useState } from "react";
import { Accordion, Card, Button, Image } from "react-bootstrap";
import InputRange from "react-input-range";
import globalContext from "../context/globalContext";
import x from "../static/images/equis.svg";

const AccordionElement = ({ eventKey, nombre }) => {
  const GlobalContext = useContext(globalContext);
  const {
    setPrecioMayor,
    setPrecioMenor,
    setTipo,
    setUbicacion,
    setHabitaciones,
    setBaños,
    setM2TotalesMayor,
    setM2TotalesMenor,
  } = GlobalContext;

  useEffect(() => {
    setPrecioMayor(valor.max);
    setPrecioMenor(valor.min);
    setM2TotalesMayor(m2.max);
    setM2TotalesMenor(m2.min);
    // eslint-disable-next-line
  }, []);

  const [valor, setValor] = useState({ min: 50000, max: 500000 });
  const [m2, setM2] = useState({ min: 10, max: 600 });

  const content = () => {
    switch (nombre) {
      case "Precio":
        return (
          <InputRange
            maxValue={500000}
            minValue={50000}
            value={valor}
            onChange={(valor) => {
              setValor(valor);
              setPrecioMayor(valor.max);
              setPrecioMenor(valor.min);
            }}
          />
        );
      case "Tipo":
        return (
          <>
            <input
              type="radio"
              name="tipo"
              id="cabaña"
              value="cabaña"
              onClick={(e) => {
                setTipo(e.target.value);
              }}
            />
            <label htmlFor="cabaña">Cabaña</label>
            <input
              type="radio"
              name="tipo"
              id="casa-con-local"
              value="casa-con-local"
              onClick={(e) => {
                setTipo(e.target.value);
              }}
            />
            <label htmlFor="casa-con-local">Casa con local</label>
            <input
              type="radio"
              name="tipo"
              id="chalet"
              value="chalet"
              onClick={(e) => {
                setTipo(e.target.value);
              }}
            />
            <label htmlFor="chalet">Chalet</label>
            <input
              type="radio"
              name="tipo"
              id="cochera"
              value="cochera"
              onClick={(e) => {
                setTipo(e.target.value);
              }}
            />
            <label htmlFor="cochera">Cochera</label>
            <input
              type="radio"
              name="tipo"
              id="departamento"
              value="departamento"
              onClick={(e) => {
                setTipo(e.target.value);
              }}
            />
            <label htmlFor="departamento">Departamento</label>
            <input
              type="radio"
              name="tipo"
              id="local"
              value="local"
              onClick={(e) => {
                setTipo(e.target.value);
              }}
            />
            <label htmlFor="local">Local</label>
          </>
        );
      case "Ubicación":
        return (
          <>
            <input
              type="text"
              placeholder="Donde quieres mudarte?"
              onChange={(e) => setUbicacion(e.target.value)}
            />
          </>
        );
      case "Habitaciones":
        return (
          <>
            <input
              type="number"
              onChange={(e) => setHabitaciones(e.target.value)}
            />
          </>
        );
      case "Baños":
        return (
          <>
            <input type="number" onChange={(e) => setBaños(e.target.value)} />
          </>
        );
      case "m2 Totales":
        return (
          <>
            <InputRange
              maxValue={600}
              minValue={10}
              value={m2}
              onChange={(m2) => {
                setM2(m2);
                setM2TotalesMayor(m2.max);
                setM2TotalesMenor(m2.min);
              }}
            />
          </>
        );

      default:
        return;
    }
  };

  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle
          as={Button}
          variant="link"
          eventKey={eventKey}
          className="d-flex justify-content-between w-100"
        >
          {nombre}
          <Image
            src={x}
            style={{ transform: " rotate(45deg) scale(0.3,0.3)" }}
          />
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={eventKey}>
        <Card.Body>{content()}</Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default AccordionElement;
