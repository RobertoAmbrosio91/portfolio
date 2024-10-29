import React from "react";
import image from "../images/me.jpeg";
const AboutMe = () => {
  return (
    <div className="aboutMeContainer" id="about">
      <div className="aboutLeftContainer">
        <img src={image} alt="MyImage" className="myImage" />
      </div>
      <div className="aboutRightContainer">
        <section className="aboutMeSection">
          <h1 className="aboutMe">About Me</h1>
          <h4 className="aboutMeDescription">
            I am a full stack software engineer. I have a passion for people and
            love to tackle complex problems. I am driven to help those I work
            with to see their potential.
          </h4>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
