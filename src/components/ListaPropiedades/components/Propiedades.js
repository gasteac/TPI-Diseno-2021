import PropiedadImg from "../../../static/images/Propiedad.svg";
import {
  Card,
  Container,
  Button,
  Image,
  FormControl,
  InputGroup
} from "react-bootstrap";
import GridPropiedadesGenerator from "../../GridGenerator";
import Filter from "../../Filter";
import configure from "../../../static/images/Configure.svg";
import { useContext, useEffect, useState } from "react";
import search from "../../../static/images/Search.svg";
import globalContext from "../../../context/globalContext";

export default function Propiedades({history, propiedades }) {
  const [show, setShow] = useState(false);
  const GlobalContext = useContext(globalContext);
  const { user } = GlobalContext;
  useEffect(() => {
    if (!user) {
      history.push('/')
    }
  }, [user])

  const codPropiedades = propiedades.map((propiedad) => (
    <Card
      className="shadow mb-3"
      style={{
        width: "18rem",
        borderRadius: "12px",
        alignContent: "center",
        boxShadow: "",
      }}
      key={propiedad._id}
    >
      <Card.Img variant="top" src={PropiedadImg} />
      <Card.Body>
        <Card.Title>
          {propiedad.tituloPropiedad}, {propiedad.DatosDelInmueble.direccion}
        </Card.Title>
        <Card.Text className="d-flex justify-content-around">
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

  const handleShow = (show) => setShow(show);

  return (
    <Container fluid className="position-relative">
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
      <InputGroup className="mt-3 ml-3">
        <Button
          variant="outline-primary mt-3 ml-6"
          style={{
            width: "120px",
            border: "1px solid #50628C",
            background: "#50628C",
          }}
          onClick={() => handleShow(true)}
        >
          <Image src={configure} />
        </Button>

        <InputGroup.Prepend className="ml-5 mr-1">
          <Image src={search} />
        </InputGroup.Prepend>
        <FormControl style={{ maxWidth: "40%" }} placeholder="Buscar" />
      </InputGroup>
      <GridPropiedadesGenerator cols={3}>
        {codPropiedades}
      </GridPropiedadesGenerator>
    </Container>
  );
}
