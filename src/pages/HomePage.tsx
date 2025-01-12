import styled from "styled-components";
import profile_pic from "../images/profile-pic.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import email from "../images/email.png";
import AnimatedText from "../components/AnimatedText";

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgb(237, 231, 246);
  overflow: hidden; /* 부모 영역을 넘어가지 않도록 설정 */
`;

const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  box-sizing: border-box; /* 패딩 포함 크기 계산 */
`;

const ProfilePic = styled.img`
  width: 60%;
  max-width: 300px;
  border-radius: 50%;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: black;
  margin: 0.5rem 0;
`;

const Highlight = styled.span`
  color: #007bff;
  font-weight: bold;
`;

const Text = styled.div`
  font-size: 1.3rem;
  color: #555;
  text-align: center;
  margin: 0.5rem 0;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap; /* 작은 화면에서 버튼이 줄바꿈되도록 설정 */
  margin: 1rem 0;
`;

const Btn = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
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
`;

const SocialsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

function HomePage() {
  return (
    <HomeContainer>
      <ProfileSection>
        <ProfilePic src={profile_pic} alt="Dongil" />
        <Title>
          Hi! It's <Highlight>Dongil</Highlight>
        </Title>
        <Text>
          I'm a <AnimatedText text="Full stack developer!!" />
        </Text>
        <Text>I strive to bring innovation to the world through code.</Text>
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
            alt="LinkedIn"
            onClick={() => (window.location.href = "https://linkedin.com/")}
          />
          <SocialIcon
            src={github}
            alt="GitHub"
            onClick={() => (window.location.href = "https://github.com/")}
          />
          <SocialIcon
            src={email}
            alt="Email"
            onClick={() =>
              (window.location.href = "mailto:your-email@example.com")
            }
          />
        </SocialsContainer>
      </ProfileSection>
    </HomeContainer>
  );
}

export default HomePage;
