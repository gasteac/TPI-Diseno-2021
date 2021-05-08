import PropiedadImg from "../../../static/images/Propiedad.svg";
import {
  Card,
  Container,
  Button,
  Image,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import GridPropiedadesGenerator from "../../GridGenerator";
import Filter from "../../Filter";
import configure from "../../../static/images/Configure.svg";
import { useContext, useState } from "react";
import search from "../../../static/images/Search.svg";
import useAuth from "../../../hooks/useAuth";

import './Propiedad.css'
import globalContext from "../../../context/globalContext";

export default function Propiedades({ history, propiedades }) {

  const GlobalContext = useContext(globalContext);
  const { setNombre } = GlobalContext;

  const [show, setShow] = useState(false);
  // eslint-disable-next-line
  const user = useAuth();

  const handleClickPropiedad = () => {
    history.push('/agenteinmobiliario/propiedades/propiedad')
  }

  const codPropiedades = propiedades.map((propiedad) => (
    <Card
      className="shadow mb-3 card-custom"
      key={propiedad._id}
      onClick={handleClickPropiedad}
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
  const handleClick = () => {
    history.push('/agenteinmobiliario/propiedades/agregarpropiedad')
  }

  return (
    <Container fluid >
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
      <InputGroup className="mt-3">
        <Button
          variant="outline-primary"
          style={{
            width: "120px",
            background: "#50628C",
          }}
          onClick={() => handleShow(true)}
        >
          <Image src={configure} />
        </Button>

        <InputGroup.Prepend className="ml-5 mr-2">
          <Image src={search} />
        </InputGroup.Prepend>
        <FormControl style={{ maxWidth: "40%" }} placeholder="Buscar" onChange={(e) => setNombre(e.target.value)}/>
        <Button
          variant="outline-primary ml-auto"
          style={{
            color: "white",
            background: "#50628C",
          }}
          onClick={handleClick}
        >
          Agregar Propiedad
        </Button>
      </InputGroup>
      <GridPropiedadesGenerator cols={3}>
        {codPropiedades}
      </GridPropiedadesGenerator>
    </Container>
  );
}
