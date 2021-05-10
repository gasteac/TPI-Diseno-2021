import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import globalContext from "../context/globalContext";
import React, { useContext } from "react";
import "./AgendaSecretari.css";
import BackButton from "./BackButton";

export default function AgendaSecretaria({ history }) {
  const GlobalContext = useContext(globalContext);
  const { setActiveNavbarLink } = GlobalContext;

  return (
    <div className="container-xl">
      <BackButton history={history} />

      <caption>Mayo/2021</caption>

      <table className="table-bordered w-100 h-100">
        <thead>
          <tr>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miercoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
            <th>Sabado</th>
            <th>Domingo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td style={{display: "grid", width: "100%"}}>
              <p className="align-top">1</p>
              <div style={{display: "flex", justifyContent: "end", alignItems: "end"}}>
                <button type="button" className="btn btn-light align-bottom">
                  +
                </button>
              </div>
            </td>
            <td className="align-top">
              2<p>Cita con Juan Perez. 05:30.Agente: Maria Jose.</p>
            </td>
            <td className="align-top">
              3<p>Cita con Juan Perez. 05:30. Agente: Maria Jose.</p>
            </td>
            <td className="align-top">4</td>
            <td className="align-top">5</td>
            <td className="align-top">
              6<p>Cita con Juan Perez. 05:30. Agente: Maria Jose.</p>
            </td>
            <td className="align-top">7</td>
          </tr>
          <tr>
            <td className="align-top">
              1<p>Cita con Juan Perez. 05:30. Agente: Maria Jose.</p>
            </td>
            <td className="align-top">
              2<p>Cita con Juan Perez. 05:30. Agente: Maria Jose.</p>
            </td>
            <td className="align-top">
              3<p>Cita con Juan Perez. 05:30. Agente: Maria Jose.</p>
            </td>
            <td className="align-top">
              4<p>Cita con Juan Perez. 05:30. Agente: Maria Jose.</p>
            </td>
            <td className="align-top">
              5<p>Cita con Juan Perez. 05:30. Agente: Maria Jose.</p>
            </td>
            <td className="align-top">
              6<p>Cita con Juan Perez. 05:30. Agente: Maria Jose.</p>
            </td>
            <td className="align-top">7</td>
          </tr>
          <tr>
            <td className="align-top">1</td>
            <td className="align-top">2</td>
            <td className="align-top">3</td>
            <td className="align-top">4</td>
            <td className="align-top">
              5<p>Cita con Juan Perez. 05:30. Agente: Maria Jose.</p>
            </td>
            <td className="align-top">
              6<p>Cita con Juan Perez. 05:30. Agente: Maria Jose.</p>
            </td>
            <td className="align-top">7</td>
          </tr>
          <tr>
            <td className="align-top">1</td>
            <td className="align-top">2</td>
            <td className="align-top">3</td>
            <td className="align-top">4</td>
            <td className="align-top">5</td>
            <td className="align-top">
              6<p>Cita con Juan Perez. 05:30. Agente: Maria Jose.</p>
            </td>
            <td className="align-top">7</td>
          </tr>
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
}
