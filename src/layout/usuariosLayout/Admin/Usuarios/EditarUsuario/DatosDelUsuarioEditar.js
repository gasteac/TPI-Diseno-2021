import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";
document.querySelector('body').style.background = ""
const DatosDelUsuarioEditar = () =>{

    const [formState, setFormState] = useState({
        nombre: "",
        apellido: "",
        dni: 0,
        telefono: 0,
        telefonoAlternativo: 0,
        correoElectronico: "",
        nombreUsuario:"",
        contraseña:""
    
    });

    const{
        
        nombre,
        apellido,
        dni,
        telefono,
        telefonoAlternativo,
        correoElectronico,
        nombreUsuario,
        contraseña

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
 

        </Form.Row>
        
        <Form.Row>
 
            <Form.Group as={Col}>
                <Form.Label>Teléfono de contacto alternativo</Form.Label>
                <Form.Control
                    required
                    placeholder="Ej: 3624638927"
                    type="number"
                    name="telefonoAlternativo"
                    value={telefonoAlternativo ? telefonoAlternativo : null}
                    onChange={handleChange}
                    />
                <Form.Control.Feedback type="invalid">
                    Debería ser un número.
                </Form.Control.Feedback>
            </Form.Group>

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
 

        </Form.Row>

        <Form.Row>

        <Form.Group as={Col}>
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control
                    required
                    placeholder="Ej: Lucas"
                    type="text"
                    name="nombreUsuario"
                    value={nombreUsuario}
                    onChange={handleChange}
                    />
            </Form.Group>

            <Form.Group as={Col}>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    required
                    placeholder=""
                    type="password"
                    name="contraseña"
                    value={contraseña}
                    onChange={handleChange}
                    />
            </Form.Group>
  


        </Form.Row>

        
        
        </>
    );
}

export default DatosDelUsuarioEditar;
