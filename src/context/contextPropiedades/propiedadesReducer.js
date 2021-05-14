import {
    UPDATE_PROPIEDADES,
    PROPIEDAD_SELECCIONADA,
    ADD_PROPIEDAD,
    SET_IMAGE,
    API_CALL,
} from '../types';

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case UPDATE_PROPIEDADES:
            return {
                ...state,
                propiedades: action.payload
            }
        case PROPIEDAD_SELECCIONADA:
            return {
                ...state,
                propiedadSeleccionada: state.propiedades.filter(propiedad => propiedad._id == action.payload)[0]
            }
        case ADD_PROPIEDAD:
            return {
                ...state,
                propiedades: [...state.propiedades, action.payload]
            }
        case SET_IMAGE:
            return {
                ...state,
                idImagenPropiedad: action.payload
            }
        case API_CALL:
            return {
                ...state,
                imagenesPropiedades: action.payload
            }
        default:
            return;
    }
}