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

  /* 모바일 스크롤 */
  @media (max-width: 768px) {
    overflow-y: auto;
  }
`;

const HeaderBox = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: left; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  background-color: white;
  padding-left: 1.5rem;

  @media (max-width: 768px) {
    justify-content: center; /* 가로 중앙 정렬 */
    border-bottom: 2px solid #5a25b0;
    padding-left: 0;
  }
`;

const HeaderTitle = styled.div`
  font-family: "Georgia", serif;
  font-size: 3rem; /* 폰트 크기 */
  color: #5a25b0;
  font-weight: bold;
  text-align: center; /* 텍스트 중앙 정렬 */
`;

const TopsubBox = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  background-color: white;
  border-bottom: 2px solid #5a25b0;

  @media (max-width: 768px) {
    /* 모바일에서는 전체 나열 */
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const BottomBox = styled.div`
  flex: 2;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    display: none; /* 모바일에서는 하단 탭 제거 */
  }
`;

const SubBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e8e1f7;
  font-size: 1.1rem;
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

interface ExperienceItemInterface {
  title: string;
  company: string;
  duration: string;
  description: string;
}

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

const ExperienceItem = styled.div`
  margin: 10px 10px;
  padding: 5px;
  font-family: "Poppins", sans-serif;
`;

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

const Content = styled.div`
  margin: 5px 1px;
  padding: 10px;
  background-color: #e8e1f7;
  font-family: "Poppins", sans-serif;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
function ExperiencePage() {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  const isMobile = window.innerWidth <= 768;

  return (
    <ExperienceContainer>
      <OuterBox>
        <HeaderBox>
          <HeaderTitle>Experience</HeaderTitle>
        </HeaderBox>

        <TopsubBox>
          {isMobile ? (
            // 모바일: 모든 경험 목록 나열
            experiences.map((experience, index) => (
              <ExperienceItem key={index}>
                <Description>
                  <strong>📅</strong> {experience.duration}
                </Description>
                <Content>
                  <Company>
                    {experience.title} - {experience.company}
                  </Company>
                  <TopDescription>
                    {experience.description
                      .split("•")
                      .filter((line) => line.trim() !== "")
                      .map((line, idx) => (
                        <li key={idx}>{line.trim()}</li>
                      ))}
                  </TopDescription>
                </Content>
              </ExperienceItem>
            ))
          ) : (
            // 데스크톱: 선택된 내용 표시
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
          )}
        </TopsubBox>

        {!isMobile && (
          <BottomBox>
            {experiences.map((experience, index) => (
              <SubBox
                key={index}
                onMouseEnter={() => setSelectedExperience(experience)}
              >
                <div>
                  <strong>📅</strong> {experience.duration}
                  <br />
                  {experience.company}
                </div>
              </SubBox>
            ))}
          </BottomBox>
        )}
      </OuterBox>
    </ExperienceContainer>
  );
}

export default ExperiencePage;
