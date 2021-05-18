import { COLUMNS } from "./assets/columns";
import useAuth from "../../../../../hooks/useAuth";
import Layout from "../../../../Layout";
import {
  Button,
  Container,
  Row,
  Col,
  Modal,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from "../../../../../components/Table";
import { useContext, useState } from "react";
import clientesContext from "../../../../../context/contextClientes/clientesContext";
import BackButton from "../../../../../components/BackButton";

export default function ListadoDeUsuarios({ history }) {
    
  const user = useAuth(history);

  const ClientesContext = useContext(clientesContext);
  const { clientes, setClientesSeleccionados, eliminarCliente } =
    ClientesContext;

  const [showEliminar, setShowEliminar] = useState(false);
  const handleCloseEliminar = () => setShowEliminar(false);
  const handleShowEliminar = () => setShowEliminar(true);

  const confirmarEliminar = () => {
    eliminarCliente();
    setShowEliminar(false);
  };

  document.querySelector("body").style.background = "";

  return (
    <Layout>
      <Container fluid>
      <BackButton history={history} />
        <Row>
            <Col xs={7} className="d-flex justify-content-end">
                <h2 className="titulosSecciones">Usuarios</h2>
            </Col>
            
            <Col
                className="d-flex align-items-center justify-content-end"
                xs={5}
            >
            
                <Button
                    onClick={handleShowEliminar}
                    variant="danger"
                    className="mr-2"
                >
                    Eliminar seleccionado
                </Button>

                <Link to={"/admin/editarUsuario"}>
                    <Button

                        variant="primary"
                        className="mr-2"
                        >
                        Editar usuario
                    </Button>
                </Link>        
                    
            </Col>

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

      </Container>
      <Modal show={showEliminar} onHide={handleCloseEliminar} backdrop="static">
        <Modal.Header style={{ background: "#e10016", color: "#FAFAFA" }}>
          Advertencia
        </Modal.Header>
        <Modal.Body>
          ¿Esta seguro de que quieres eliminar el usuario?
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
