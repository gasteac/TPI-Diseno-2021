import React from "react";
import { Accordion, Card, Button, Image } from "react-bootstrap";
import x from "../static/images/equis.svg";

const AccordionElement = ({ eventKey, nombre }) => {
  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey={eventKey} className="d-flex justify-content-between w-100">
          {nombre}
          <Image
            src={x}
            style={{ transform: " rotate(45deg) scale(0.3,0.3)" }}
          />
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={eventKey}>
        <Card.Body>Hello! I'm another body</Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default AccordionElement;
