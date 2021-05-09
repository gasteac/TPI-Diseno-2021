import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const Prueba = ({ provincia, handleChange }) => {
  console.log(provincia);
  return (
    <>
      <Form.Control
        as="select"
        name="provincia"
        required
        onChange={handleChange}
        className="form-control"
        value={provincia}
      >
        <option hidden disabled selected value="">
          Seleccione una provincia
        </option>
        <option value="Chubut">Chubut</option>
        <option value="Buenos Aires">Buenos Aires</option>
        <option value="Corrientes">Corrientes</option>
        <option value="Chaco">Chaco</option>
        <option value="Mendoza">Mendoza</option>
      </Form.Control>
    </>
  );
};

export default Prueba;
