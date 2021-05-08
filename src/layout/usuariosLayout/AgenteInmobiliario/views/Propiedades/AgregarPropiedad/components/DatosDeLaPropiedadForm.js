import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

const DatosDeLaPropiedadForm = ({
  validatedPropiedad,
  handleSubmitPropiedad,
  DatosDelInmueble,
  tituloPropiedad,
}) => {
  const [formState, setFormState] = useState({
    nroInmueble: "",
    tipo: "",
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
    nroInmueble,
    tipo,
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
    amueblada,
    servicios,
    estado,
    metrosCuadrados,
    precio,
  } = formState;

  useEffect(() => {
    if (DatosDelInmueble) {
      setFormState(DatosDelInmueble);
    }
  }, [DatosDelInmueble]);

  const [tipoFinal, _, con] = tipo.split(" ");
  const [servicio1, servicio2, servicio3] = servicios
    .replace(",", "")
    .split(" ");

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form
      noValidate
      validated={validatedPropiedad}
      onSubmit={handleSubmitPropiedad}
    >
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Título</Form.Label>
          <Form.Control
            required
            placeholder="Título"
            type="text"
            name="titulo"
            value={tituloPropiedad}
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
          <Form.Control as="select" name="tipo" required >
            <option  hidden disabled value={tipoFinal} onChange={handleChange} defaultValue={tipoFinal ? tipoFinal : 'Seleccione un tipo'}>
              {tipoFinal ? tipoFinal : 'Seleccione un tipo'}
            </option>
            <option>Casa</option>
            <option>Departamento</option>
            <option>PH</option>
            <option>Oficina</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Con</Form.Label>
          <Form.Control as="select" name="con" required>
            <option  defaultValue={con} hidden disabled onChange={handleChange} value={con}>
              {con}
            </option>
            <option>Cochera</option>
            <option>Ascensor</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>País</Form.Label>
          <Form.Control as="select" name="pais" required >
            <option  hidden disabled onChange={handleChange} defaultValue={pais ? pais : 'Seleccione un pais'}>
              {pais ? pais : 'Seleccione un pais'}
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
          <Form.Control as="select" name="provincia" required>
            <option  defaultValue={provincia} hidden disabled onChange={handleChange} value={provincia} >
              {provincia}
            </option>
            <option>Chaco</option>
            <option>Corrientes</option>
            <option>Chubut</option>
            <option>Buenos Aires</option>
            <option>Mendoza</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Localidad</Form.Label>
          <Form.Control as="select" name="localidad" required>
            <option   hidden disabled onChange={handleChange} value={localidad} defaultValue={localidad}>
              {localidad}
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
            disabled
            value={CP}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Debería ser un número.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Antiguedad</Form.Label>
          <Form.Control
            required
            placeholder="Antiguedad"
            type="number"
            name="antiguedad"
            value={antiguedad}
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
            value={espacios}
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
            value={habitaciones}
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
            value={banios}
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
            value={suit}
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
          <Form.Control as="select" multiple required onChange={handleChange}>
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
                value={metrosCuadrados}
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
              <Form.Control as="select" required >
                <option hidden disabled onChange={handleChange} value={contrato} defaultValue={contrato}>
                  {contrato}
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
            value={precio}
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
    </Form>
  );
};

export default DatosDeLaPropiedadForm;
