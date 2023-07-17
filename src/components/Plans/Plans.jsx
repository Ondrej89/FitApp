import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData.js";
import whiteTick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="plans" id="plans">
      <div className="blur plansBlur1"></div>
      <div className="blur plansBlur2"></div>
      <div className="plansHeder">
        <span className="strokeText">Ready to </span>
        <span>start your </span>
        <span className="strokeText">journey?</span>
      </div>
      <div className="plansCards">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>{plan.price}</span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div className="benifites">
              <span>See more benefites -></span>
              <button className="btn">Join Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
