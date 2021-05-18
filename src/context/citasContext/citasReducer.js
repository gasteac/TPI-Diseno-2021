import { 
    OBTENER_CITAS,
    CITAS_SELECCIONADAS
 } from "../types";

export default (state, action) => {
    switch (action.type) {
        case CITAS_SELECCIONADAS:
            return {
                ...state,
                citasSeleccionadas: [...action.payload]
            }
        default:
            return state;
    }
}