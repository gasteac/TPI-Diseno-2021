import Layout from "../../../../Layout";
import Table from "../../../../../components/Table/";
import MOCK_DATA from "./assets/MOCK_DATA.json";
import { COLUMNS } from "./assets/columns";
import { Container } from "react-bootstrap";
import useAuth from "../../../../../hooks/useAuth";
import BackButton from "../../../../../components/BackButton";

export default function Agenda({history}) {
    const user = useAuth(history)

  return (
    <Layout
      usuario={user}
    >
      <BackButton history={history} />
      <Container fluid>
        <div className='d-flex justify-content-center'>
      <h2 style={{color:'white', textAlign:'center', background:'rgb(80, 98, 140)', padding:'5px', borderRadius:'8px'}}>AGENDA</h2></div>
        <Table columnas={COLUMNS} datos={MOCK_DATA} />
      </Container>
    </Layout>
  );
}
