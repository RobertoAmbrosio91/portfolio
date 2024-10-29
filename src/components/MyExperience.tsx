import React from "react";

const expertiseImages = {
  "node.js": "https://nodejs.org/static/images/logo.svg",
  react: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  "react native": "https://reactnative.dev/img/header_logo.svg",
  java: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
  javascript:
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  python: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
  mongo: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
  sql: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg",
  typescript:
    "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
  expo: "https://global.discourse-cdn.com/business5/uploads/expo/original/3X/c/0/c09dc50fadab2d8f672a7b01c1063337b870450f.png",
  aws: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
  bootstrap:
    "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
  firebase: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
};

const ExpertiseImages = () => {
  return (
    <div className="expertiseImagesContainer">
      <div className="expertiseImagesWrapper">
        {Object.entries(expertiseImages).map(([key, src]) => (
          <div key={key} className="expertiseImage">
            <img src={src} alt={key} title={key} />
            <p>{key}</p>
          </div>
        ))}
        {Object.entries(expertiseImages).map(([key, src]) => (
          <div key={`${key}-duplicate`} className="expertiseImage">
            <img src={src} alt={key} title={key} />
            <p>{key}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const MyExperience = () => {
  return (
    <div className="myExperienceContainer" id="expertise">
      <h1 className="expertiseHeading">My Expertise</h1>
      <ExpertiseImages />
    </div>
  );
};

export default MyExperience;
