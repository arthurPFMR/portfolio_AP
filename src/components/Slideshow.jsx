import React, { useState } from "react";
import getData from "../assets/database/projects.json";

import github from "../assets/images/github.png"

const Slideshow = () => {
  const data = getData;

  const filterImg = data.projects.map((obj) => obj.image);
  const filterDescription = data.projects.map((obj) => obj.description);
  const filterTitle = data.projects.map((obj) => obj.title);
  const filterLink = data.projects.map((obj) => obj.link);

  const [indexProjects, setIndexProjects] = useState({ index: 0 });

  const handleNextBtn = () => {
    if (
      (indexProjects.index >= filterImg.length - 1) &
      (filterDescription.length - 1) &
      (filterLink.length - 1)
    ) {
      return setIndexProjects({
        index: 0,
      });
    } else {
      indexProjects.index++;

      return setIndexProjects({
        index: indexProjects.index,
      });
    }
  };

  const handlePreviousBtn = () => {
    if (indexProjects.index <= 0) {
      return setIndexProjects({
        index:
          (filterImg.length - 1) &
          (filterDescription.length - 1) &
          (filterLink.length - 1),
      });
    } else {
      indexProjects.index--;

      return setIndexProjects({
        index: indexProjects.index,
      });
    }
  };

  return (
    <div className="projects">
      <div className="projectsImgSlide">
        <div className="projectsBtn">
          <button
            className="prevBtn"
            onClick={handlePreviousBtn}
          ></button>
          <button
            className="nextBtn"
            onClick={handleNextBtn}
          ></button>
        </div>
        <img
          className="projectsImg"
          src={filterImg[indexProjects.index]}
          alt={filterTitle[indexProjects.index]}
        />
      </div>
      <div className="projectsText">
        <p>{filterDescription[indexProjects.index]}</p>
        <div className="projectsLink">
          <a href={filterLink[indexProjects.index]}>
            <img src={github} alt="Logo github" />
            <p>Voire le projet sur GitHub</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
