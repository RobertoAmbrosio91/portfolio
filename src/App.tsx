import React from "react";
import "./styles/App.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import Navbar from "./components/Navbar";
import LandingImage from "./components/LandingImage";
import AboutMe from "./components/AboutMe";
import MyExperience from "./components/MyExperience";
import MyPortfolio from "./components/MyPortfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="Wrapper">
      <ParallaxProvider>
        <Navbar />
        <LandingImage />
        <AboutMe />
        <MyPortfolio />
        <MyExperience />
        <Contact />
      </ParallaxProvider>
    </div>
  );
}

export default App;
