import styled from "styled-components";
import "../styles/HomePage.css";
import profile_pic from "../images/profile-pic.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";

const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  padding: 2rem;
`;

const PicContainer = styled.div`
  margin-right: 2rem;
`;

const ProfilePic = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TextP1 = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0.5rem 0;
`;

const TextP2 = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
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
`;

const SocialsContainer = styled.div`
  display: flex;
  gap: 1rem;
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
          <TextP1>Hello, I'm dreaming</TextP1>
          <Title>Dongil Kwon</Title>
          <TextP2>Full stack developer</TextP2>
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
          </SocialsContainer>
        </TextContainer>
      </ProfileSection>
    </HomeContainer>
  );
}

export default HomePage;
