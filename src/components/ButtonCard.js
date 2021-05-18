import React, {useContext} from "react";
import { Link } from "react-router-dom";
import globalContext from "../context/globalContext.js";
import imagenes from './../static/imagenes.js';



const ButtonCard = ({ user, seccion, link, style }) => {
  const GlobalContext = useContext(globalContext);
  const { setActiveNavbarLink } = GlobalContext;
  const img = seccion.replace("R", "").replace(".", "");
  return (
    <Link to={`/${user}/${seccion
      .toLowerCase()
      .replace(" ", "")
      .replace(" ", "")
      .replace("¿", "")
      .replace("/", "")
      .replace('.','')}`}
    onClick={() => setActiveNavbarLink(link)}>
      <div className='btnsuper'>
        <div className="buttonsCard bg-rosa1 btnxd" style={style}>
          <div>
            <img src={imagenes[img]} alt={`${img} logo`} className='mb-1' />
          </div>
          <div className="d-flex my-0" style={{alignContent:'flex-end'}}>
              <h4 style={{color:'white', marginTop:'6px'}}>{seccion}</h4> 
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ButtonCard;

