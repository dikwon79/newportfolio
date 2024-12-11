import FlipPage from "react-flip-page";
import PageContent from "./PageContent";
import styled from "styled-components";
import HomePage from "../pages/HomePage";
import background from "../images/bookfirstpage.png";
import AboutPage from "../pages/AboutPage";
import Skills from "../pages/Skills";
import Experience from "../pages/Experiences";
const FirstPageBackground = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${background});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;

const pages = [
  { title: "fistpage", component: <FirstPageBackground /> },
  { title: "Home", component: <HomePage /> },
  { title: "SKILL", component: <Skills /> },
  { title: "Experience", component: <Experience /> },
  { title: "About", component: <AboutPage /> },
  { title: "Projects", component: <PageContent pageName="Projects" /> },
  { title: "Contact", component: <PageContent pageName="Contact" /> },
];

// Flipbook의 스타일링
const FlipbookContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(
    rgba(224, 208, 179, 1),
    /* 진한 베이지색 */ rgba(184, 151, 109, 1) /* 진한 갈색 */
  );
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  overflow: hidden;
`;

const Book = styled(FlipPage)`
  border: 1px solid #ccc;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  color: black;
`;

const DoublePage = styled.article`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #ede7f6;
`;

const Page = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const LeftPage = styled(Page)`
  border-right: 2px solid #ccc;
`;

const RightPage = styled(Page)``;

const FlipBook = () => {
  return (
    <FlipbookContainer>
      <Book
        showSwipeHint
        uncutPages
        orientation="horizontal"
        pageBackground="#fffdf8"
        animationDuration="400"
        width={window.innerWidth * 0.7} // 화면 크기에 맞게 책 크기 설정
        height={window.innerHeight * 0.9}
      >
        {pages
          .map((_, index) => index) // 인덱스를 먼저 추출
          .filter((index) => index % 2 === 0) // 짝수 인덱스만 필터링
          .map((index) => (
            <DoublePage key={index}>
              <LeftPage>{pages[index].component}</LeftPage>{" "}
              <RightPage>
                {index + 1 < pages.length ? (
                  pages[index + 1].component
                ) : (
                  <h1>No More Pages</h1>
                )}
              </RightPage>
            </DoublePage>
          ))}
      </Book>
    </FlipbookContainer>
  );
};

export default FlipBook;
