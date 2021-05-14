import PropiedadImg from "../../../static/images/Propiedad.svg";
import {
  Card,
  Container,
  Button,
  Image,
  FormControl,
  InputGroup,
  Form,
  Spinner,
} from "react-bootstrap";
import GridPropiedadesGenerator from "../../GridGenerator";
import Filter from "../../Filter";
import configure from "../../../static/images/Configure.svg";
import { useContext, useState, useEffect } from "react";
import search from "../../../static/images/Search.svg";
import useAuth from "../../../hooks/useAuth";

import "./Propiedad.css";
import globalContext from "../../../context/globalContext";
import propiedadesContext from "../../../context/contextPropiedades/propiedadesContext";
import CardPropiedades from "./CardPropiedades";
import axios from "axios";

export default function Propiedades({
  history,
  propiedades,
  setPropiedadesMostradas,
}) {
  const GlobalContext = useContext(globalContext);
  const { setNombre } = GlobalContext;

  const PropiedadesContext = useContext(propiedadesContext);
  const {
    propiedadesFiltradas,
    seleccionarPropiedad,
    setImagenesPropiedades,
    setIdImagen,
    getPropiedadNombre,
  } = PropiedadesContext;

  useEffect(() => {
    axios
      .get(
        "https://pixabay.com/api/?key=20807034-598a329be1f2fd78a78a2cb26&q=house"
      )
      .then((res) => setImagenesPropiedades(res.data.hits));
  }, []);

  // useEffect(() => {
  //   if(propiedadesFiltradas) {
  //     setPropiedadesMostradas(propiedadesFiltradas)

  //   }
  // }, [propiedadesFiltradas])

  const [show, setShow] = useState(false);
  const user = useAuth();

  const handleClickPropiedad = (id) => {
    seleccionarPropiedad(id);
    history.push("/propiedades/propiedad");
  };

  const handleShow = (show) => {
    setShow(show);
  };
  const handleClick = () => {
    history.push("/agenteinmobiliario/propiedades/agregarpropiedad");
  };

  const handleChangeBusqueda = (e) => {
    setNombre(e.target.value);
    getPropiedadNombre(e.target.value);
  };

  return (
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
            marginLeft:'40px',
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
          onChange={handleChangeBusqueda}
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
        {!propiedades ? (
          <Spinner animation="border" role="status" />
        ) : (
          propiedades.map((propiedad, i) => (
            <CardPropiedades
              key={propiedad._id}
              i={i}
              propiedad={propiedad}
              handleClickPropiedad={handleClickPropiedad}
              setIdImagen={setIdImagen}
            />
          ))
        )}
      </GridPropiedadesGenerator>
    </Container>
  );
}
