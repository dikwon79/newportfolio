import styled from "styled-components";

// 봉사활동 항목 타입 정의
interface VolunteeringInterface {
  role: string;
  organization: string;
  duration: string;
  description: string;
}

// 컨테이너 스타일
const VolunteeringContainer = styled.div`
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

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 5%;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

// 봉사활동 목록 컨테이너 스타일
const VolunteeringList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

// 개별 봉사활동 항목 스타일
const VolunteeringItem = styled.div`
  background-color: #fff;
  padding: 1rem;
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

// 역할, 기관 스타일
const RoleAndOrganization = styled.h3`
  font-size: 1.4rem;
  color: #007bff;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// 설명 텍스트 스타일
const Description = styled.div`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// 봉사활동 항목 목록
const volunteering: VolunteeringInterface[] = [
  {
    role: "Coding Bootcamp Mentor",
    organization: "SI Lab",
    duration: "Dec 2021 - Present",
    description: `
      • Mentored software engineering students in coding bootcamp programs.
      • Provided career advice and technical guidance to help students achieve their goals.
      • Assisted students in solving technical challenges, improving their coding skills and confidence.
    `,
  },
];

// Volunteering 컴포넌트
function Volunteering() {
  return (
    <VolunteeringContainer>
      <Title>Volunteering</Title>
      <VolunteeringList>
        {volunteering.map((volunteer, index) => (
          <VolunteeringItem key={index}>
            <Description>
              <strong>📅</strong> {volunteer.duration}
            </Description>
            <RoleAndOrganization>
              {volunteer.role} - {volunteer.organization}
            </RoleAndOrganization>
            <Description>
              <ul>
                {volunteer.description
                  .split("•")
                  .filter((line) => line.trim() !== "")
                  .map((line, index) => (
                    <li key={index}>• {line.trim()}</li>
                  ))}
              </ul>
            </Description>
          </VolunteeringItem>
        ))}
      </VolunteeringList>
    </VolunteeringContainer>
  );
}

export default Volunteering;
