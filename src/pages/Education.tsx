import styled from "styled-components";

// 교육 항목 타입 정의
interface EducationItemInterface {
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

// Styled Components
const EducationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border-left: 1px solid #a263c9;
  background: linear-gradient(to bottom, #f5e3cb, #b084cc);

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

const MiddleBox = styled.div`
  flex: 5;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 1px;
  border-bottom: 2px solid #5a25b0;
  padding-top: 0.5rem;
  overflow-y: auto;
`;

const EducationList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
`;

const EducationItem = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const Institution = styled.h3`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 0.5rem;
`;

const Description = styled.ul`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.4;
`;

const Duration = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #5a25b0;
  margin-bottom: 0.5rem;
`;

// 교육 항목 데이터
const education: EducationItemInterface[] = [
  {
    degree: "Diploma in Computer Systems",
    institution: "British Columbia Institute of Technology (BCIT)",
    duration: "Jan 2022 - Jun 2024",
    description: `
      • Completed a rigorous program focused on software development, including courses in Python, JavaScript, and database management.
      • Developed multiple projects involving web and mobile applications, gaining hands-on experience in full-stack development.
      • Collaborated in team projects to design and implement efficient software solutions.
    `,
  },
];

// Education 컴포넌트
function Education() {
  return (
    <EducationContainer>
      <OuterBox>
        <TopBox>
          <TopTitle>Education</TopTitle>
        </TopBox>
        <MiddleBox>
          <EducationList>
            {education.map((edu, index) => (
              <EducationItem key={index}>
                <Duration>📅 {edu.duration}</Duration>
                <Institution>
                  {edu.degree} - {edu.institution}
                </Institution>
                <Description>
                  {edu.description
                    .split("•")
                    .filter((line) => line.trim() !== "")
                    .map((line, index) => (
                      <li key={index}>{line.trim()}</li>
                    ))}
                </Description>
              </EducationItem>
            ))}
          </EducationList>
        </MiddleBox>
      </OuterBox>
    </EducationContainer>
  );
}

export default Education;
