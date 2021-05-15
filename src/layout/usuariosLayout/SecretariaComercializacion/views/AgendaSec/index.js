import useAuth from "../../../../../hooks/useAuth";
import Layout from "../../../../Layout";
import BackButton from "../../../../../components/BackButton";
import AgendaSecretaria from "../../../../../components/AgendaSecretaria";
import { Container } from "react-bootstrap";

export default function AgendaSec({ history }) {
    const user = useAuth(history);
    document.querySelector('body').style.background = ''
    return (
        <Layout
        usuario={user}
        >
            <Container style={{display:'flex', justifyContent:'space-between', marginTop:'12px'}}>
      <BackButton history={history} />
      
      <h2 className='titulosSecciones'>Agenda</h2>
      <div style={{marginLeft:'115px'}}></div>
      </Container> 
            <AgendaSecretaria />
        </Layout>
        )
}
