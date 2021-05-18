import { useContext, useEffect, useState } from "react";
import propiedadesContext from "../../context/contextPropiedades/propiedadesContext";
import Propiedades from "./components/Propiedades";

export default function ListaPropiedades({ history }) {
  const PropiedadesContext = useContext(propiedadesContext);
  const { propiedades } = PropiedadesContext;

  const [propiedadesMostradas, setPropiedadesMostradas] = useState(null)

  // const GlobalContext = useContext(globalContext);
  // const { filter } = GlobalContext;
  // const {
  //   nombre,
  //   precioMayor,
  //   precioMenor,
  //   tipo,
  //   ubicacion,
  //   habitaciones,
  //   baños,
  //   m2TotalesMayor,
  //   m2TotalesMenor,
  // } = filter;

  useEffect(() => {
    if(propiedades) {
      setPropiedadesMostradas(propiedades)
    }
  }, [propiedades])
  return (
    <>
      <Propiedades propiedades={propiedadesMostradas} history={history} setPropiedadesMostradas={setPropiedadesMostradas}/>
    </>
  );
}
