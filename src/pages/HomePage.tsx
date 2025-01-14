import styled from "styled-components";
import developer from "../images/developer.webp";
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
`;

const TopBox = styled.div`
  flex: 3; /* 상단 박스 (2:1 비율로 크게 설정) */
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white; /* 흰색 배경 */
  border-bottom: 2px solid #5a25b0;
`;

const TopTitle = styled.div`
  position: fixed;
  font-family: "Georgia", serif; /* 심플한 교과서 느낌의 폰트 */
  top: 20px; /* 상단에서 3px 만큼 아래로 이동 */
  left: 50px; /* 왼쪽에서 10px 만큼 오른쪽으로 이동 */
  font-size: 3rem;

  color: #5a25b0;

  font-weight: bold;
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
  flex: 2; /* 하단 박스 */
  display: flex;
  flex-direction: row; /* 가로로 배치 */
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

  &:not(:last-child) {
    border-right: 2px solid #5a25b0;
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
  position: relative;
  width: 100%;
  height: 100%;
`;

const LargeText = styled.span`
  font-size: 3rem;
  font-weight: bold;
  color: #5a25b0; /* 첫 글자 색상 */
`;

const DongilText = styled.div`
  position: absolute;
  top: 70px; /* 상단 여백 */
  left: 10px; /* 왼쪽 여백 */
  display: flex;
  align-items: center;
  gap: 1px; /* 첫 글자와 나머지 글자 간격 */
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
  position: absolute;
  bottom: 70px; /* 하단 여백 */
  right: 10px; /* 오른쪽 여백 */
  display: flex;
  align-items: center;
  gap: 1px; /* 첫 글자와 나머지 글자 간격 */
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
        {/* 상단 박스 */}
        <TopBox>
          <TopTitle>Profile</TopTitle>
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
