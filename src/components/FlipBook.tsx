import FlipPage from "react-pageflip";
import styled from "styled-components";
import HomePage from "../pages/HomePage";
import background from "../images/bookfirstpage.png";
import Skills from "../pages/Skills";
import Experience from "../pages/Experiences";
import { useEffect, useState } from "react";
import Education from "../pages/Education";
import ProjectsSection from "../pages/ProjectsPage";
import Volunteering from "../pages/Volunteering";
import Contact from "../pages/Contact";
import { myPracticum, myselling } from "../data/projectData";
import { IFlipSetting } from "../types/settings";

// 첫 번째 페이지 배경 설정
const FirstPageBackground = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${background});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 50vh;
  }
`;

const pages = [
  {
    title: "ProjectsPage",
    component: <ProjectsSection projectData={myselling} />,
  },
  {
    title: "ProjectsPage",
    component: <ProjectsSection projectData={myPracticum} />,
  },
  { title: "firstpage", component: <FirstPageBackground /> },
  { title: "Home", component: <HomePage /> },
  { title: "SKILL", component: <Skills /> },
  { title: "Experience", component: <Experience /> },
  { title: "Education", component: <Education /> },
  { title: "Volunteering", component: <Volunteering /> },

  { title: "Contact", component: <Contact /> },
  { title: "Lastpage", component: <FirstPageBackground /> },
];

const FlipbookContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;

  background-image: linear-gradient(
    rgba(224, 208, 179, 1),
    rgba(184, 151, 109, 1)
  );
  background-size: cover;
  background-position: center;

  overflow: hidden; /* 내부 내용이 넘치면 잘림 */
  padding: 0;
  margin: 0;
`;
const Book = styled(FlipPage)<IFlipSetting>`
  width: 100%; /* 화면 크기에 맞추기 */

  border-radius: 5px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  position: relative; /* z-index 적용을 위해 position 설정 */
  z-index: 1; /* FlipPage의 z-index를 1로 설정 */
  pointer-events: none; /* FlipPage는 클릭 불가 */

  /* 페이지 넘기기 애니메이션에 영향을 받지 않도록 추가 설정 */
  & > * {
    pointer-events: auto; /* FlipPage의 자식 요소는 클릭 가능 */
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const FlipBook = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [windowsize, setWinsize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth <= 768);
      setWinsize([window.innerWidth, window.innerHeight]);
    };

    //updateSize();
    //window.addEventListener("resize", updateSize);

    return () => {
      //window.removeEventListener("resize", updateSize);
    };
  }, []);

  const flipSettings: IFlipSetting = {
    startPage: 0,
    size: "fixed",
    width: 750,
    height: 700,
    minWidth: 300,
    maxWidth: 100,
    minHeight: 400,
    maxHeight: 500,
    drawShadow: true,
    flippingTime: 1000,
    usePortrait: false,
    startZIndex: 1,
    autoSize: true,
    maxShadowOpacity: 0.5,
    showCover: false,
    mobileScrollSupport: true,
    clickEventForward: false,
    useMouseEvents: true,
    swipeDistance: 5,
    showPageCorners: true,
    disableFlipByClick: true,
  };

  return (
    <FlipbookContainer>
      <Book
        {...flipSettings} // Spread the required props into `Book`
        style={{}} // Explicitly pass a style prop to avoid the TypeScript error
        onFlip={(e) => console.log("Page flipped:", e)}
        className="flip-book"
      >
        {pages.map((page, index) => (
          <div key={index}>{page.component}</div>
        ))}
      </Book>
    </FlipbookContainer>
  );
};

export default FlipBook;
