import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const DatosDeLaPropiedadForm = ({
  validatedPropiedad,
  handleSubmitPropiedad,
}) => {
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
          <Form.Control as="select" name="tipo" required>
            <option selected value="" hidden disabled>
              Selecciona un tipo de propiedad
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
            <option selected value="" hidden disabled>
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
          <Form.Control as="select" name="pais" required>
            <option selected value="" hidden disabled>
              Selecciona un País
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
            <option selected value="" hidden disabled>
              Selecciona una Provincia
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
            <option selected value="" hidden disabled>
              Selecciona una Localidad
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
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            placeholder="Dirección"
            type="text"
            name="direccion"
            required
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
          />
          <Form.Control.Feedback type="invalid">
            Debería ser un número.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Suit</Form.Label>
          <Form.Control required placeholder="Suit" type="number" name="suit" />
          <Form.Control.Feedback type="invalid">
            Debería ser un número.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Servicios</Form.Label>
          <Form.Control as="select" multiple required>
            <option>Agua</option>
            <option>Luz</option>
            <option>Limpieza</option>
            <option>Internet</option>
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
              />
              <Form.Control.Feedback type="invalid">
                Debería ser un número.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Contrato</Form.Label>
              <Form.Control as="select" required>
                <option selected value="" hidden disabled>
                  Selecciona un contrato
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
          />
        </Form.Group>
      </Form.Row>
    </Form>
  );
};

export default DatosDeLaPropiedadForm;
