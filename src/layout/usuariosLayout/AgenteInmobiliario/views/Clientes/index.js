import clients from './assets/clients.json';
import { COLUMNS } from './assets/columns';
import useAuth from "../../../../../hooks/useAuth";
import Layout from '../../../../Layout';
import { Container,DropdownButton,Dropdown, } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './index.css'
import Table from '../../../../../components/Table';
import BackButton from "../../../../../components/BackButton";

export default function ListaClientes({ history }) {
    const user = useAuth(history);
    return (
        <Layout
            items={["Inicio", "Clientes", "Agenda", "Propiedades"]}
            usuario={user}
        >
 

            {/* <BackButton history={history} /> */}
            <Container fluid>
                <Container style={{display:'flex', justifyContent:'space-between', marginTop:'12px'}}>
                    <BackButton history={history} />
                    <h2 className='titulosSecciones'>Clientes</h2>
                   
                    <div className='dropdown-propio d-flex align-items-center'>
                    <DropdownButton id="dropdown-basic-button" title="Agregar cliente">

                        <Dropdown.Item >
                            <Link className="link-propio" to={'/agenteinmobiliario/Clientes/AgregarClientePropietario'}><p className="color-propio">Propietario</p></Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link className="link-propio" to={'/agenteinmobiliario/Clientes/AgregarClienteCorporativo'}><p className="color-propio">Corporativo</p></Link>
                        </Dropdown.Item>
                       
                        
                    </DropdownButton>
                </div>
                </Container> 

                
           
                <Table columnas={COLUMNS} datos={clients} />
            </Container>
        </Layout>
    );
}