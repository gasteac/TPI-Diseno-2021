import { Card, Spinner } from "react-bootstrap";

const CardPropiedades = ({
  propiedad,
  handleClickPropiedad
}) => {

  return (
    <Card
      className="shadow mb-3 mt-3 card-custom"
      style={{ width: "350px", border: "none" }}
      key={propiedad._id}
      onClick={() => {
        handleClickPropiedad(propiedad._id);
      }}
    >
      {!propiedad.imagen ? (
          <div style={{display: "flex", justifyContent: "center"}}>
              <Card.Img as={Spinner} animation="border" role="status" />
          </div>
      ) : (
        <Card.Img variant="top" src={propiedad.imagen} style={{minHeight:'250px'}} />
      )}
      <Card.Body>
        <Card.Title>
          {propiedad.DatosDelInmueble.tipo} {propiedad.DatosDelInmueble.tituloPropiedad},{" "}
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
