import { COLUMNS } from "./assets/columns";
import useAuth from "../../../../../hooks/useAuth";
import Layout from "../../../../Layout";
import {
  Button,
  Container,
  DropdownButton,
  Dropdown,
  Row,
  Col,
  Modal,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";
import Table from "../../../../../components/Table";
import { useContext, useEffect, useState } from "react";
import clientesContext from "../../../../../context/contextClientes/clientesContext";

export default function ListaClientes({ history }) {
  const user = useAuth(history);

  const ClientesContext = useContext(clientesContext);
  const { clientes, setClientesSeleccionados, eliminarCliente } = ClientesContext;

  const [showEliminar, setShowEliminar] = useState(false);
  const handleCloseEliminar = () => setShowEliminar(false);
  const handleShowEliminar = () => setShowEliminar(true);

  const confirmarEliminar = () => {
    eliminarCliente();
    setShowEliminar(false)
  }


  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col xs={7} className="d-flex justify-content-end">
            <h2 className="titulosSecciones">Clientes</h2>
          </Col>
          {user === "agenteinmobiliario" && (
            <Col
              className="d-flex align-items-center justify-content-end"
              xs={5}
            >
              <Button
                onClick={handleShowEliminar}
                variant="danger"
                className="mr-2"
              >
                Eliminar seleccionados
              </Button>
              <Button
                as={Link}
                to={"/agenteinmobiliario/Clientes/EditarCliente"}
                variant="primary"
                className="mr-2"
              >
                Editar cliente
              </Button>

              <DropdownButton
                id="dropdown-basic-button"
                variant="success"
                title="Agregar cliente"
              >
                <Dropdown.Item
                  as={Link}
                  to={"/agenteinmobiliario/Clientes/AgregarClientePropietario"}
                >
                  Propietario
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link}
                  to={"/agenteinmobiliario/Clientes/AgregarClienteCorporativo"}
                >
                  Corporativo
                </Dropdown.Item>
              </DropdownButton>
            </Col>
          )}
        </Row>
        <Row className="justify-content-center">
          <Col>
            <Table
              columnas={COLUMNS}
              datos={clientes}
              setClientesSeleccionados={setClientesSeleccionados}
            />
          </Col>
        </Row>
        {user.includes("gerentegeneral") ? (
          <Button style={{ marginTop: "20px" }} type="button" variant="info">
            Imprimir reporte
          </Button>
        ) : null}
      </Container>
      <Modal show={showEliminar} onHide={handleCloseEliminar} backdrop="static">
        <Modal.Header style={{ background: "#e10016", color: "#FAFAFA" }}>
          Advertencia
        </Modal.Header>
        <Modal.Body>
          ¿Esta seguro de que quieres eliminar la propiedad?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleCloseEliminar}>
            No eliminar
          </Button>
          <Button variant="danger" onClick={confirmarEliminar}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
}
