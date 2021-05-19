import React, { useContext} from "react";
import { Card, Carousel, Container, Image, Row, Col } from "react-bootstrap";
import propiedadesContext from "../../../../context/contextPropiedades/propiedadesContext";
import useAuth from "../../../../hooks/useAuth";
import Layout from "../../../Layout";

import imagen2 from "../../../../components/ListaPropiedades/components/propiedadesIMG/1.jpg";
import imagen3 from "../../../../components/ListaPropiedades/components/propiedadesIMG/2.jpg";
import Plus from "../../../../static/images/Plus.jpg";
import Trash from "../../../../static/images/Trash.svg";
import Imagen from "./Imagen";

const EditarImagenes = ({ history }) => {
  const user = useAuth(history);
  const PropiedadesContext = useContext(propiedadesContext);
  const { propiedadSeleccionada } = PropiedadesContext;

  const { imagen } = propiedadSeleccionada;

  const imagenes = [imagen, imagen2, imagen3];

  return (
    <Layout user={user}>
      <Container fluid className="mt-3">
        <Row className="justify-content-center">
          <Carousel className="w-50">
            <Carousel.Item>
              <Image src={imagen} className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={imagen2} className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={imagen3} className="d-block w-100" />
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row
          className="mt-2 p-2"
          style={{ border: "2px solid #e1e1e1" }}
          xs={4}
        >
          {imagenes.map((imagen) => (
            <Imagen imagen={imagen} Trash={Trash} />
          ))}
          <Col style={{ cursor: "pointer" }}>
            <Card draggable>
              <Card.Body>
                <Image src={Plus} className="d-block w-100" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default EditarImagenes;
