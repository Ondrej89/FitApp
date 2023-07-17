import React from "react";
import "./Footer.css";
import instagram from "../../assets/instagram.png";
import gitHub from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="footerCont">
        <div className="socilas">
          <img src={gitHub} alt="" />
          <img src={instagram} alt="" />
          <img src={linkedin} alt="" />
        </div>
        <div className="blur footerBlur1"></div>
        <div className="blur footerBlur2"></div>
        <div className="footerLogo">
          <img src={logo} alt="" />
        </div>
        <span className="footerDesign">
          all rights reserved - Hercul GYM 2023 <p>@ designed by LoneWolf</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
