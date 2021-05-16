import clients from "./assets/clients.json";
import { COLUMNS } from "./assets/columns";
import useAuth from "../../../../../hooks/useAuth";
import Layout from "../../../../Layout";
import { Container, DropdownButton, Dropdown, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";
import Table from "../../../../../components/Table";
import BackButton from "../../../../../components/BackButton";
import { useState } from "react";

export default function ListaClientes({ history }) {
  const [clientes, setClientes] = useState([]);
  console.log(clientes);
  const user = useAuth(history);
  document.querySelector("body").style.background = "";
  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col xs={7} className="d-flex justify-content-end">
            <h2 className="titulosSecciones">Clientes</h2>
          </Col>
          <Col className="d-flex align-items-center justify-content-end" xs={5}>
              <DropdownButton
                id="dropdown-basic-button"
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
        </Row>
        <Row className="justify-content-center">
          <Table columnas={COLUMNS} datos={clients} setList={setClientes} />
        </Row>
      </Container>
    </Layout>
  );
}
