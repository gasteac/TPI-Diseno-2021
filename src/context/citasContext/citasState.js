import React, {useReducer} from 'react';

import citasContext from './citasContext';
import citasReducer from './citasReducer';

import solicitudes from '../../layout/usuariosLayout/SecretariaComercializacion/views/Citas/assets/columns2-data.json'


import { 
    OBTENER_CITAS,
    CITAS_SELECCIONADAS
 } from '../types';
 
 const CitasState = (props) => {
     const initialState = {
        solicitudes,
        citasSeleccionadas: null
     }
     const [state, dispatch] = useReducer(citasReducer, initialState);
     const setCitasSeleccionadas = cita => {
         dispatch({
             type: CITAS_SELECCIONADAS,
             payload: cita
         })
     }
     return (
         <citasContext.Provider
            value={{
                solicitudes: state.solicitudes,
                citasSeleccionadas: state.citasSeleccionadas,
                setCitasSeleccionadas
            }}
         >
             {props.children}
         </citasContext.Provider>
     )
 }
 
 export default CitasState
 