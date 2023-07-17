import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData.js";
import RightArrow from "../../assets/rightArrow.png";

const Programs = () => {
  return (
    <div className="programs" id="programs">
      <div className="programsHeder">
        <span className="strokeText">Explore our </span>
        <span>programs </span>
        <span className="strokeText">to shape your body</span>
      </div>
      <div className="programCategories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join">
              <span>Join Now</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
