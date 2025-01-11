import React from "react";
import styled from "styled-components";

const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-color: rgb(237, 231, 246);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0.8rem auto;
  padding: 4rem;
  width: 100%;
  height: 100vh;
  max-height: 100vh;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 13%;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
  @media (max-height: 1000px) {
    margin-bottom: 5%;
  }
`;

const ProjectCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  width: 100%;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ProjectDetails = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ProjectDate = styled.span`
  font-size: 0.9rem;
  color: #999;
`;

const TechStack = styled.div`
  margin-top: 1rem;
  font-size: 0.9rem;
  font-weight: bold;
  color: #333;

  & span {
    background-color: #eef;
    border-radius: 4px;
    padding: 0.3rem 0.6rem;
    margin-right: 0.5rem;
    display: inline-block;
  }
`;

const projectsData = [
  {
    title: "EagleEyes",
    description:
      "Created mapping tool with a natural language interface that lets us perform basic mapping functions.",
    techStack: ["Dart", "Flutter"],
    duration: "04/2024 ~ 05/2024",
  },
  {
    title: "Properate",
    description:
      "UI redesign with clearer design based on the features of the existing homepage.",
    techStack: ["nuxt.js", "Vue.js", "Tailwind CSS", "HTML"],
    duration: "04/2023 ~ 05/2023",
  },
];

const ProjectsSection = () => {
  return (
    <ProjectsContainer>
      <SectionTitle>Projects</SectionTitle>
      {projectsData.map((project, index) => (
        <ProjectCard key={index}>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDetails>{project.description}</ProjectDetails>
          <TechStack>
            {project.techStack.map((tech, idx) => (
              <span key={idx}>{tech}</span>
            ))}
          </TechStack>
          <ProjectDate>{project.duration}</ProjectDate>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
};

export default ProjectsSection;
