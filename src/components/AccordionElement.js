import React, { useContext, useEffect, useState } from "react";
import {
  Accordion,
  Card,
  Button,
  Image,
  Form,
  Row,
  InputGroup,
  FormControl,
  Col,
} from "react-bootstrap";
import InputRange from "react-input-range";
import propiedadesContext from "../context/contextPropiedades/propiedadesContext";
import globalContext from "../context/globalContext";
import x from "../static/images/equis.svg";

const AccordionElement = ({ eventKey, nombre }) => {
  const GlobalContext = useContext(globalContext);
  const {
    setPrecioMayor,
    setPrecioMenor,
    setM2TotalesMayor,
    setM2TotalesMenor,
  } = GlobalContext;

  const PropiedadesContext = useContext(propiedadesContext);
  const { getPropiedadTipo, getPropiedadPrecio, getPropiedadUbicacion } =
    PropiedadesContext;

  const [max, setMax] = useState(500000);
  const [min, setMin] = useState(50000);

  useEffect(() => {
    setPrecioMayor(valor.max);
    setPrecioMenor(valor.min);
    setM2TotalesMayor(m2.max);
    setM2TotalesMenor(m2.min);
    // eslint-disable-next-line
  }, []);

  const [valor, setValor] = useState({ min, max });
  const [m2, setM2] = useState({ min: 10, max: 600 });

  const content = () => {
    switch (nombre) {
      case "Precio":
        return (
          <>
            <div style={{ maxWidth: "256px", boxSizing: "border-box" }}>
              <Row className="px-3">
                <InputRange
                  maxValue={500000}
                  minValue={50000}
                  value={valor}
                  onChange={(valor) => {
                    getPropiedadPrecio(valor);
                  }}
                />
              </Row>
              <Row className="mt-4">
                <Col>
                  <InputGroup>
                    <FormControl
                      type="number"
                      placeholder="Mínimo"
                      value={min}
                      onChange={(e) => setMin(e.target.value)}
                      onBlur={() => {
                        setValor({ ...valor, min });
                        getPropiedadPrecio({ ...valor, min });
                      }}
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup>
                    <FormControl
                      type="number"
                      placeholder="Máximo"
                      value={max}
                      onChange={(e) => setMax(e.target.value)}
                      onBlur={() => {
                        setValor({ ...valor, max });
                        getPropiedadPrecio({ ...valor, max });
                      }}
                    />
                  </InputGroup>
                </Col>
              </Row>
            </div>
          </>
        );
      case "Tipo":
        return (
          <>
            {["Casa", "Departamento", "PH", "Oficina"].map((tipo) => (
              <Form.Check
                type="radio"
                id={`custom-${tipo}`}
                label={tipo}
                custom
                name="tipo"
                value={tipo}
                onClick={(e) => getPropiedadTipo(e.target.value)}
              />
            ))}
          </>
        );
      case "Ubicación":
        return (
          <>
            <InputGroup>
              <FormControl
                placeholder="¿Dónde quieres mudarte?"
                type="text"
                onChange={(e) => getPropiedadUbicacion(e.target.value)}
              />
            </InputGroup>
          </>
        );
      case "Habitaciones":
        return (
          <>
            <InputGroup>
              <FormControl
                placeholder="Habitaciones"
                type="number"
              />
            </InputGroup>
          </>
        );
      case "Baños":
        return (
          <>
            <InputGroup>
              <FormControl
                placeholder="Baños"
                type="number"
              />
            </InputGroup>
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
