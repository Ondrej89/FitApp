import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_circles from "../../assets/hero_image_back.png";
import NumberCounter from "number-counter";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="blur heroBlur"></div>
      <div className="leftHero">
        <Header />
        <div className="heroText">
          <div>
            <span className="strokeText">Shape </span>
            <span>Your</span>
            <div>
              <span>Ideal Body</span>
            </div>
            <div className="descText">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            </div>
          </div>
        </div>
        <div className="cards">
          <div>
            <span>
              <NumberCounter preFix="+" end={140} start={100} delay="4" />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter preFix="+" end={1013} start={700} delay="4" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter preFix="+" end={60} start={20} delay="4" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>
        <div className="buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="rightHero">
        <button className="btn">Join Now</button>
        <img src={hero_image} alt="" className="heroImage" />
        <img src={hero_circles} alt="" className="heroCircles" />
      </div>
    </div>
  );
};

export default Hero;
