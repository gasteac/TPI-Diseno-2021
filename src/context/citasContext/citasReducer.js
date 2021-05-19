import { 
    CITAS_SELECCIONADAS
 } from "../types";

 // eslint-disable-next-line
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