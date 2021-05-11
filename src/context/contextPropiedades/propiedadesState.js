import {useReducer} from 'react'

import propiedadesContext from '../contextPropiedades/propiedadesContext';
import propiedadesReducer from '../contextPropiedades/propiedadesReducer';

import propiedades from '../../assets/propiedades.json'

import {
    UPDATE_PROPIEDADES,
    PROPIEDAD_SELECCIONADA
} from '../types';

const PropiedadesState = (props) => {
    
    const initialState = {
        propiedades,
        propiedadSeleccionada: {}
    }

    const [state, dispatch] = useReducer(propiedadesReducer, initialState);

    const seleccionarPropiedad = (id) => {
        dispatch({
            type: PROPIEDAD_SELECCIONADA,
            payload: id
        })
    }

    return (
        <propiedadesContext.Provider
            value={{
                propiedades: state.propiedades,
                propiedadSeleccionada: state.propiedadSeleccionada,
                seleccionarPropiedad
            }}
        >
            {props.children}
        </propiedadesContext.Provider>
    )
}

export default PropiedadesState
