import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

const DatosDelClientePropietario = () =>{

    const [formState, setFormState] = useState({
        nombre: "",
        apellido: "",
        telefono: 0,
        cuil: 0,
        dni: 0,
        correoElectronico: "",
        fechaDeNacimiento:""
    });

    const{
        
        nombre,
        apellido,
        telefono,
        cuil,
        dni,
        correoElectronico,
        fechaDeNacimiento

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
                <Form.Label>Nombres</Form.Label>
                <Form.Control
                    required
                    placeholder="Ej: Lucas Emanuel"
                    type="text"
                    name="nombre"
                    value={nombre}
                    onChange={handleChange}
                    />
            </Form.Group>

            <Form.Group as={Col}>
                <Form.Label>Apellidos</Form.Label>
                <Form.Control
                    required
                    placeholder="Ej: Nuñez"
                    type="text"
                    name="apellido"
                    value={apellido}
                    onChange={handleChange}
                    />
            </Form.Group>    
        </Form.Row>

        <Form.Row>
            
             <Form.Group as={Col}>
                <Form.Label>CUIL/CUIT</Form.Label>
                <Form.Control
                    required
                    placeholder="Ej: 20393158213"
                    type="number"
                    name="cuil"
                    value={cuil ? cuil : null}
                    onChange={handleChange}
                    />
                <Form.Control.Feedback type="invalid">
                    Debería ser un número.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col}>
                <Form.Label>D.N.I.</Form.Label>
                <Form.Control
                    required
                    placeholder="Ej: 39315821"
                    type="number"
                    name="dni"
                    value={dni ? dni : null}
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
 
            <Form.Group>
                <Form.Label>Fecha de nacimiento</Form.Label>
                <Form.Control
                    required
                    onChange={(e) => handleChange(e)}
                    type="date"
                    name="fechaDeNacimiento"
                    value={fechaDeNacimiento}
                />
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

export default DatosDelClientePropietario;