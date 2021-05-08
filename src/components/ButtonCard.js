import React from "react";
import { Link } from "react-router-dom";
import imagenes from './../static/imagenes.js';


const ButtonCard = ({ user, seccion }) => {
  return (
    <div className="">
      <div className="buttonsCard bg-rosa1">
        <div>
          <img src={imagenes[seccion]} alt="agenda logo" />
        </div>
        <div className="">
          <Link to={`/${user}/${seccion}`}>
            <h4>{seccion}</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ButtonCard;

