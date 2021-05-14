import React, { useContext, useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import propiedadesContext from "../../../context/contextPropiedades/propiedadesContext";

const CardPropiedades = ({
  propiedad,
  handleClickPropiedad,
  i,
  setIdImagen,
}) => {
  const PropiedadesContext = useContext(propiedadesContext);
  const { imagenesPropiedades } = PropiedadesContext;
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (imagenesPropiedades) {
      setImage(imagenesPropiedades[i]);
    }
  }, [imagenesPropiedades]);
  return (
    <Card
      className="shadow mb-3 mt-3 card-custom"
      style={{ width: "350px", border: "none" }}
      key={propiedad._id}
      onClick={() => {
        handleClickPropiedad(propiedad._id);
        setIdImagen(imagenesPropiedades[i].id);
      }}
    >
      {!image ? (
          <div style={{display: "flex", justifyContent: "center"}}>
              <Card.Img as={Spinner} animation="border" role="status" />
          </div>
      ) : (
        <Card.Img variant="top" src={image.largeImageURL} style={{minHeight:'250px'}} />
      )}
      <Card.Body>
        <Card.Title>
          {propiedad.DatosDelInmueble.tituloPropiedad},{" "}
          {propiedad.DatosDelInmueble.direccion}
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
  );
};

export default CardPropiedades;
