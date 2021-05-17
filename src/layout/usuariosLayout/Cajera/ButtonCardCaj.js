import React, {useContext} from "react";
import { Link } from "react-router-dom";
import globalContext from "../../../context/globalContext.js";
import imagenes from './../../../static/imagenes.js';



const ButtonCardCaj = ({ user, seccion, link, style }) => {
  const GlobalContext = useContext(globalContext);
  const { setActiveNavbarLink } = GlobalContext;
  return (
    <Link to={`/${user}/${seccion}`} onClick={() => setActiveNavbarLink(link)}>
      <div className='btnsuper'  >
        <div className="buttonsCard bg-rosa1 btnxd" style={style} >
          <div>
            <img src={imagenes[seccion]} alt="agenda logo" style={{marginTop:'15px'}}/>
          </div>
          <div style={{paddingTop:'5px'}}>
              <h4 style={{color:'white'}}>{seccion}</h4> 
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ButtonCardCaj;

