import useAuth from "../../../../../hooks/useAuth";
import Layout from "../../../../Layout";
import BackButton from "../../../../../components/BackButton";
import AgendaSecretaria from "../../../../../components/AgendaSecretaria";

export default function AgendaSec({ history }) {
    const user = useAuth(history);
    return (
        <Layout
        usuario={user}
        >
            <BackButton />
            <AgendaSecretaria />
        </Layout>
        )
}