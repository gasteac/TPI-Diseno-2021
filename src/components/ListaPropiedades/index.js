import { useContext, useEffect, useState } from "react";
import propiedadesContext from "../../context/contextPropiedades/propiedadesContext";
import globalContext from "../../context/globalContext";
import Propiedades from "./components/Propiedades";

export default function ListaPropiedades({ history }) {
  const PropiedadesContext = useContext(propiedadesContext);
  const { propiedades } = PropiedadesContext;

  const [propiedadesMostradas, setPropiedadesMostradas] = useState(null)

  const GlobalContext = useContext(globalContext);
  const { filter } = GlobalContext;
  const {
    nombre,
    precioMayor,
    precioMenor,
    tipo,
    ubicacion,
    habitaciones,
    baños,
    m2TotalesMayor,
    m2TotalesMenor,
  } = filter;

  useEffect(() => {
    if(propiedades) {
      setPropiedadesMostradas(propiedades)
    }
  }, [propiedades])


  // let propiedadesFiltradas;

  // useEffect(() => {
  //    propiedadesFiltradas = propiedades.filter((propiedad) => {
  //     const nombreBool =
  //       propiedad.DatosDelInmueble.tituloPropiedad
  //         .toLowerCase()
  //         .includes(nombre.toLowerCase()) || nombre.length === 0;
  //     const precioBool =
  //       propiedad.DatosDelInmueble.precio < precioMayor &&
  //       propiedad.DatosDelInmueble.precio > precioMenor;
  //     const tipoBool =
  //       tipo === propiedad.DatosDelInmueble.tipo || tipo.length === 0;
  //     const ubicacionBool =
  //       propiedad.DatosDelInmueble.direccion
  //         .toLowerCase()
  //         .includes(ubicacion.toLowerCase()) || ubicacion.length === 0;
  //     const habitacionesBool =
  //       Number(habitaciones) === propiedad.DatosDelInmueble.habitaciones ||
  //       Number(habitaciones) === 0;
  //     const bañosBool =
  //       Number(baños) === propiedad.DatosDelInmueble.banios ||
  //       Number(baños) === 0;
  //     const m2Bool =
  //       propiedad.DatosDelInmueble.metrosCuadrados < m2TotalesMayor &&
  //       propiedad.DatosDelInmueble.metrosCuadrados > m2TotalesMenor;

  //     return (
  //       nombreBool &&
  //       precioBool &&
  //       tipoBool &&
  //       ubicacionBool &&
  //       habitacionesBool &&
  //       bañosBool &&
  //       m2Bool
  //     );
  //   });
  // }, [propiedades]);
  return (
    <>
      <Propiedades propiedades={propiedadesMostradas} history={history} setPropiedadesMostradas={setPropiedadesMostradas}/>
    </>
  );
}
