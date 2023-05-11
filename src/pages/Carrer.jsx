import React from "react";
// import aboutImg from "../assets/images/time.png";

const Career = () => {
  return (
    <div className="career">
      <h2>PARCOURS</h2>
      <div className="barForTitle"></div>
      <div className="careerContent">
        <div className="careerImg">{/* <img src={aboutImg} alt="" /> */}</div>
        <div className="careerText">
          Je m’appelle Arthur, j’ai 36 ans, titulaire d’un titre RNCP de niveau
          IV Développeur Web. <br /> 
          Après avoir exercé dans diverses métiers (BTP, technicien dans l’événementiel,
          agro-alimentaire) j’ai entrepris une reconversion professionnelle via
          OpenClassrooms afin de me permettre de démarrer une nouvelle carrière
          dans un domaine qui me passionne. <br />
          Dans le soucis de me perfectionner techniquement, en bonnes pratiques et en collaboration agile, 
          je recherche un contrat en alternance en tant que développeur Front End.
        </div>
      </div>
      <h3>HARDSKILLS :</h3>
      <div className="smallBar"></div>
      <div className="skillsValue">
        <div className="valueGraph">
          <div className="HTML">
            <div className="textValue">HTML5</div>
            <svg viewBox="0 0 36 36" className="circle-svg">
              <path
                className="around"
                strokeDasharray="100, 100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              ></path>
              <path
                className="percent"
                strokeDasharray="85, 100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              ></path>
            </svg>
          </div>
        </div>
        <div className="valueGraph">
          <div className="CSS">
            <div className="textValue">CSS3</div>
            <svg viewBox="0 0 36 36" className="circle-svg">
              <path
                className="around"
                strokeDasharray="100, 100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              ></path>
              <path
                className="percent"
                strokeDasharray="75, 100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              ></path>
            </svg>
          </div>
        </div>
        <div className="valueGraph">
          <div className="JS">
            <div className="textValue">JS</div>
            <svg viewBox="0 0 36 36" className="circle-svg">
              <path
                className="around"
                strokeDasharray="100, 100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              ></path>
              <path
                className="percent"
                strokeDasharray="50, 100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              ></path>
            </svg>
          </div>
        </div>
        <div className="valueGraph">
          <div className="REACT">
            <div className="textValue">REACT</div>
            <svg viewBox="0 0 36 36" className="circle-svg">
              <path
                className="around"
                strokeDasharray="100, 100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              ></path>
              <path
                className="percent"
                strokeDasharray="60, 100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
