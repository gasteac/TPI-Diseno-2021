import useAuth from "../../../../../hooks/useAuth";
import Layout from "../../../../Layout";
import BackButton from "../../../../../components/BackButton";

export default function AgendaSec({ history }) {
    const user = useAuth(history);
    return (
        <Layout
        usuario={user}
        >
            <BackButton history={history} />
            {/* ACA VA TU CODIGO VALENTINITA */}
        </Layout>
        )
}