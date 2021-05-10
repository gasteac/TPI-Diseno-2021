import Layout from "../../Layout";
import Notificaciones from "../../../components/Notificaciones";
import ButtonCard from "../../../components/ButtonCard";
import useAuth from "../../../hooks/useAuth";

export default function Cajera({ history }) {
    const user = useAuth(history)
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
                  <ButtonCard user={user} seccion={"Entrada/Salida"} link={'link-1'} />
                </div>
                <div className="col">
                  <ButtonCard user={user} seccion={"Pago alquiler"} link={'link-2'} />
                  <ButtonCard user={user} seccion={"Pago venta"} link={'link-3'} />
                </div>
                <div className="col">
                  <ButtonCard user={user} seccion={"Transacciones"}  link={'link-4'} />
                </div>
                <div className="col">
                  <ButtonCard user={user} seccion={"Cierre de caja"} link={'link-5'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
}