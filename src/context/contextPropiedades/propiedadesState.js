import { useEffect, useReducer } from "react";

import propiedadesContext from "../contextPropiedades/propiedadesContext";
import propiedadesReducer from "../contextPropiedades/propiedadesReducer";

import propiedades from "../../assets/12propiedades.json";
import axios from "axios";

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
  GET_PROPIEDAD_UBICACION
} from "../types";

const PropiedadesState = (props) => {
  const initialState = {
    propiedades,
    propiedadSeleccionada: {},
    idImagenPropiedad: 0,
    imagenesPropiedades: [],
    propiedadesFiltradas: [],
  };

  const [state, dispatch] = useReducer(propiedadesReducer, initialState);

  const mergePropiedadImagen = () => {
    dispatch({
      type: MERGE_PROPIEDAD_IMAGEN
    });
  };

  const updatePropiedades = propiedad => {
    dispatch({
      type: UPDATE_PROPIEDADES,
      payload: propiedad
    })
  }



  const seleccionarPropiedad = (id) => {
    dispatch({
      type: PROPIEDAD_SELECCIONADA,
      payload: id,
    });
  };

  const addPropiedad = (propiedad) => {
    dispatch({
      type: ADD_PROPIEDAD,
      payload: propiedad,
    });
  };

  const deletePropiedad = (propiedad) => {
    dispatch({
      type: DELETE_PROPIEDAD,
      payload: propiedad
    })
  }

  const setIdImagen = (id) => {
    dispatch({
      type: SET_IMAGE,
      payload: id,
    });
  };

  const setImagenesPropiedades = (imagenes) => {
    dispatch({
      type: API_CALL,
      payload: imagenes,
    });
  };

  const getPropiedadNombre = (nombre) => {
    dispatch({
      type: GET_PROPIEDAD_NOMBRE,
      payload: nombre,
    });
  };

  const getPropiedadTipo = (tipo) => {
    dispatch({
      type: GET_PROPIEDAD_TIPO,
      payload: tipo,
    });
  };

  const getPropiedadPrecio = valor => {
      dispatch({
          type: GET_PROPIEDAD_PRECIO,
          payload: valor
      })
  }

  const getPropiedadUbicacion = ubicacion => {
      dispatch({
          type: GET_PROPIEDAD_UBICACION,
          payload: ubicacion
      })
  }

  useEffect(() => {
    axios
      .get(
        "https://pixabay.com/api/?key=20807034-598a329be1f2fd78a78a2cb26&q=house"
      )
      .then((res) => {
        setImagenesPropiedades(res.data.hits);
    }).then(
        () => mergePropiedadImagen()
    );
  }, []);

  return (
    <propiedadesContext.Provider
      value={{
        propiedades: state.propiedades,
        propiedadSeleccionada: state.propiedadSeleccionada,
        imagenesPropiedades: state.imagenesPropiedades,
        idImagenPropiedad: state.idImagenPropiedad,
        propiedadesFiltradas: state.propiedadesFiltradas,
        seleccionarPropiedad,
        updatePropiedades,
        setImagenesPropiedades,
        setIdImagen,
        addPropiedad,
        deletePropiedad,
        getPropiedadNombre,
        getPropiedadTipo,
        getPropiedadPrecio,
        getPropiedadUbicacion
      }}
    >
      {props.children}
    </propiedadesContext.Provider>
  );
};

export default PropiedadesState;
