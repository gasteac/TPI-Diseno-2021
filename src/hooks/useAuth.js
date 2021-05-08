import React, { useContext, useEffect, useState } from "react";
import globalContext from "../context/globalContext";

const useAuth = (history) => {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(null);
  const GlobalContext = useContext(globalContext);
  const { user } = GlobalContext;
  useEffect(() => {
    if (!user) {
      history.push("/");
      setUsuarioAutenticado(null)
    } else {
        setUsuarioAutenticado(user)
    }
  }, [user]);
  return usuarioAutenticado;
};

export default useAuth;
