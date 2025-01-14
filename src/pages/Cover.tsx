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

  // 오른쪽 하단으로 배치
  position: fixed; /* 화면에 고정(스크롤 따라오게) */
  right: 20px; /* 오른쪽 여백 */
  bottom: 200px; /* 아래쪽 여백 */

  @media (max-width: 768px) {
    padding: 20px 30px;
    right: 10px; /* 반응형에서 오른쪽 여백 줄이기 */
    bottom: 10px; /* 반응형에서 아래쪽 여백 줄이기 */
  }
`;

// 제목 스타일
const MainTitle = styled.h1`
  font-size: 3rem;
  font-family: "Georgia", serif; /* 심플한 교과서 느낌의 폰트 */
  font-weight: bold;
  color: white;
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

const Cover = () => {
  return (
    <CoverBackground>
      <TitleContainer>
        <MainTitle>PORTFOLIO</MainTitle> {/* 교과서 제목 */}
        <SubTitle>Dongil Kwon</SubTitle> {/* 부제 */}
      </TitleContainer>
    </CoverBackground>
  );
};

export default Cover;
