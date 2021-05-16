import useAuth from "../../../../hooks/useAuth";

export default function ReporteTransacciones({ history }) {
    const user = useAuth(history);
  return (
    <Layout
      usuario={user}
    >
        
    </Layout>
  )
}