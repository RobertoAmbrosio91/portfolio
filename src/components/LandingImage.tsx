import React from "react";
import { Parallax } from "react-scroll-parallax";
import "../styles/App.scss";

const LandingImage = () => {
  return (
    <Parallax
      speed={10}
      translateY={["-100vh", "100vh"]}
      className="MainVideoContainer"
    >
      <video autoPlay loop muted className="backgroundVideo">
        <source src="/background_video.mp4" type="video/mp4" />
      </video>
      <h1 className="myName">Roberto Ambrosio</h1>
      <h2 className="myExpertise">Full Stack Developer | Software Engineer</h2>
    </Parallax>
  );
};

export default LandingImage;
