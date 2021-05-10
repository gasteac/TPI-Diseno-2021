import Layout from "../../../../Layout";
import Table from "../../../../../components/Table/";
import useAuth from "../../../../../hooks/useAuth";
import BackButton from "../../../../../components/BackButton";
import { columns } from "./assets/columns";
import MOCK_DATA from "./assets/MOCK_DATA.json";
import { Container } from "react-bootstrap";

export default function CierreCaja({ history }) {
    const user = useAuth(history);

  return (
    <Layout
      usuario={user}
    >
      <BackButton history={history} />
      <div className='d-flex'>
        <Container fluid>
            <Table columnas={columns} datos={MOCK_DATA} flag={false}/>
        </Container>
        <Container fluid>
            <Table columnas={columns} datos={MOCK_DATA} flag={false} />
        </Container>
        <Container fluid>
            <Table columnas={columns} datos={MOCK_DATA} flag={false} />
        </Container>
      </div>
    </Layout>
  )
}