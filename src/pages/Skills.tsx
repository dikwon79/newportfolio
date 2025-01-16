import styled from "styled-components";

// Styled Components
const SkillContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border-left: 1px solid #a263c9;
  background: linear-gradient(to bottom, #b084cc, #8fbed6);
  box-sizing: border-box;
  padding: 5px;
`;

const OuterBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 95%;
  border: 2px solid #5a25b0;
  border-radius: 10px;
  overflow: hidden;
`;

const TopBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-bottom: 2px solid #5a25b0;
`;

const TopTitle = styled.div`
  position: fixed;
  font-family: "Georgia", serif;
  top: 20px;
  right: 50px;
  font-size: 3rem;
  color: #5a25b0;
  font-weight: bold;
`;

const BottomBox = styled.div`
  flex: 2;
  display: flex;
  flex-direction: row;
`;

const MiddleBox = styled.div`
  flex: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1px;
  border-bottom: 2px solid #5a25b0;
`;

const SubBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #e8e1f7;
  font-size: 1.2rem;
  font-weight: bold;
  color: #444;
  padding: 1rem;

  &:not(:last-child) {
    border-right: 2px solid #5a25b0;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #5a25b0;
  margin-bottom: 1rem;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillItem = styled.span`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10%;
  padding: 0.5rem;
  font-size: 1rem;
  color: #555;
  font-weight: normal;
`;

const skillsData = [
  {
    category: "🌐 Languages",
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
    category: "📱 Web & Mobile",
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
    category: "🗄️ Database",
    skills: ["MySQL", "MongoDB", "Firebase"],
  },
  {
    category: "🛠️ Tools & Libraries",
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
    category: "📋 Methodologies",
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

function Skill() {
  return (
    <SkillContainer>
      <OuterBox>
        {/* 상단 박스 */}
        <TopBox>
          <TopTitle>Skill</TopTitle>
        </TopBox>

        {/* Middle Box */}
        <MiddleBox>
          {skillsData.slice(0, 2).map((section, index) => (
            <SubBox key={index}>
              <CategoryTitle>{section.category}</CategoryTitle>
              <SkillList>
                {section.skills.map((skill, i) => (
                  <SkillItem key={i}>{skill}</SkillItem>
                ))}
              </SkillList>
            </SubBox>
          ))}
        </MiddleBox>

        {/* 하단 박스 */}
        <BottomBox>
          {skillsData.slice(2, 5).map((section, index) => (
            <SubBox key={index}>
              <CategoryTitle>{section.category}</CategoryTitle>
              <SkillList>
                {section.skills.map((skill, i) => (
                  <SkillItem key={i}>{skill}</SkillItem>
                ))}
              </SkillList>
            </SubBox>
          ))}
        </BottomBox>
      </OuterBox>
    </SkillContainer>
  );
}

export default Skill;
