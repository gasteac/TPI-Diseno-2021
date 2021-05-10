import useAuth from "../../../hooks/useAuth";
import Layout from "../../Layout";
import Notificaciones from "../../../components/Notificaciones";
import ButtonCard from "../../../components/ButtonCard";

export default function SecretariaComercializacion({ history }) {

    const user = useAuth(history);

    return (
        <Layout
      usuario={user}
    >
      <div className="container-fluid">
        {/* parte izquierda */}
        <div className="row">
          <div className="col-5 mt-5">
            <Notificaciones />
          </div>
          {/* parte derecha */}
          <div className="col-7 sm-12 my-auto mt-5 d-flex justify-content-around">
            <div className="row">
              <div className="col">
                <ButtonCard user={user} seccion={"Agenda"} link={'link-1'}/>
              </div>
              <div className="col">
                <ButtonCard user={user} seccion={"Citas"} link={'link-2'}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
    );
}