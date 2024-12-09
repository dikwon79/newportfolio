import React from "react";
import "../styles/ProjectsPage.css";

const projects = [
  {
    title: "Inventory Management System",
    description:
      "A custom solution developed for a logistics center to improve data processing accuracy.",
    link: "#",
  },
  {
    title: "React Portfolio Website",
    description:
      "This portfolio website showcasing my skills and projects using React and FlipPage.",
    link: "#",
  },
  {
    title: "Automated Trading App",
    description:
      "A Python-based app integrating real-time market data and automation logic.",
    link: "#",
  },
];

function ProjectsPage() {
  return (
    <div className="projects-page">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
