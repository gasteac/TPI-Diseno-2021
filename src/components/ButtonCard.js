import React from "react";
import { Link } from "react-router-dom";


const ButtonCard = ({ usuario, seccion }) => {


  return (
    <div className="buttonsCard siimple-card siimple--display-inline-block bg-rosa1">
      <div className="buttonsCard">
        <div>
          <img src={`https://i.ibb.co/LxjsYBZ/${seccion}.png`} alt="agenda logo" />
        </div>
        <div className="textButtonsCard">
          <Link to={`/${usuario}/${seccion}`}>
            <h4>{seccion}</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ButtonCard;

