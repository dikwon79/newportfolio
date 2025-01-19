import styled from "styled-components";

// 교과서 커버 배경 설정
const CoverBackground = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(to bottom, #f5e3cb, #b084cc);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const TitleContainer = styled.div`
  padding: 30px 40px;
  border-radius: 10px;
  max-width: 600px;
  text-align: center;
  margin-bottom: 20px;

  position: fixed;
  right: 20px;
  bottom: 200px;

  @media (max-width: 768px) {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Horizontally centers the content */
    align-items: center; /* Vertically centers the content */
    top: 50%;
    left: 50%;
    transform: translate(
      -50%,
      -50%
    ); /* Moves the element to the exact center */
    padding: 20px 30px;
    width: 80%; /* Adjust width for mobile */
    margin: 0; /* Remove margin */
    height: auto;
  }
`;

// 제목 스타일
const MainTitle = styled.h1`
  font-size: 3rem;
  font-family: "Georgia", serif;
  font-weight: bold;
  color: white;
  margin: 0;
  letter-spacing: 1.2px;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

// 부제목 스타일
const SubTitle = styled.h2`
  font-size: 1.5rem;
  font-family: "ROBOTO", sans-serif;
  font-weight: 700;
  color: #595959;
  margin-top: 10px;
  letter-spacing: 0.8px;
  text-align: right;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Cover = () => {
  return (
    <CoverBackground>
      <TitleContainer>
        <MainTitle>PORTFOLIO</MainTitle>
        <SubTitle>Dongil Kwon</SubTitle>
      </TitleContainer>
    </CoverBackground>
  );
};

export default Cover;
