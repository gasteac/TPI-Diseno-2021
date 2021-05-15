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
  Row,
  Col,
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
      .then((res) => console.log(res.data.hits));
  }, []);

  useEffect(() => {
    if (propiedadesFiltradas) {
      setPropiedadesMostradas(propiedadesFiltradas);
    }
  }, [propiedadesFiltradas]);

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
    <>
      <Row>
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
          <Col xs={2}>
            <Button
              variant="outline-primary"
              style={{
                marginLeft: "40px",
                borderRadius: "9px",
                border: "none",
                width: "120px",
                background: "#50628C",
              }}
              onClick={() => handleShow(true)}
            >
              <Image src={configure} />
            </Button>
          </Col>
          <Col className="d-flex justify-content-center" xs={7}>
            <InputGroup.Prepend className="mr-3">
              <Image src={search} />
            </InputGroup.Prepend>
            <FormControl
              style={{ maxWidth: "78%" }}
              placeholder="Buscar Propiedad"
              onChange={handleChangeBusqueda}
            />
          </Col>
          {user === "agenteinmobiliario" ? (
            <Col className="d-flex justify-content-center">
              <Button
                variant="outline-primary"
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
            </Col>
          ) : null}
        </InputGroup>
      </Row>
      <Row>
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
              />
            ))
          )}
        </GridPropiedadesGenerator>
      </Row>
    </>
  );
}
