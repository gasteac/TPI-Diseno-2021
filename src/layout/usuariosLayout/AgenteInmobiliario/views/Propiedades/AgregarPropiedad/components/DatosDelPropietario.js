import React from 'react'
import { Col, Form } from 'react-bootstrap'

const DatosDelPropietario = () => {
    return (
        <Form>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Número de Cliente</Form.Label>
                    <Form.Control type="number" placeholder="Número de Cliente" name="nroCliente" />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Tipo Cliente</Form.Label>
                    <Form.Control type="text" placeholder="Tipo" name="tipo" disabled />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" name="nombre" disabled/>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Apellido" name="apellido" disabled />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>DNI</Form.Label>
                    <Form.Control type="number" placeholder="DNI" name="dni" disabled />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>País</Form.Label>
                    <Form.Control type="text" placeholder="País" name="pais" disabled/>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Provincia</Form.Label>
                    <Form.Control type="text" placeholder="Provincia" name="provincia" disabled />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control type="text" placeholder="Dirección" name="direccion" disabled/>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="tel" placeholder="Teléfono" name="telefono" disabled />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" name="email" disabled />
                </Form.Group>
            </Form.Row>
        </Form>
    )
}

export default DatosDelPropietario
