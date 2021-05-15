import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import globalContext from "../context/globalContext";
import React, { useContext } from "react";

export default function BackButton({ history }) {

    const GlobalContext = useContext(globalContext);
    const {setActiveNavbarLink } = GlobalContext;

    const volver = () => {
        setActiveNavbarLink('link-0');
        // history.goBack();
        // console.log(history);
      };
      
    const user = useAuth(history)

    return (
        <Link to={`/${user}/inicio`}>
            <div className='bg-botoncitoPC mt-3 ml-3' onClick={volver}>← Volver</div>
        </Link>
        
 
    );
}