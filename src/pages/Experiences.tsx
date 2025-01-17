import { useState } from "react";
import styled from "styled-components";

const ExperienceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border-left: 1px solid #a263c9;
  background: linear-gradient(to bottom, #8fbed6, #b084cc);
  box-sizing: border-box; /* 패딩 포함 */
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

const HeaderBox = styled.div`
  flex: 1.35;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white; /* 흰색 배경 */
`;
const HeaderTitle = styled.div`
  position: fixed;
  font-family: "Georgia", serif; /* 심플한 교과서 느낌의 폰트 */
  top: 20px; /* 상단에서 3px 만큼 아래로 이동 */
  left: 50px; /* 왼쪽에서 10px 만큼 오른쪽으로 이동 */
  font-size: 3rem;

  color: #5a25b0;

  font-weight: bold;
`;
const TopsubBox = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border-bottom: 2px solid #5a25b0;
  padding-left: 1rem;
`;

const BottomBox = styled.div`
  flex: 2;
  display: flex;
  flex-direction: row;
`;

const SubBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e8e1f7;
  font-size: 1.5rem;
  font-weight: bold;
  color: #444;
  cursor: pointer;
  text-align: center;
  padding: 10px;

  &:not(:last-child) {
    border-right: 2px solid #5a25b0;
  }

  &:hover {
    background-color: #d3c6f3;
  }
`;
// 경험 항목 타입 정의
interface ExperienceItemInterface {
  title: string;
  company: string;
  duration: string;
  description: string;
}

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
    • As an IT specialist, I managed the entire computer and network infrastructure of the big logistics center.
    • Developed a Warehouse Management System (WMS) using PHP and Delphi, integrating a MySQL database. This system significantly 
     reduced inventory losses(less than 0.5%), decreased employee workload, and enhanced my company's reputation for effective inventory
     management.
    • Notably, the order management department was able to maintain accurate physical and digital inventory records, ensuring optimal stock 
     levels.
    `,
  },
];
// 개별 경험 항목 스타일
const ExperienceItem = styled.div`
  background-color: #fff;
  padding: 0.1rem;
`;

// 회사 이름 스타일
const Company = styled.h3`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 0.5rem;
`;

const Description = styled.div`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.4;
`;
const ExperienceList = styled.ul`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6; /* 줄 간격 */
  text-align: left; /* 왼쪽 정렬 */
  list-style-type: none; /* 불필요한 기본 리스트 스타일 제거 */
  padding: 0; /* 리스트의 기본 패딩 제거 */
  margin: 0; /* 리스트의 기본 마진 제거 */
  font-weight: 700;
  li {
    margin-bottom: 0.5rem; /* 각 리스트 항목 간격 설정 */
  }
  :nth-child(2) {
    text-align: center;
  }
`;

// 설명 텍스트 스타일
const TopDescription = styled.ul`
  font-size: 1rem;
  font-weight: 400;
  color: #5a25b0;
  text-align: left;
  line-height: 1.4;
  margin-top: 10px;
  padding-left: 20px;
  font-family: "Poppins", sans-serif;

  li {
    margin-bottom: 10px;
  }
`;
function ExperiencePage() {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  return (
    <ExperienceContainer>
      <OuterBox>
        {/* 헤더 박스 */}
        <HeaderBox>
          <HeaderTitle>Experience</HeaderTitle>
        </HeaderBox>

        {/* 상단 박스 */}
        <TopsubBox>
          <ExperienceItem>
            <Description>
              <strong>📅</strong> {selectedExperience.duration}
            </Description>

            <Company>
              {selectedExperience.title} - {selectedExperience.company}
            </Company>
            <TopDescription>
              {selectedExperience.description
                .split("•")
                .filter((line) => line.trim() !== "")
                .map((line, index) => (
                  <li key={index}>{line.trim()}</li>
                ))}
            </TopDescription>
          </ExperienceItem>
        </TopsubBox>

        {/* 하단 박스 */}
        <BottomBox>
          {experiences.map((experience, index) => (
            <SubBox
              key={index}
              onMouseEnter={() => setSelectedExperience(experience)}
            >
              <ExperienceList>
                <li>📅 {experience.duration}</li>
                <li>{experience.company}</li>
              </ExperienceList>
            </SubBox>
          ))}
        </BottomBox>
      </OuterBox>
    </ExperienceContainer>
  );
}

export default ExperiencePage;
