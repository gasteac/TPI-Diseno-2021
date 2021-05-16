import clients from './assets/clients.json';
import { COLUMNS } from './assets/columns';
import useAuth from "../../../../../hooks/useAuth";
import Layout from '../../../../Layout';
import { Container, DropdownButton, Dropdown, Button,Modal } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './index.css'
import Table from '../../../../../components/Table';
import BackButton from "../../../../../components/BackButton";
import { useState } from 'react';

export default function ListaClientes({ history }) {
    const [clientes, setClientes] = useState([]);
    console.log(clientes)
    const user = useAuth(history);
    document.querySelector('body').style.background = ''


    const [showEliminar, setShowEliminar] = useState(false);
    const handleCloseEliminar = () => setShowEliminar(false);
    const handleShowEliminar = () => setShowEliminar(true);


    return (
        <Layout
            items={["Inicio", "Clientes", "Agenda", "Propiedades"]}
            usuario={user}
        >


            {/* <BackButton history={history} /> */}
            <Container fluid>
                <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '12px' }}>
                    <BackButton history={history} />
                </div>

                <Container style={{ display: 'flex', justifyContent: 'center', marginTop: '12px' }}>
                    <h2 className='titulosSecciones'>Clientes</h2>
                </Container>

                <div>

                    <div className='dropdown-propio d-flex align-items-center'>
                        <Button onClick={handleShowEliminar} variant="outline-danger" className="mr-2">Eliminar cliente</Button>
                        <Button as={Link} to={'/agenteinmobiliario/Clientes/EditarCliente'} variant="outline-success" className="mr-2 text-boton-success">Editar cliente</Button>
                        <DropdownButton id="dropdown-basic-button" title="Agregar cliente">
                            <Dropdown.Item >
                                <Link className="link-propio" to={'/agenteinmobiliario/Clientes/AgregarClientePropietario'}><p className="color-propio">Propietario</p></Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link className="link-propio" to={'/agenteinmobiliario/Clientes/AgregarClienteCorporativo'}><p className="color-propio">Corporativo</p></Link>
                            </Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>

                <Table columnas={COLUMNS} datos={clients} setList={setClientes} />
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
                    <Button variant="danger" onClick={handleCloseEliminar}>
                        Eliminar
                    </Button>
                </Modal.Footer>
            </Modal>
        </Layout>
    );
}