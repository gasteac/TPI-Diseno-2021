import {useReducer} from 'react'

import propiedadesContext from '../contextPropiedades/propiedadesContext';
import propiedadesReducer from '../contextPropiedades/propiedadesReducer';

import propiedades from '../../assets/12propiedades.json'

import {
    UPDATE_PROPIEDADES,
    PROPIEDAD_SELECCIONADA,
    ADD_PROPIEDAD
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

    const addPropiedad = propiedad => {
        dispatch({
            type: ADD_PROPIEDAD,
            payload: propiedad
        })
    }

    return (
        <propiedadesContext.Provider
            value={{
                propiedades: state.propiedades,
                propiedadSeleccionada: state.propiedadSeleccionada,
                seleccionarPropiedad,
                addPropiedad
            }}
        >
            {props.children}
        </propiedadesContext.Provider>
    )
}

export default PropiedadesState
