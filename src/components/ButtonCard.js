import React from "react";
import Agenda from "../static/images/Agenda.svg";

const ButtonCard = () => {
  return (
    <div className="buttonsCard siimple-card siimple--display-inline-block bg-rosa1">
      <div className="buttonsCard">
        <div>
          <img src={Agenda} alt="agenda logo" />
        </div>
        <div className="textButtonsCard">
          <h4>Agenda</h4>
        </div>
      </div>
    </div>
  );
};

export default ButtonCard;
