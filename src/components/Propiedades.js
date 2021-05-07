import PropiedadImg from "../static/images/Propiedad.svg";
import { Card, Col, Container, Row, Button, Image } from "react-bootstrap";
import GridPropiedadesGenerator from "./GridGenerator";
import Filter from "./Filter";
import configure from '../static/images/Configure.svg'
import { useState } from "react";

export default function Propiedades({ propiedades }) {
   
  const [show, setShow] = useState(false);
  
  const codPropiedades = propiedades.map((propiedad) => (
    <Card style={{ width: "18rem" }} key={propiedad._id}>
      <Card.Img variant="top" src={PropiedadImg} />
      <Card.Body>
        <Card.Title>
          {propiedad.tituloPropiedad}, {propiedad.DatosDelInmueble.direccion}
        </Card.Title>
        <Card.Text>
          <span className="font-weight-bold">
            {propiedad.DatosDelInmueble.precio} USD
          </span>
            {" + "}
          <span className="font-weight-light">
            {propiedad.DatosDelInmueble.expensas} USD expensas
          </span>
        </Card.Text>
        <Card.Text className="d-flex justify-content-around">
          <div>
            <span class="font-weight-bold">
              {propiedad.DatosDelInmueble.metrosCuadrados}
            </span>{" "}
            m2 totales{" "}
          </div>
          <div>
            <span class="font-weight-bold">
              {propiedad.DatosDelInmueble.metrosCuadradosCubiertos}
            </span>{" "}
            Cubiertos
          </div>
        </Card.Text>
        <Card.Text className="d-flex justify-content-around">
          <div>
            <span class="font-weight-bold">
              {propiedad.DatosDelInmueble.espacios}
            </span>{" "}
            ambientes{" "}
          </div>
          <div>
            <span class="font-weight-bold">
              {propiedad.DatosDelInmueble.banios}
            </span>{" "}
            baños
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  ));

  const handleShow = (show) => (
    setShow(show)
  )


  return (
    <Container fluid className="position-relative" >
      <Filter
        setNombre={() => {}}
        setPrecioMayor={() => {}}
        setPrecioMenor={() => {}}
        setTipo={() => {}}
        setUbicacion={() => {}}
        setHabitaciones={() => {}}
        setBaños={() => {}}
        setM2TotalesMayor={() => {}}
        setM2TotalesMenor={() => {}}
        show={show}
        handleShow={handleShow}
      />
      <Button variant="outline-primary mt-3 ml-3" style={{width: "120px"}} onClick={() => handleShow(true)}>
        <Image src={configure} />
      </Button>
      <GridPropiedadesGenerator cols={3}>
        {codPropiedades}
      </GridPropiedadesGenerator>
    </Container>
  );
}
