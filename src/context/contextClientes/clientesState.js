import { useReducer } from "react";

import clientesContext from "../contextClientes/clientesContext";
import clientesReducer from "../contextClientes/clientesReducer";

import clientes from '../../layout/usuariosLayout/AgenteInmobiliario/views/Clientes/assets/14clients.json'

import {
    ELIMINAR_CLIENTE,
    CLIENTES_SELECCIONADOS
} from '../types'

const ClientesState = (props) => {
    const initialState = {
        clientes,
        clientesSeleccionados: null
    }
    const [state, dispatch] = useReducer(clientesReducer, initialState);

    const setClientesSeleccionados = cliente => {
        dispatch({
            type: CLIENTES_SELECCIONADOS,
            payload: cliente
        })
    }
    const eliminarCliente = () => {
        dispatch({
            type: ELIMINAR_CLIENTE
        })
    }
    return (
        <clientesContext.Provider
            value={{
                clientes: state.clientes,
                setClientesSeleccionados,
                eliminarCliente
            }}
        >
            {props.children}
        </clientesContext.Provider>
    )
}

export default ClientesState
