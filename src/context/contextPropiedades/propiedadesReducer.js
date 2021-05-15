import {
  MERGE_PROPIEDAD_IMAGEN,
  UPDATE_PROPIEDADES,
  PROPIEDAD_SELECCIONADA,
  ADD_PROPIEDAD,
  DELETE_PROPIEDAD,
  SET_IMAGE,
  API_CALL,
  GET_PROPIEDAD_NOMBRE,
  GET_PROPIEDAD_TIPO,
  GET_PROPIEDAD_PRECIO,
  GET_PROPIEDAD_UBICACION,
} from "../types";

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case MERGE_PROPIEDAD_IMAGEN:
      return {
        ...state,
        propiedades: state.propiedades.map((propiedad, i) => ({
          ...propiedad,
          imagen: state.imagenesPropiedades[i]?.largeImageURL,
        })),
      };
    case UPDATE_PROPIEDADES:
      return {
        ...state,
        propiedades: state.propiedades.map(propiedad => {
          if(propiedad._id === action.payload._id) {
            return action.payload
          } else {
            return propiedad
          }
        }),
      };
    case PROPIEDAD_SELECCIONADA:
      return {
        ...state,
        propiedadSeleccionada: state.propiedades.filter(
          (propiedad) => propiedad._id == action.payload
        )[0],
      };
    case ADD_PROPIEDAD:
      return {
        ...state,
        propiedades: [...state.propiedades, action.payload],
      };
    case DELETE_PROPIEDAD:
        return {
            ...state,
            propiedades: state.propiedades.filter(propiedad => propiedad._id !== action.payload._id)
        }
    case SET_IMAGE:
      return {
        ...state,
        idImagenPropiedad: action.payload,
      };
    case API_CALL:
      return {
        ...state,
        imagenesPropiedades: action.payload,
      };
    case GET_PROPIEDAD_NOMBRE:
      const regexNombre = new RegExp(action.payload, "gi");
      return {
        ...state,
        propiedadesFiltradas: state.propiedades.filter((propiedad) =>
          regexNombre.test(propiedad.DatosDelInmueble.tituloPropiedad)
        ),
      };
    case GET_PROPIEDAD_TIPO:
      const regexTipo = new RegExp(action.payload, "gi");
      return {
        ...state,
        propiedadesFiltradas: state.propiedades.filter((propiedad) =>
          regexTipo.test(propiedad.DatosDelInmueble.tipo)
        ),
      };
    case GET_PROPIEDAD_PRECIO:
      return {
        ...state,
        propiedadesFiltradas: state.propiedades.filter(
          (propiedad) =>
            propiedad.DatosDelInmueble.precio > action.payload.min &&
            propiedad.DatosDelInmueble.precio < action.payload.max
        ),
      };
    case GET_PROPIEDAD_UBICACION:
      const regexUbicacion = new RegExp(action.payload, "gi");
      return {
        ...state,
        propiedadesFiltradas: state.propiedades.filter((propiedad) =>
          regexUbicacion.test(propiedad.DatosDelInmueble.localidad)
        ),
      };
    default:
      return;
  }
};
