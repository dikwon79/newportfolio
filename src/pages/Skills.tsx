import React from "react";
import styled from "styled-components";

const SkillsContainer = styled.section`
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
  overflow-y: auto;
  overflow-x: hidden;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 13%;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
  /* 화면 높이가 작은 경우 */
  @media (max-height: 1000px) {
    margin-bottom: 5%;
  }
`;

const CategoryBox = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0.5rem; /* 여백 증가 */
  margin-bottom: 7%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%; /* 부모 요소에 맞춤 */
  @media (max-height: 1000px) {
    margin-bottom: 2%;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(90px, 1fr)); /* 크기 조절 */
  gap: 0.5rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
    grid-template-columns: repeat(
      auto-fit,
      minmax(80px, 1fr)
    ); /* 최소 크기 더 줄임 */
  }
`;

const SkillCard = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 0.5rem;
  text-align: center;
  font-size: 0.8rem; /* 줄인 크기 */
  font-weight: 500;
  color: #555;

  @media (max-width: 768px) {
    font-size: 0.7rem; /* 모바일에서 더 작게 */
  }
`;

const Highlight = styled.span`
  color: #007bff;
  font-weight: bold;
`;

const skillsData = [
  {
    category: "Languages",
    skills: [
      "Python",
      "Delphi",
      "Java",
      "C#",
      "C",
      "JavaScript",
      "TypeScript",
      "R",
      "Flutter",
    ],
  },
  {
    category: "Web & Mobile",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "PHP",
      "jQuery",
      "Tailwind CSS",
    ],
  },
  {
    category: "Database",
    skills: ["MySQL", "MongoDB", "Firebase"],
  },
  {
    category: "Tools & Libraries",
    skills: [
      "Kubernetes",
      "Docker",
      "Swagger",
      "Pandas",
      "TensorFlow",
      "PyTorch",
    ],
  },
  {
    category: "Methodologies",
    skills: [
      "Agile process",
      "OOP",
      "Microservices",
      "Git",
      "Trello",
      "Rest API",
    ],
  },
];

const SkillsSection = () => {
  return (
    <SkillsContainer>
      <SectionTitle>
        <Highlight>My Skills</Highlight>
      </SectionTitle>
      {skillsData.map((section) => (
        <CategoryBox key={section.category}>
          <CategoryTitle>{section.category}</CategoryTitle>
          <SkillsGrid>
            {section.skills.map((skill) => (
              <SkillCard key={skill}>{skill}</SkillCard>
            ))}
          </SkillsGrid>
        </CategoryBox>
      ))}
    </SkillsContainer>
  );
};

export default SkillsSection;
