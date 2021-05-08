import React, {useContext} from "react";
import { Link } from "react-router-dom";
import globalContext from "../context/globalContext.js";
import imagenes from './../static/imagenes.js';



const ButtonCard = ({ user, seccion, link }) => {
  const GlobalContext = useContext(globalContext);
  const { setActiveNavbarLink } = GlobalContext;
  return (
    <Link to={`/${user}/${seccion}`} onClick={() => setActiveNavbarLink(link)}>
      <div className="" style={{}}>
        <div className="buttonsCard bg-rosa1">
          <div>
            <img src={imagenes[seccion]} alt="agenda logo" />
          </div>
          <div className="">
              <h4 style={{color:'white'}}>{seccion}</h4>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ButtonCard;

