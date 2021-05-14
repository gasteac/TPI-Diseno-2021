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
    GET_PROPIEDAD_NOMBRE
} from '../types';

const PropiedadesState = (props) => {
    
    const initialState = {
        propiedades,
        propiedadSeleccionada: {},
        idImagenPropiedad: 0,
        imagenesPropiedades: [],
        propiedadesFiltradas: []
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

    const getPropiedadNombre = nombre => {
        dispatch({
            type: GET_PROPIEDAD_NOMBRE,
            payload: nombre
        })
    }

    return (
        <propiedadesContext.Provider
            value={{
                propiedades: state.propiedades,
                propiedadSeleccionada: state.propiedadSeleccionada,
                imagenesPropiedades: state.imagenesPropiedades,
                idImagenPropiedad: state.idImagenPropiedad,
                propiedadesFiltradas: state.propiedadesFiltradas,
                seleccionarPropiedad,
                setImagenesPropiedades,
                setIdImagen,
                addPropiedad,
                getPropiedadNombre
            }}
        >
            {props.children}
        </propiedadesContext.Provider>
    )
}

export default PropiedadesState
