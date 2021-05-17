import { ELIMINAR_CLIENTE, CLIENTES_SELECCIONADOS } from "../types";

export default (state, action) => {
  switch (action.type) {
    case CLIENTES_SELECCIONADOS:
      return {
        ...state,
        clientesSeleccionados: action.payload,
      };
    default:
      return state;
  }
};
