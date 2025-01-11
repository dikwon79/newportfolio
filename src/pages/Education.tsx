import React, { useState } from "react";
import styled from "styled-components";

// 교육 항목 타입 정의
interface EducationItem {
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
  margin: 0.8rem auto;
  padding: 4rem;
  width: 100%;
  height: 100vh;
  max-height: 100vh;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Title = styled.h2`
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

// 교육 목록 컨테이너 스타일
const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

// 개별 교육 항목 스타일
const EducationItem = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

// 항목 제목 스타일
const ItemTitle = styled.h2`
  font-size: 1.8rem;
  color: #007bff;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

// 교육 기관 이름 스타일
const Institution = styled.h3`
  font-size: 1.4rem;
  color: #555;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// 설명 텍스트 스타일
const Description = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
const ReadMoreButton = styled.button`
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ModalHeader = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #007bff;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;

  &:hover {
    color: #000;
  }
`;

// 교육 항목 목록
const education: EducationItem[] = [
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
            <Description>
              {edu.description
                .split("•")
                .filter((line) => line.trim() !== "")
                .map((line, index) => (
                  <div key={index}>• {line.trim()}</div>
                ))}
            </Description>
          </EducationItem>
        ))}
      </EducationList>
    </EducationContainer>
  );
}

export default Education;
