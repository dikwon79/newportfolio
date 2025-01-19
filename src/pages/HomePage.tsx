import styled from "styled-components";
import developer from "../images/coder.jpeg";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import email from "../images/email.png";

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border-left: 1px solid #a263c9;
  background: linear-gradient(to bottom, #b084cc, #8fbed6);
  box-sizing: border-box; /* 패딩 포함 */
  padding: 5px;
`;

const OuterBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%; /* 전체 화면 너비의 80% */
  height: 95%; /* 전체 화면 높이의 80% */
  border: 2px solid #5a25b0; /* 외곽선 */
  border-radius: 10px;
  overflow: hidden; /* 부모 영역 넘치지 않도록 */
  @media (max-width: 768px) {
    overflow-y: scroll;
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
const TopBox = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: white;
  padding-top: 1rem;
  border-bottom: 2px solid #5a25b0;
  @media (max-width: 768px) {
    padding-top: 60px;
    padding-top: 0.3rem;
  }
`;

const TopTitle = styled.div`
  position: fixed;
  font-family: "Georgia", serif;
  top: 20px;
  left: 50px;
  font-size: 3rem;
  color: #5a25b0;
  font-weight: bold;
  @media (max-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

const StyledTitleText = styled.div`
  font-size: 1rem; /* 폰트 크기 */
  font-weight: 400; /* 기본 폰트 굵기 */
  color: #5a25b0; /* 글자 색상 */
  text-align: left; /* 가운데 정렬 */
  line-height: 1.5; /* 줄 간격 */
  margin: 0 20px; /* 왼쪽과 오른쪽에 여백 추가 */
  padding: 10px;
  font-family: "Poppins", sans-serif; /* Google Fonts 적용 */
`;
const BottomBox = styled.div`
  flex: 3;
  display: flex;
  flex-direction: row; /* Default to row for larger screens */
  /* Enable vertical scrolling if content overflows */

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto; /* 부모 높이가 자동으로 자식 콘텐츠에 맞게 조정되도록 설정 */
  }
`;

const SubBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e8e1f7;
  font-size: 1.2rem;
  font-weight: bold;
  color: #444;
  @media (min-width: 768px) {
    &:not(:last-child) {
      border-right: 2px solid #5a25b0;
    }
  }

  @media (max-width: 768px) {
    /* 모바일에서는 경계선 완전히 제거 */
    border-right: none;
    &:not(:last-child) {
      border-bottom: none; /* 경계선이 필요한 경우 아래로 설정 */
    }
    height: auto;
    flex-grow: 1; /* 남는 부모 높이를 자식 콘텐츠에 배분 */
  }
`;

const ProfilePic = styled.img`
  width: 100%;
  height: 100%;
`;

const SocialsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* 세로 중심 정렬 */
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
const SocialIcon2 = styled.img`
  width: 65px;
  height: 65px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const SubBoxContent = styled.div`
  position: relative; /* 부모 요소가 콘텐츠를 포함하도록 설정 */
  width: 100%;
  height: auto; /* 부모 안에서 콘텐츠에 맞게 높이 조정 */
  display: flex; /* 자식 요소 배치 정렬 */
  justify-content: space-between; /* 상단(Dongil)과 하단(Kwon)을 공간에 배치 */
  flex-direction: column; /* 세로로 배치 */
  padding: 0px 10px;
  @media (max-width: 768px) {
    padding: 5% 20%;
  }
`;

const LargeText = styled.span`
  font-size: 3rem;
  font-weight: bold;
  color: #5a25b0; /* 첫 글자 색상 */
`;

const DongilText = styled.div`
  display: flex;
  gap: 5px;
  font-size: 1.5rem;
  align-items: center;
`;

const NormalTextDongil = styled.span`
  position: relative;
  font-size: 2rem; /* 나머지 글자 크기 */
  font-weight: 800;
  color: #444; /* 글자 색상 */
  top: 5px; /* 세로 위치 조정 */
  left: -5px; /* 가로 위치 조정 */
`;

const KwonText = styled.div`
  display: flex;
  gap: 5px;
  font-size: 1.5rem;
  align-items: center;
  align-self: flex-end;
`;

const NormalTextKwon = styled.span`
  position: relative;
  font-size: 2rem; /* 나머지 글자 크기 */
  font-weight: 800;
  color: #444; /* 글자 색상 */
  top: 7px; /* 세로 위치 조정 */
  right: 5px; /* 가로 위치 조정 */
`;
function HomePage() {
  return (
    <HomeContainer>
      <OuterBox>
        <HeaderBox>
          <HeaderTitle>Profile</HeaderTitle>
        </HeaderBox>
        {/* 상단 박스 */}
        <TopBox>
          <StyledTitleText>
            - Computer Systems graduate with hands-on experience in software
            development, logistics optimization, and UI/UX design. <br />
            - Proven ability to adapt quickly to new technologies, demonstrated
            by building efficient inventory management and barcode scanning
            systems. <br />
            - Passionate about leveraging technical expertise to create
            innovative solutions and drive impactful software projects. <br />
          </StyledTitleText>
        </TopBox>

        {/* 하단 박스 */}
        <BottomBox>
          <SubBox>
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
              <SocialIcon2
                src={email}
                alt="Email"
                onClick={() =>
                  (window.location.href = "mailto:your-email@example.com")
                }
              />
            </SocialsContainer>
          </SubBox>
          <SubBox>
            <ProfilePic src={developer} alt="Dongil" />
          </SubBox>
          <SubBox>
            <SubBoxContent>
              <DongilText>
                <LargeText>D</LargeText>
                <NormalTextDongil>ongil</NormalTextDongil>
              </DongilText>
              <KwonText>
                <LargeText>K</LargeText>
                <NormalTextKwon>won</NormalTextKwon>
              </KwonText>
            </SubBoxContent>
          </SubBox>
        </BottomBox>
      </OuterBox>
    </HomeContainer>
  );
}

export default HomePage;
