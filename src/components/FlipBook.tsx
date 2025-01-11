import FlipPage from "react-flip-page";
import PageContent from "./PageContent";
import styled from "styled-components";
import HomePage from "../pages/HomePage";
import background from "../images/bookfirstpage.png";
import AboutPage from "../pages/Education";
import Skills from "../pages/Skills";
import Experience from "../pages/Experiences";
import { useEffect, useState } from "react";
import Education from "../pages/Education";
import ProjectsSection from "../pages/ProjectsPage";
const FirstPageBackground = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${background});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  @media (max-width: 768px) {
    height: 50vh;
    width: 100%;
  }
`;

const pages = [
  { title: "fistpage", component: <FirstPageBackground /> },
  { title: "Home", component: <HomePage /> },
  { title: "SKILL", component: <Skills /> },
  { title: "Experience", component: <Experience /> },
  { title: "Education", component: <Education /> },
  { title: "ProjectsPage", component: <ProjectsSection /> },
  { title: "Contact", component: <PageContent pageName="Contact" /> },
];

const FlipbookContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 화면 높이를 100%로 설정 */
  width: 100vw; /* 화면 너비를 100%로 설정 */
  background-image: linear-gradient(
    rgba(224, 208, 179, 1),
    rgba(184, 151, 109, 1)
  );
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  overflow: hidden;
  padding: 1rem;

  @media (max-width: 768px) {
    height: 100vh; /* 모바일에서는 100% 높이 */
    width: 100vw;
    flex-direction: column;
  }
`;

const Book = styled(FlipPage)`
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  color: inherit;
  padding: 1rem;
`;

const DoublePage = styled.article`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #ede7f6;

  @media (max-width: 768px) {
    flex-direction: column; /* 모바일에서는 세로로 배치 */
  }
`;

const Page = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const LeftPage = styled(Page)`
  border-right: 2px solid #ccc;
`;

const RightPage = styled(Page)``;

const FlipBook = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [windowsize, setWinsize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  // 윈도우 크기를 감지하여 isMobile 값 업데이트
  useEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth <= 768); // 모바일인지 확인 (768px 이하)
      setWinsize([window.innerWidth, window.innerHeight]);
    };

    updateSize(); // 초기 크기 확인
    window.addEventListener("resize", updateSize); // 화면 크기 변화 감지

    // Cleanup
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);
  return (
    <FlipbookContainer>
      <Book
        showSwipeHint
        uncutPages
        orientation={isMobile ? "vertical" : "horizontal"} // 모바일일 경우 vertical
        pageBackground="#fffdf8"
        animationDuration="400"
        width={windowsize[0] * 0.8} // 화면 크기에 맞게 책 크기 설정
        height={windowsize[1]}
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
