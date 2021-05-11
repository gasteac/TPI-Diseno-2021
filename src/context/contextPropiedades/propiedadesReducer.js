import {
    UPDATE_PROPIEDADES,
    PROPIEDAD_SELECCIONADA
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
        default:
            return;
    }
}