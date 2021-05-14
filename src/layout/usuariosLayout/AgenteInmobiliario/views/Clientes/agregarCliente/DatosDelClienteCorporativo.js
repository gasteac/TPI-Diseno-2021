import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

const DatosDelClienteCorporativo = ({}) =>{

    const [formState, setFormState] = useState({
        razonSocial: "",
        cuit: 0,
        telefono: 0,
        agenteInmobiliarioACargo: "",
        correoElectronico: "",
        direcciónDeLaEmpresa: "",
        nombrePropietario: ""
    });

    const{

        razonSocial,
        cuit,
        telefono,
        agenteInmobiliarioACargo,
        correoElectronico,
        direcciónDeLaEmpresa,
        nombrePropietario

    } = formState

    const handleChange = (e) => {
        setFormState({
          ...formState,
          [e.target.name]: e.target.value
        })
      };

    return(
        <>
        <Form.Row>
            <Form.Group as={Col}>
                <Form.Label>Razon social</Form.Label>
                <Form.Control
                    required
                    placeholder="Ej: S.A."
                    type="text"
                    name="razonSocial"
                    value={razonSocial}
                    onChange={handleChange}
                    />
            </Form.Group>

            <Form.Group as={Col}>
                <Form.Label>CUIT</Form.Label>
                <Form.Control
                    required
                    placeholder="Ej: 20393158213"
                    type="number"
                    name="cuit"
                    value={cuit ? cuit : null}
                    onChange={handleChange}
                    />
                <Form.Control.Feedback type="invalid">
                    Debería ser un número.
                </Form.Control.Feedback>
            </Form.Group>
     
        </Form.Row>

        <Form.Row>
            <Form.Group as={Col}>
                <Form.Label>Teléfono de contacto</Form.Label>
                <Form.Control
                    required
                    placeholder="Ej: 3624638927"
                    type="number"
                    name="telefono"
                    value={telefono ? telefono : null}
                    onChange={handleChange}
                    />
                <Form.Control.Feedback type="invalid">
                    Debería ser un número.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col}>
                <Form.Label>Agente inmobiliario a cargo</Form.Label>
                <Form.Control as="select" name="agenteInmobiliarioACargo" required value={agenteInmobiliarioACargo} onChange={handleChange}>
                    <option hidden disabled value="">
                        Seleccione un agente
                    </option>

                    <option>Nuñez, Lucas</option>
                    <option>Gonzales, Mariano</option>
                    <option>Sosa, Valentina</option>
                    <option>Ruiz, Franco</option>
                </Form.Control>
            </Form.Group>
        </Form.Row>
        
        <Form.Row>
            <Form.Group as={Col}>
                <Form.Label>Correo electronico</Form.Label>
                <Form.Control
                    required
                    type="email"
                    placeholder="Ej: ejemplo@ejemplo.com"
                    name="correoElectronico"
                    value={correoElectronico}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group as={Col}>
                <Form.Label>Dirección de la empresa</Form.Label>
                <Form.Control
                    required
                    placeholder="Ej: Av. Alberdi 500"
                    type="text"
                    name="direcciónDeLaEmpresa"
                    value={direcciónDeLaEmpresa}
                    onChange={handleChange}
                    />
            </Form.Group>


        </Form.Row>

        <Form.Row>
            <Form.Group as={Col}>
                <Form.Label>Nombre del propietario</Form.Label>
                <Form.Control
                    required
                    placeholder="Ej: Nuñez, Lucas Emanuel"
                    type="text"
                    name="nombrePropietario"
                    value={nombrePropietario}
                    onChange={handleChange}
                    />
            </Form.Group>

            <Form.Group as={Col}>
                <Form.Label>Documentación</Form.Label>
                <Form.Control id="formControlsFile"
                    type="file"
                    multiple
                    label="File" 
                />
            
            </Form.Group>


        


        </Form.Row>

        
        
        </>
    );
}

export default DatosDelClienteCorporativo;

