import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_umj6kwc",
        "template_go9egla",
        form.current,
        "4j2Bi-s-DJ05bREji"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="join">
      <div className="joinLeft">
        <hr />
        <div>
          <span className="strokeText">Ready to </span>
          <span>level up</span>
        </div>
        <div>
          <span>your body </span>
          <span className="strokeText">with us?</span>
        </div>
      </div>
      <div className="joinRight">
        <form ref={form} className="emailContainer" onSubmit={sendEmail}>
          <input
            className="input"
            type="email"
            name="user_email"
            placeholder="your email"
          />
          <button className="btn joinBtn">Join now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
