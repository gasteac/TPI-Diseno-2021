import Layout from "../../../../Layout";
import ListaPropiedades from "../../../../../components/ListaPropiedades/";
import useAuth from "../../../../../hooks/useAuth";

import BackButton from "../../../../../components/BackButton";
import { Container } from "react-bootstrap";

export default function Propiedades({history}) {

  const user = useAuth(history)

  return (
    <Layout
      usuario={user}
    >
      <Container style={{display:'flex', justifyContent:'space-between', marginTop:'12px'}}>
      <BackButton history={history} />
      
      <h2 className='titulosSecciones'>Propiedades</h2>
      <div style={{marginLeft:'115px'}}></div>
      </Container> 

      <ListaPropiedades history={history}/>
    </Layout>
  );
}
