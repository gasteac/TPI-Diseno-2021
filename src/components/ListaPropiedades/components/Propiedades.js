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

import "./Propiedad.css";
import globalContext from "../../../context/globalContext";
import propiedadesContext from "../../../context/contextPropiedades/propiedadesContext";
import img0 from "./propiedadesIMG/1.jpg";
import img1 from "./propiedadesIMG/2.jpg";
import img2 from "./propiedadesIMG/3.jpg";
import img3 from "./propiedadesIMG/4.jpg";
import img4 from "./propiedadesIMG/5.jpg";
import img5 from "./propiedadesIMG/6.jpg";
import img6 from "./propiedadesIMG/7.jpg";
import img7 from "./propiedadesIMG/8.jpg";
import img8 from "./propiedadesIMG/9.jpg";
import img9 from "./propiedadesIMG/10.jpg";
import img10 from "./propiedadesIMG/11.jpg";
import img11 from "./propiedadesIMG/12.jpg";
import img12 from "./propiedadesIMG/13.jpg";




var theImages = new Array()
theImages[46140] = img0;
theImages[35894] = img1;
theImages[11574] = img2;
theImages[42017] = img3;
theImages[18325] = img4;
theImages[47777] = img5;
theImages[16771] = img6;
theImages[33979] = img7;
theImages[40016] = img8;
theImages[25984] = img9;
theImages[26396] = img10;
theImages[16398] = img11;
theImages[14777] = img12;





export default function Propiedades({ history, propiedades }) {
  const GlobalContext = useContext(globalContext);
  const { setNombre } = GlobalContext;

  const PropiedadesContext = useContext(propiedadesContext)
  const { seleccionarPropiedad } = PropiedadesContext;

  const [show, setShow] = useState(false);
  const user = useAuth();

  const handleClickPropiedad = (id) => {
    seleccionarPropiedad(id)
    history.push("/propiedades/propiedad");
  };

  const codPropiedades = propiedades.map((propiedad) => (
    <Card
      className="shadow mb-3 mt-3 card-custom"
      style={{width:'350px', border:'none'}}
      key={propiedad._id}
      onClick={() => handleClickPropiedad(propiedad._id)}
    >
      <Card.Img variant="top" src={theImages[propiedad.DatosDelInmueble.nroInmueble]}  />
      <Card.Body>
        <Card.Title>
          {propiedad.DatosDelInmueble.tituloPropiedad}, {propiedad.DatosDelInmueble.direccion}
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
            <span className="font-weight-bold">
              {propiedad.DatosDelInmueble.metrosCuadrados}
            </span>{" "}
            m2 totales{" "}
          </div>
          <div>
            <span className="font-weight-bold">
              {propiedad.DatosDelInmueble.metrosCuadradosCubiertos}
            </span>{" "}
            Cubiertos
          </div>
        </Card.Text>
        <Card.Text className="d-flex justify-content-around">
          <div>
            <span className="font-weight-bold">
              {propiedad.DatosDelInmueble.espacios}
            </span>{" "}
            ambientes{" "}
          </div>
          <div>
            <span className="font-weight-bold">
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
    history.push("/agenteinmobiliario/propiedades/agregarpropiedad");
  };






  


  return (

    console.log(codPropiedades),
    <Container fluid>
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
            borderRadius: "9px",
            border: "none",
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
        <FormControl
          style={{ maxWidth: "78%" }}
          placeholder="Buscar Propiedad"
          onChange={(e) => setNombre(e.target.value)}
        />
        {user != "cliente" ? (
          <Button
            variant="outline-primary ml-5"
            style={{
              borderRadius: "9px",
              border: "none",
              color: "white",
              background: "#50628C",
            }}
            onClick={handleClick}
          >
            Agregar Propiedad
          </Button>
        ) : null}
      </InputGroup>
      <GridPropiedadesGenerator cols={3}>
        {codPropiedades}
      </GridPropiedadesGenerator>
    </Container>
  );
}
