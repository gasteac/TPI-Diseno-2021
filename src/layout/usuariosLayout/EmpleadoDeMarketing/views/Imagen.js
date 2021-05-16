import React, { useState } from "react";
import { Image, Card, Col } from "react-bootstrap";
import { v4 } from "uuid";


const Imagen = ({ imagen, Trash }) => {
  const [hide, setHide] = useState(true);
  const [borrar, setBorrar] = useState(false);

  const handleMouseUp = () => setHide(false);
  const handleMouseLeave = () => setHide(true);
  const handleClick = () => setBorrar(true);
  return (
    <>
      <Col key={v4()} className={borrar? "d-none" : null}>
        <Card draggable>
          <Card.Body>
            <div style={{ position: "relative" }}>
              <Image
                src={imagen}
                className={"d-block w-100"}
                onMouseOver={handleMouseUp}
              />
              <Image
                src={Trash}
                onMouseLeave={handleMouseLeave}
                className={hide ? "d-none" : "d-block w-100"}
                style={{
                  position: "absolute",
                  top: "0",
                  background: "rgba(255,0,0,0.3)",
                  cursor: "pointer",
                }}
                onClick={handleClick}
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Imagen;
