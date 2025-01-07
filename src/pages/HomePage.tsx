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
  width: 100%; // 부모 크기 맞춤

  @media (max-width: 768px) {
    padding: 1rem 1rem; // 모바일에서는 여백 조정
    align-items: center;
    flex-direction: column;
    height: auto; // 부모 크기 맞춤
  }
`;
const PicContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 1%;
`;

const ProfilePic = styled.img`
  width: 60%;
  max-width: 380px;
  height: auto;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 70%; // 모바일에서 더 크게
    max-width: 150px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // 모바일에서 중앙 정렬
  text-align: center; // 텍스트 중앙 정렬
  padding: 0.5rem 1rem;

  @media (max-width: 768px) {
    margin-left: 0; // 모바일에서 좌측 마진 제거
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
  flex-direction: row; // 기본 가로 방향
  gap: 1rem;
  margin: 0.5rem 1rem;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column; // 모바일에서는 세로로 배치
    gap: 0.8rem;
  }
`;

const SocialsContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;

  @media (max-width: 768px) {
    gap: 1rem;
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
    width: 25px; // 모바일에서 크기 조정
    height: 25px;
  }
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
  min-height: 100vh; // height 대신 min-height 사용
  background-image: url("");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  @media (max-width: 768px) {
    width: 100vw;
    height: auto; // 모바일에서 height 조정
    padding-top: 5vh; // 화면 상단 여백 추가
  }
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
