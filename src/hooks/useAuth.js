import { useContext, useEffect } from "react";
import globalContext from "../context/globalContext";

const useAuth = (history) => {
  const GlobalContext = useContext(globalContext);
  const { user, userLogin } = GlobalContext;


  useEffect(() => {
    const usuarioLocalStorage = localStorage.getItem('user')
    if (usuarioLocalStorage) {
      userLogin(usuarioLocalStorage)
    } else {
      history.push('/')
      userLogin('')
    }
    // eslint-disable-next-line
  }, [user]);
  return user;
};

export default useAuth;
