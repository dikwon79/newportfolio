import styled from "styled-components";

// 봉사활동 항목 타입 정의
interface VolunteeringInterface {
  role: string;
  organization: string;
  duration: string;
  description: string;
}

// Styled Components
const VolunteeringContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border-left: 1px solid #a263c9;
  background: linear-gradient(to bottom, #8fbed6, #b084cc);

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
  flex: 0.5;
  display: flex;
  justify-content: left;
  align-items: flex-start;
  background-color: white;
  border-bottom: 2px solid #5a25b0;
  padding-left: 1.5rem;
  @media (max-width: 768px) {
    flex: 0.4;
    justify-content: center; /* 가로 중앙 정렬 */
    align-items: left;
    padding-left: 0;
  }
`;

const TopTitle = styled.div`
  font-family: "Georgia", serif;
  font-size: 3rem; /* 폰트 크기 */
  color: #5a25b0;
  font-weight: bold;
  text-align: center; /* 텍스트 중앙 정렬 */
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

const VolunteeringList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
`;

const VolunteeringItem = styled.div`
  background-color: #e8e1f7;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const RoleAndOrganization = styled.h3`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 0.5rem;
`;

const Description = styled.ul`
  font-size: 1.2rem;
  color: #5a25b0;
  line-height: 1.4;
`;

const Duration = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #5a25b0;
  margin-bottom: 0.5rem;
`;

// 봉사활동 데이터
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
      <OuterBox>
        <TopBox>
          <TopTitle>Volunteering</TopTitle>
        </TopBox>
        <MiddleBox>
          <VolunteeringList>
            {volunteering.map((volunteer, index) => (
              <VolunteeringItem key={index}>
                <Duration>📅 {volunteer.duration}</Duration>
                <RoleAndOrganization>
                  {volunteer.role} - {volunteer.organization}
                </RoleAndOrganization>
                <Description>
                  {volunteer.description
                    .split("•")
                    .filter((line) => line.trim() !== "")
                    .map((line, idx) => (
                      <li key={idx}>{line.trim()}</li>
                    ))}
                </Description>
              </VolunteeringItem>
            ))}
          </VolunteeringList>
        </MiddleBox>
      </OuterBox>
    </VolunteeringContainer>
  );
}

export default Volunteering;
