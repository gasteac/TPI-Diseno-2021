import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

const DatosDeLaPropiedadForm = ({
DatosDelInmuebleEditar,
  nuevaPropiedad,
  setPropiedad,
}) => {
  const [formState, setFormState] = useState({
    tituloPropiedad: "",
    nroInmueble: "",
    tipo: "",
    con: "",
    contrato: "",
    pais: "",
    CP: 0,
    provincia: "",
    localidad: "",
    barrio: "",
    direccion: "",
    banios: 0,
    habitaciones: 0,
    suit: 0,
    espacios: 0,
    antiguedad: 0,
    amueblada: 0,
    servicios: "",
    estado: "",
    metrosCuadrados: 0,
    precio: 0,
  });

  const {
    tituloPropiedad,
    tipo,
    con,
    contrato,
    pais,
    CP,
    provincia,
    localidad,
    barrio,
    direccion,
    banios,
    habitaciones,
    suit,
    espacios,
    antiguedad,
    servicios,
    estado,
    metrosCuadrados,
    precio,
  } = formState;

  useEffect(() => {
    if (DatosDelInmuebleEditar) {
      setFormState(DatosDelInmuebleEditar);
    }
  }, [DatosDelInmuebleEditar]);

  const [servicio1, servicio2, servicio3] = servicios

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
    setPropiedad({
      ...nuevaPropiedad,
      DatosDelInmueble: {
        ...nuevaPropiedad.DatosDelInmueble,
        [e.target.name]: e.target.value,
      }
    });
  };

  const handleChangeMultipleSelect = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: [...formState.servicios ,e.target.value]
    })
    setPropiedad({
      ...nuevaPropiedad,
      DatosDelInmueble: {
        ...nuevaPropiedad.DatosDelInmueble,
        [e.target.name]: [...formState.servicios ,e.target.value],
      }
    });
  }

  return (
    <>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Título</Form.Label>
          <Form.Control
            required
            placeholder="Título de la Propiedad"
            type="text"
            name="tituloPropiedad"
            value={tituloPropiedad}
            onChange={handleChange}
            />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Imagen de la propiedad</Form.Label>
          <Form.File name="imagen" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Tipo</Form.Label>
          <Form.Control as="select" name="tipo" required value={tipo} onChange={handleChange}>
              <option hidden disabled value="">
                Seleccione un tipo
              </option>

              <option>Casa</option>
              <option>Departamento</option>
              <option>PH</option>
              <option>Oficina</option>
            </Form.Control>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Con</Form.Label>
          <Form.Control as="select" name="con" required value={con} onChange={handleChange}>
            <option hidden disabled value="">
              Seleccione una opción
            </option>
            <option>Cochera</option>
            <option>Ascensor</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>País</Form.Label>
          <Form.Control
            as="select"
            name="pais"
            required
            value={pais}
            onChange={handleChange}
            >
            <option hidden disabled value="">
              Seleccione un país
            </option>

            <option>Argentina</option>
            <option>Chile</option>
            <option>Uruguay</option>
            <option>Brasil</option>
            <option>Paraguay</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Provincia</Form.Label>
          <Form.Control
            as="select"
            name="provincia"
            required
            onChange={handleChange}
            value={provincia}
            >
            <option hidden disabled value="">
              Seleccione una provincia
            </option>
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Chubut">Chubut</option>
            <option value="Corrientes">Corrientes</option>
            <option value="Chaco">Chaco</option>
            <option value="Mendoza">Mendoza</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Localidad</Form.Label>
          <Form.Control as="select" name="localidad" required value={localidad} onChange={handleChange}>
              <option hidden disabled value="">
                Seleccione una localidad
              </option>
              <option>Resistencia</option>
              <option>Corrientes</option>
              <option>Barranqueras</option>
              <option>Misiones</option>
            </Form.Control>
          
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Barrio</Form.Label>
          <Form.Control
            placeholder="Barrio"
            type="text"
            name="barrio"
            required
            value={barrio}
            onChange={handleChange}
            />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            placeholder="Dirección"
            type="text"
            name="direccion"
            required
            value={direccion}
            onChange={handleChange}
            />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Codigo Postal</Form.Label>
          <Form.Control
            required
            placeholder="Codigo Postal"
            type="number"
            name="CP"
            value={CP ? CP : null}
            onChange={handleChange}
            />
          <Form.Control.Feedback type="invalid">
            Debería ser un número.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Antigüedad</Form.Label>
          <Form.Control
            required
            placeholder="Antigüedad"
            type="number"
            name="antiguedad"
            value={antiguedad? antiguedad : null}
            onChange={handleChange}
            />
          <Form.Control.Feedback type="invalid">
            Debería ser un número.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Cant. Espacios</Form.Label>
          <Form.Control
            required
            placeholder="Cant. Esp."
            type="number"
            name="espacios"
            value={espacios ? espacios: null}
            onChange={handleChange}
            />
          <Form.Control.Feedback type="invalid">
            Debería ser un número.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Habitaciones</Form.Label>
          <Form.Control
            required
            placeholder="Habitaciones"
            type="number"
            name="habitaciones"
            value={habitaciones ? habitaciones : null}
            onChange={handleChange}
            />
          <Form.Control.Feedback type="invalid">
            Debería ser un número.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Cant. Baños</Form.Label>
          <Form.Control
            required
            placeholder="Cant. Baños"
            type="number"
            name="banios"
            value={banios? banios : null}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Debería ser un número.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Suit</Form.Label>
          <Form.Control
            required
            placeholder="Suit"
            type="number"
            name="suit"
            value={suit? suit: null}
            onChange={handleChange}
            />
          <Form.Control.Feedback type="invalid">
            Debería ser un número.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Servicios</Form.Label>
          <Form.Control as="select" multiple required name="servicios" onChange={handleChangeMultipleSelect} value={servicios}>
            <option selected={servicio1 && servicio1}>Agua</option>
            <option selected={servicio2 && servicio2}>Luz</option>
            <option>Limpieza</option>
            <option selected={servicio3 && servicio3}>Internet</option>
          </Form.Control>
        </Form.Group>
        <Col>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>m2 Totales</Form.Label>
              <Form.Control
                required
                placeholder="m2 Totales"
                type="number"
                name="metrosCuadrados"
                value={metrosCuadrados? metrosCuadrados : null}
                onChange={handleChange}
                />
              <Form.Control.Feedback type="invalid">
                Debería ser un número.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Contrato</Form.Label>
              <Form.Control as="select" required value={contrato} onChange={handleChange} name="contrato">
                <option hidden disabled value="">
                  Seleccione un contrato
                </option>
                <option>Venta</option>
                <option>Alquiler</option>
              </Form.Control>
            </Form.Group>
          </Row>
        </Col>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Precio</Form.Label>
          <Form.Control
            placeholder="Precio"
            name="precio"
            type="number"
            required
            value={precio? precio : null}
            onChange={handleChange}
            />
          <Form.Control.Feedback type="invalid">
            Debería ser un número.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Estado</Form.Label>
          <Form.Control
            placeholder="Estado"
            name="estado"
            type="text"
            required
            value={estado}
            onChange={handleChange}
            />
        </Form.Group>
      </Form.Row>
            </>
  );
};

export default DatosDeLaPropiedadForm;
