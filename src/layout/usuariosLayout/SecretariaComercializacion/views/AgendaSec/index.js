import useAuth from "../../../../../hooks/useAuth";
import Layout from "../../../../Layout";
import AgendaSecretaria from "../../../../../components/AgendaSecretaria";
import { Container, Row } from "react-bootstrap";

export default function AgendaSec({ history }) {
  const user = useAuth(history);
  document.querySelector("body").style.background = "";
  return (
    <Layout usuario={user}>
      <Container fluid>
        <Row className="justify-content-center">
          <h2 className="titulosSecciones">Agenda</h2>
        </Row>
        <Row>
          <AgendaSecretaria />
        </Row>
      </Container>
    </Layout>
  );
}
