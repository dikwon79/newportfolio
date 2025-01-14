import { useState } from "react";
import styled from "styled-components";

// 경험 항목 타입 정의
interface ExperienceItemInterface {
  title: string;
  company: string;
  duration: string;
  description: string;
}

// 컨테이너 스타일
const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-color: rgb(237, 231, 246);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  height: 100%;
  width: 100%;
  border-radius: 10px;
  padding: 2rem;
  box-sizing: border-box;
  overflow-y: auto;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 5%;
  text-align: center;
`;

// 경험 목록 컨테이너 스타일
const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

// 개별 경험 항목 스타일
const ExperienceItem = styled.div`
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

// 회사 이름 스타일
const Company = styled.h3`
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

const ReadMoreButton = styled.button`
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
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
  padding: 1.5rem;
  border-radius: 8px;
  max-width: 90%;
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
  font-size: 1.2rem;
  cursor: pointer;
  color: #666;

  &:hover {
    color: #000;
  }
`;

// 경험 항목 목록
const experiences: ExperienceItemInterface[] = [
  {
    title: "Software Engineer",
    company: "Ian logistics(Korea)",
    duration: "Jun 2021 - Present",
    description: `
     • Led the development of a project using PHP and Delphi for a logistics center, enabling label printing, inventory management, and  \
     expiration date tracking. This project has been generating a monthly revenue of $1,000 to me. 
     • This project resulted in a labor cost savings of approximately $3,000 a month and streamlined operations, reducing the average daily \
     working hours from 10 to 7 for the company.   
     • The web page was developed using PHP and JavaScript with MySQL as the database. For label printing, I created a REST API to receive \
     information from the web page and developed a Windows application using Delphi.
    `,
  },
  {
    title: "Software Engineer",
    company: "Hope International",
    duration: "Dec 2020 - Apr 2021",
    description: `
    • Developed a program using C# to consolidate customer orders, generate shipping labels, and issue dispatch instructions to warehouse
     workers. This innovation reduced the time required to generate shipping labels from 20 minutes to just 3 minutes, significantly improving
     operational efficiency.
    • Designed and implemented a Python-based scanning program to address the inefficiency in handling returns for a home shopping
     company. The program digitized the return process, ensuring accurate and systematic management of returned goods.
    • Oversaw all inbound and outbound operations at the Icheon logistics center, ensuring seamless inventory flow and operational efficiency.
    `,
  },
  {
    title: "IT Specialist",
    company: "MH distribution",
    duration: "Jun 2015 - Jul 2021",
    description: `
    • Developed a program using C# to consolidate customer orders, generate shipping labels, and issue dispatch instructions to warehouse
     workers. This innovation reduced the time required to generate shipping labels from 20 minutes to just 3 minutes, significantly improving
     operational efficiency.
    • Designed and implemented a Python-based scanning program to address the inefficiency in handling returns for a home shopping
     company. The program digitized the return process, ensuring accurate and systematic management of returned goods.
    • Oversaw all inbound and outbound operations at the Icheon logistics center, ensuring seamless inventory flow and operational efficiency.
      `,
  },
];

// Experience 컴포넌트
function Experience() {
  const [modalContent, setModalContent] = useState<string | null>(null);

  const openModal = (content: string) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  return (
    <ExperienceContainer>
      <Title>Experiences</Title>
      <ExperienceList>
        {experiences.map((experience, index) => (
          <ExperienceItem key={index}>
            <Description>
              <strong>📅</strong> {experience.duration}
            </Description>

            <Company>
              {experience.title} - {experience.company}
            </Company>
            <Description>{experience.description.slice(0, 200)}...</Description>
            <ReadMoreButton onClick={() => openModal(experience.description)}>
              Read More
            </ReadMoreButton>
          </ExperienceItem>
        ))}
      </ExperienceList>

      {modalContent && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalCloseButton onClick={closeModal}>&times;</ModalCloseButton>
            <ModalHeader>Details</ModalHeader>
            <Description>
              {modalContent
                .split("•")
                .filter((line) => line.trim() !== "")
                .map((line, index) => (
                  <p key={index}>• {line.trim()}</p>
                ))}
            </Description>
          </ModalContent>
        </ModalOverlay>
      )}
    </ExperienceContainer>
  );
}

export default Experience;
