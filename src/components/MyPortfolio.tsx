import React from "react";
import NooskImage from "../images/noosk_app_icon.png";
import AmicoImage from "../images/amico_app_icon.png";
import EcommerceImage from "../images/e-commerce.jpg";
import "../styles/MyPortfolio.scss";
const projects: any[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
    image: EcommerceImage,
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
    githubUrl: "https://github.com/RobertoAmbrosio91/MERN-E-Commerce",
  },
  {
    id: 2,
    title: "Noosk",
    description: "Social Media Application for knowledge sharing",
    image: NooskImage,
    technologies: [
      "React Native",
      "JavaScript",
      "TypeScript",
      "Expo eas",
      "Firebase",
      "MongoDB",
      "AWS",
    ],
    githubUrl: "https://github.com/RobertoAmbrosio91/noosk-frontEnd",
  },
  {
    id: 3,
    title: "Amico",
    description:
      "Social Media Application and Shared Album for personal events memories",
    image: AmicoImage,
    technologies: [
      "React Native",
      "JavaScript",
      "TypeScript",
      "Expo eas",
      "Firebase",
      "MongoDB",
      "AWS",
    ],
    githubUrl: "https://github.com/RobertoAmbrosio91/Amico-frontend",
  },
];

const MyPortfolio = () => {
  return (
    <div className="myPortfolioContainer" id="portfolio">
      <h2 className="portfolio-title">My Portfolio</h2>
      <div className="cardsContainer">
        {projects.map((project) => (
          <CardComponent
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubLink={project.githubUrl}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};

type Props = {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  image: string;
};

const CardComponent: React.FC<Props> = ({
  title,
  description,
  technologies,
  githubLink,
  image,
}) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="Project Preview" className="card-image" />
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <div className="tech-stack">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-item">
              {tech}
            </span>
          ))}
        </div>
        <div className="card-actions">
          <a
            href={githubLink}
            className="github-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
