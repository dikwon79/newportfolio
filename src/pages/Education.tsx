import React from "react";
import styled from "styled-components";

// 교육 항목 타입 정의
interface EducationItemInterface {
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

// 컨테이너 스타일
const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-color: rgb(237, 231, 246);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: auto;
`;

// 제목 스타일
const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 5%;
  text-align: center;
`;

// 교육 목록 컨테이너 스타일
const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

// 개별 항목 스타일
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

// 기관 이름 스타일
const Institution = styled.h3`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 0.5rem;
`;

// 설명 텍스트 스타일
const Description = styled.div`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.4;
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
const Education: React.FC = () => {
  return (
    <EducationContainer>
      <Title>Education</Title>
      <EducationList>
        {education.map((edu, index) => (
          <EducationItem key={index}>
            <Description>
              <strong>📅</strong> {edu.duration}
            </Description>

            <Institution>
              {edu.degree} - {edu.institution}
            </Institution>

            <Description>{edu.description.slice(0, 200)}...</Description>
          </EducationItem>
        ))}
      </EducationList>
    </EducationContainer>
  );
};

export default Education;
