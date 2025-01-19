import styled from "styled-components";
import barcode from "../images/barcode.png";

const LastPageBackground = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(to bottom, #f5e3cb, #b084cc);
  border-radius: 10px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  /* 적응형 높이 */
  @media (max-width: 768px) {
    height: 100vh;
  }

  /* 오른쪽 하단에 바코드 이미지 추가 */
  &::after {
    content: "";
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 100px;
    height: 100px;
    background-image: url(${barcode});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.8;
  }
`;

// 글을 위한 스타일
const PoemText = styled.div`
  font-family: "Georgia", serif;
  font-style: italic;
  font-size: 24px;
  color: #4a1f64;
  text-align: center;
  line-height: 1.6;
  max-width: 70%; /* 최대 너비 제한 */
  margin: 20px 0;

  @media (max-width: 768px) {
    font-size: 18px;
    max-width: 90%;
  }

  span {
    font-size: 18px;
    color: #6a4c93;
    margin-top: 10px;
    display: block;
  }
`;

const LastCoverPage = () => {
  return (
    // 적용
    <LastPageBackground>
      <PoemText>
        "Be the change that you wish to see in the world."
        <span> – Mahatma Gandhi</span>
      </PoemText>
    </LastPageBackground>
  );
};
export default LastCoverPage;
