import clients from './assets/clients.json';
import { COLUMNS } from './assets/columns';
import useAuth from "../../../../../hooks/useAuth";
import Layout from '../../../../Layout';
import { Container,DropdownButton,Dropdown, } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './index.css'
import Table from '../../../../../components/Table';
// import BackButton from "../../../../../components/BackButton";

export default function ListaClientes({ history }) {
    const user = useAuth(history);
    return (
        <Layout
            items={["Inicio", "Clientes", "Agenda", "Propiedades"]}
            usuario={user}
        >
 

            {/* <BackButton history={history} /> */}
            <Container fluid>
                <div className='d-flex my-auto justify-content-center' >
                    <h2 className='titulosSecciones'>CLIENTES</h2>
                </div>

                <div className='dropdown-propio'>
                    <DropdownButton id="dropdown-basic-button" title="Agregar cliente">

                        <Dropdown.Item >
                            <Link className="link-propio" to={'/agenteinmobiliario/Clientes/AgregarClientePropietario'}><p className="color-propio">Propietario</p></Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link className="link-propio" to={'/agenteinmobiliario/Clientes/AgregarClienteCorporativo'}><p className="color-propio">Corporativo</p></Link>
                        </Dropdown.Item>
                       
                        
                    </DropdownButton>
                </div>
           
                <Table columnas={COLUMNS} datos={clients} />
            </Container>
        </Layout>
    );
}