import React from "react";

import bioImg from "../assets/images/bioImg.png";

const Description = () => {
  return (
    <div className="description">
      <div className="left">
        <p className="descripionPartOne">DÉVELOPPEUR</p>
        <p className="descripionPartTwo margin">WEB</p>
        <p className="descripionPartThree margin">
          FRONTEND
          <div className="roller">
            <span className="rolltext">
              CONSCIENCIEUX
              <br />
              CRÉATIF
              <br />
              CALME
              <br />
              ÉSPRIT D'ÉQUIPE
              <br />
              <span className="sentence">Sensible à l'UX DESIGN</span>
            </span>
          </div>
        </p>
      </div>
      <div className="right">
        <img src={bioImg} alt="Portrait" />
      </div>
    </div>
  );
};

export default Description;
