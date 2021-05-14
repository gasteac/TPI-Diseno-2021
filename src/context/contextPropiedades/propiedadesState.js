import {useReducer} from 'react'

import propiedadesContext from '../contextPropiedades/propiedadesContext';
import propiedadesReducer from '../contextPropiedades/propiedadesReducer';

import propiedades from '../../assets/12propiedades.json'

import {
    UPDATE_PROPIEDADES,
    PROPIEDAD_SELECCIONADA,
    ADD_PROPIEDAD,
    SET_IMAGE,
    API_CALL,
} from '../types';

const PropiedadesState = (props) => {
    
    const initialState = {
        propiedades,
        propiedadSeleccionada: {},
        idImagenPropiedad: 0,
        imagenesPropiedades: []
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

    const setIdImagen = id => {
        dispatch({
            type: SET_IMAGE,
            payload: id
        })
    }

    const setImagenesPropiedades = (imagenes) => {
        dispatch({
            type: API_CALL,
            payload: imagenes
        })
    }

    return (
        <propiedadesContext.Provider
            value={{
                propiedades: state.propiedades,
                propiedadSeleccionada: state.propiedadSeleccionada,
                imagenesPropiedades: state.imagenesPropiedades,
                idImagenPropiedad: state.idImagenPropiedad,
                seleccionarPropiedad,
                setImagenesPropiedades,
                setIdImagen,
                addPropiedad
            }}
        >
            {props.children}
        </propiedadesContext.Provider>
    )
}

export default PropiedadesState
