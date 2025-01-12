import styled from "styled-components";

const SkillsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: rgb(237, 231, 246);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem; /* 내부 여백 */
  height: 100%; /* 뷰포트 높이에 맞춤 */
  width: 100%; /* 뷰포트 너비에 맞춤 */
  box-sizing: border-box; /* 패딩 포함 크기 계산 */
  overflow-y: auto; /* 내용이 넘칠 경우 스크롤 */
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 2rem; /* 타이틀 아래 여백 조정 */
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const CategoryBox = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%; /* 부모 요소에 맞춤 */
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 0.5rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr)); /* 크기 조정 */
  gap: 0.5rem;
`;

const SkillCard = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 0.5rem;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 500;
  color: #555;

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const Highlight = styled.span`
  color: #007bff;
  font-weight: bold;
`;

const skillsData = [
  {
    category: "🌐Languages",
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
    category: "📱Web & Mobile",
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
    category: "🗄️Database",
    skills: ["MySQL", "MongoDB", "Firebase"],
  },
  {
    category: "🛠️Tools & Libraries",
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
    category: "📋Methodologies",
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
