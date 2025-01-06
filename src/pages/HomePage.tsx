import styled from "styled-components";
import profile_pic from "../images/profile-pic.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import email from "../images/email.png";
import AnimatedText from "../components/AnimatedText";

const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 0.5rem 1rem;

  @media (max-width: 768px) {
    align-items: center; /* 중앙 정렬 */
    margin-left: 0; /* 좌측 마진 제거 */
  }
`;

const PicContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 1%;
`;

const ProfilePic = styled.img`
  width: 60%; /* 부모 크기의 60% */
  max-width: 380px; /* 최대 크기 제한 */
  height: auto; /* 비율 유지 */
  border-radius: 50%; /* 둥글게 */

  @media (max-width: 768px) {
    width: 70%; /* 모바일에서는 크기를 늘림 */
    max-width: 150px;
  }
`;

const Highlight = styled.span`
  color: #007bff; /* 예쁜 파란색 */
  font-weight: bold; /* 강조 */
`;
const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 0.2rem 3.9rem;
  color: #222;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 2rem; /* 작은 화면에서는 크기 줄임 */
    margin: 0.5rem 2rem;
    text-align: center; /* 중앙 정렬 */
  }
`;

const TextP1 = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin: 0.2rem 4rem;

  @media (max-width: 768px) {
    font-size: 1.2rem; /* 글자 크기 조정 */
    margin: 0.5rem 2rem;
    text-align: center; /* 텍스트 중앙 정렬 */
  }
`;

const TextP2 = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: #555;
  line-height: 1.8;
  margin: 0.5rem 4rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 1rem 1.5rem;
    text-align: center;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0.5rem 1rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const SocialsContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const Btn = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease;
  &.btn-color-1 {
    background-color: #007bff;
    color: white;

    &:hover {
      background-color: #0056b3;
    }
  }

  &.btn-color-2 {
    background-color: #28a745;
    color: white;

    &:hover {
      background-color: #218838;
    }
  }
  @media (max-width: 768px) {
    padding: 0.5rem 1rem; /* 크기 축소 */
    font-size: 0.9rem;
  }
`;

const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 25px;
    height: 25px; /* 크기 축소 */
  }
`;

const SocialIcon2 = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 25px;
    height: 25px; /* 크기 축소 */
  }
`;

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;
function HomePage() {
  return (
    <HomeContainer>
      <ProfileSection id="profile">
        <PicContainer>
          <ProfilePic src={profile_pic} alt="Dongil" />
        </PicContainer>
        <TextContainer>
          <Title>
            Hi! It's <Highlight>Dongil</Highlight>
          </Title>
          <TextP1>
            I'm a <AnimatedText text="Full stack developer!!" />
          </TextP1>
          <TextP2>
            I strive to bring innovation to the world through code.
          </TextP2>
        </TextContainer>
        <BtnContainer>
          <Btn
            className="btn-color-2"
            onClick={() => window.open("./assets/resume-dongil.pdf")}
          >
            Download CV
          </Btn>
          <Btn
            className="btn-color-1"
            onClick={() => (window.location.href = "./#contact")}
          >
            Contact Info
          </Btn>
        </BtnContainer>
        <SocialsContainer>
          <SocialIcon
            src={linkedin}
            alt="My LinkedIn profile"
            onClick={() => (window.location.href = "https://linkedin.com/")}
          />
          <SocialIcon
            src={github}
            alt="My GitHub profile"
            onClick={() => (window.location.href = "https://github.com/")}
          />
          <SocialIcon2
            src={email}
            alt="My email"
            onClick={() => (window.location.href = "https://github.com/")}
          />
        </SocialsContainer>
      </ProfileSection>
    </HomeContainer>
  );
}

export default HomePage;
