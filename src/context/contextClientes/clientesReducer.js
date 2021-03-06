import { ELIMINAR_CLIENTE, CLIENTES_SELECCIONADOS } from "../types";

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case ELIMINAR_CLIENTE:
      return {
        ...state,
        clientes: state.clientesSeleccionados.reduce(
          (prev, next) =>
            prev.filter((cliente) => cliente.id !== next.values.id),
          state.clientes
        ),
        clientesSeleccionados: []
      };
    case CLIENTES_SELECCIONADOS:
      return {
        ...state,
        clientesSeleccionados: [...action.payload],
      };
    default:
      return state;
  }
};
