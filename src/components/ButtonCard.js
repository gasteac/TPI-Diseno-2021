import React from "react";
import { Link } from "react-router-dom";
import imagenes from './../static/imagenes.js';


const ButtonCard = ({ user, seccion }) => {
  return (
    <Link to={`/${user}/${seccion}`}>
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

