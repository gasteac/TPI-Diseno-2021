import Layout from "../../../../Layout";
import Table from "../../../../../components/Table/";
import { Container } from "react-bootstrap";
import BackButton from "../../../../../components/BackButton";

export default function Citas() {
    return (
        <Layout
        usuario={user}
        >
            <BackButton history={history} />
            <Container fluid>
                <Table columnas={COLUMNS} datos={MOCK_DATA} />
            </Container>
        </Layout>
    );
}