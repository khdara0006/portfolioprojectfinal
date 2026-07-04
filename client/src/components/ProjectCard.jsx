import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      
      <div className="project-image">
        {/* You can add image later */}
        <div className="placeholder">No Image</div>
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>
        <p className="description">{project.description}</p>

        <div className="tech-stack">
          {project.tech.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="buttons">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}

          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;