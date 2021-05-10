import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import globalContext from "../context/globalContext";
import React, { useContext } from "react";
import "./AgendaSecretari.css";
import BackButton from "../components/BackButton";
import moment from 'moment';
import 'moment/locale/es';
export default function AgendaSecretaria({ history }) {

    const GlobalContext = useContext(globalContext);
    const {setActiveNavbarLink } = GlobalContext;

    moment.locale('es');
    const hoy = 'Fecha: ' + moment().format('LL');    
    return (

            <div class="container-xl"> 
            
                <BackButton history={history} />
               
                <p className='mt-3'>{hoy}</p>

                <table class="table-bordered w-100 h-100">
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
                            <td >
                                <div>
                                    <p class="align-top">1</p>
                                    <button type="button" class="btn btn-light align-bottom">+</button>
                                </div>
                            </td>
                            <td class="align-top">2
                            <p>Cita con Juan Perez. 05:30.Agente: Maria Jose.</p>
                            
                            </td>
                            <td class="align-top">3
                            <p>Cita con Juan Perez. 05:30. Agente: Maria Jose.</p>
                            
                            </td>
                            <td class="align-top">4
                            
                            
                            </td>
                            <td class="align-top">5
                            
                            
                            </td>
                            <td class="align-top">6
                            <p>Cita con Juan Perez. 05:30. Agente: Maria Jose.</p>
                            
                            </td>
                            <td class="align-top">7
                            
                            
                            </td>
                        </tr>
                        <tr>
                            <td class="align-top">1
                                <p>Cita con Juan Perez. 05:30. Agente: Maria Jose.</p>
                            
                            </td>
                            <td class="align-top">2
                            <p>Cita con Juan Perez. 05:30. Agente: Maria Jose.</p>
                            
                            </td>
                            <td class="align-top">3
                            <p>Cita con Juan Perez. 05:30. Agente: Maria Jose.</p>
                            
                            </td>
                            <td class="align-top">4
                            <p>Cita con Juan Perez. 05:30. Agente: Maria Jose.</p>
                            
                            </td>
                            <td class="align-top">5
                            <p>Cita con Juan Perez. 05:30. Agente: Maria Jose.</p>
                            
                            </td>
                            <td class="align-top">6
                            <p>Cita con Juan Perez. 05:30. Agente: Maria Jose.</p>
                            
                            </td>
                            <td class="align-top">7
                            
                            
                            </td>
                        </tr>
                        <tr>
                            <td class="align-top">1
                                
                            
                            </td>
                            <td class="align-top">2
                            
                            
                            </td>
                            <td class="align-top">3
                            
                            
                            </td>
                            <td class="align-top">4
                            
                            
                            </td>
                            <td class="align-top">5
                            <p>Cita con Juan Perez. 05:30. Agente: Maria Jose.</p>
                            
                            </td>
                            <td class="align-top">6
                            <p>Cita con Juan Perez. 05:30. Agente: Maria Jose.</p>
                            
                            </td>
                            <td class="align-top">7
                            
                            
                            </td>
                        </tr>
                        <tr>
                            <td class="align-top">1
                                
                            
                            </td>
                            <td class="align-top">2
                            
                            
                            </td>
                            <td class="align-top">3
                            
                            
                            </td>
                            <td class="align-top">4
                            
                            
                            </td>
                            <td class="align-top">5
                            
                            
                            </td>
                            <td class="align-top">6
                            <p>Cita con Juan Perez. 05:30. Agente: Maria Jose.</p>
                            
                            </td>
                            <td class="align-top">7
                            
                            
                            </td>
                        </tr>
                        <tr></tr>
                    </tbody>
                </table>
            </div>
            
 
    );
}