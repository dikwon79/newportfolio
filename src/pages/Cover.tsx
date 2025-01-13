import styled from "styled-components";

// 교과서 커버 배경 설정
const CoverBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f5f5f5; /* 배경 단색 설정 */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2c2c2c;
  text-align: center;
  flex-direction: column;

  @media (max-width: 768px) {
    height: 50vh;
  }
`;

// 제목 담을 상자 스타일
const TitleContainer = styled.div`
  background-color: #ffffff;
  border: 2px solid #2c2c2c;
  padding: 30px 50px;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
  max-width: 600px;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    padding: 20px 30px;
  }
`;

// 제목 스타일
const MainTitle = styled.h1`
  font-size: 3rem;
  font-family: "Georgia", serif; /* 심플한 교과서 느낌의 폰트 */
  font-weight: bold;
  color: #2c2c2c;
  margin: 0;
  letter-spacing: 1.2px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

// 부제목 스타일
const SubTitle = styled.h2`
  font-size: 1.5rem;
  font-family: "Arial", sans-serif;
  font-weight: 300;
  color: #595959;
  margin-top: 10px;
  letter-spacing: 0.8px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// 하단 장식 선
const BottomLine = styled.div`
  width: 100px;
  height: 4px;
  background-color: #2c2c2c;
  margin-top: 20px;
`;

const Cover = () => {
  return (
    <CoverBackground>
      <TitleContainer>
        <MainTitle>Kwon Dongil</MainTitle> {/* 교과서 제목 */}
        <SubTitle>portfolio</SubTitle> {/* 부제 */}
      </TitleContainer>
      <BottomLine />
    </CoverBackground>
  );
};

export default Cover;
