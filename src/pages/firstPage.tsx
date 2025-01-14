import styled from "styled-components";

const FirstPageBackground = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(
    to bottom,
    #f5e3cb,
    #b084cc
  ); // 부드러운 배경 그라데이션
  border-radius: 10px;

  @media (max-width: 768px) {
    height: 50vh;
  }
`;

const ContentsContainer = styled.div`
  position: absolute; // 배치 조정을 위해 절대 위치
  top: 30px; // 상단 여백
  right: 30px; // 오른쪽 여백
  text-align: right; // 오른쪽 정렬
  color: white; // 기본 텍스트 색상
`;
const ListContainer = styled.div`
  position: absolute; // 배치 조정을 위해 절대 위치
  top: 70px; // 상단 여백
  left: 30px; // 오른쪽 여백
  text-align: left; // 오른쪽 정렬
  color: #2c2c2c; // 기본 텍스트 색상
`;
const MainTitle = styled.h1`
  font-size: 48px; // 큰 크기
  font-weight: bold;
  margin: 0 0 20px 0; // 제목과 목차 간 여백
  font-family: "Georgia", serif; /* 심플한 교과서 느낌의 폰트 */
`;

const Chapter = styled.div`
  font-family: "Roboto", sans-serif; // 가독성 높은 서체 사용
`;

const ChapterNumber = styled.span`
  font-size: 3.5rem; // 숫자 크게
  font-weight: bold;

  left: -20px;
  color: #5a189a; // 숫자 강조 색상 (보랏빛)
`;

const ChapterTitle = styled.span`
  font-size: 2rem; // 작은 글씨
  font-weight: normal;
  margin-left: 20px; // 숫자와 제목 간 간격
  color: #6d6875; // 부드러운 색상
  text-decoration: underline;
`;

const Contents = () => {
  return (
    <FirstPageBackground>
      <ContentsContainer>
        <MainTitle>Contents</MainTitle>
      </ContentsContainer>
      <ListContainer>
        <Chapter>
          <ChapterNumber>01</ChapterNumber>
          <ChapterTitle>Profile</ChapterTitle>
        </Chapter>
        <Chapter>
          <ChapterNumber>02</ChapterNumber>
          <ChapterTitle>Skill</ChapterTitle>
        </Chapter>
        <Chapter>
          <ChapterNumber>03</ChapterNumber>
          <ChapterTitle>Experience</ChapterTitle>
        </Chapter>
        <Chapter>
          <ChapterNumber>04</ChapterNumber>
          <ChapterTitle>Project</ChapterTitle>
        </Chapter>
        <Chapter>
          <ChapterNumber>05</ChapterNumber>
          <ChapterTitle>Education</ChapterTitle>
        </Chapter>
        <Chapter>
          <ChapterNumber>06</ChapterNumber>
          <ChapterTitle>Volunteering</ChapterTitle>
        </Chapter>
        <Chapter>
          <ChapterNumber>07</ChapterNumber>
          <ChapterTitle>Contact</ChapterTitle>
        </Chapter>
      </ListContainer>
    </FirstPageBackground>
  );
};

export default Contents;
