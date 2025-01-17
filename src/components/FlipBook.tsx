import styled from "styled-components";
import HomePage from "../pages/HomePage";
import Skills from "../pages/Skills";
import Experience from "../pages/Experiences";
import { useEffect, useRef, useState } from "react";
import Education from "../pages/Education";
import Volunteering from "../pages/Volunteering";
import Contact from "../pages/Contact";
import { myPracticum, myselling } from "../data/projectData";
import { IFlipSetting } from "../types/settings";
import FlipPage from "react-pageflip";
import { motion } from "framer-motion"; // Import motion
import FirstPage from "../pages/Cover";
import Contents from "../pages/firstPage";
import ProjectPage from "../pages/ProjectsPage";
import ProjectSecondPage from "../pages/projectSecondPage";
import barcode from "../images/barcode.png";

// 첫 번째 페이지 배경 설정
const FirstPageBackground = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(to bottom, #f5e3cb, #b084cc);
  border-radius: 10px;
  position: relative;

  @media (max-width: 768px) {
    height: 50vh;
  }

  /* 오른쪽 하단에 바코드 이미지 추가 */
  &::after {
    content: "";
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 100px; /* 이미지 너비 */
    height: 100px; /* 이미지 높이 */
    background-image: url(${barcode}); /* 바코드 이미지 경로 */
    background-size: contain; /* 이미지 크기 조정 */
    background-repeat: no-repeat; /* 반복 방지 */
    background-position: center; /* 이미지 위치 */
    opacity: 0.8; /* 투명도 조정 */
  }
`;

const pages = [
  { title: "cover", component: <FirstPage /> },
  { title: "Contents", component: <Contents /> },
  { title: "Home", component: <HomePage /> },
  { title: "SKILL", component: <Skills /> },
  { title: "Experience", component: <Experience /> },
  {
    title: "ProjectsPage",
    component: <ProjectPage projectData={myselling} />,
  },
  {
    title: "ProjectsPage2",
    component: <ProjectSecondPage projectData={myPracticum} />,
  },
  { title: "Education", component: <Education /> },
  { title: "Volunteering", component: <Volunteering /> },

  { title: "last cover", component: <FirstPageBackground /> },
];

const FlipbookContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: black;
  background-size: cover;
  background-position: center;

  overflow: hidden;
  padding: 0;
  margin: 0;
`;

const Book = styled(FlipPage)<IFlipSetting>`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
  pointer-events: none;

  & > * {
    pointer-events: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const FlipBook = () => {
  const [hasFlipped, setHasFlipped] = useState(false);
  const flipRef = useRef<any>(null);

  // Motion animation for scaling
  const scaleVariants = {
    initial: {
      x: -500, // 시작 위치 (화면 중앙 가로)
      y: 0, // 시작 위치 (화면 중앙 세로)
    },
    animate: {
      x: 0, // 오른쪽 하단 위치 조정 (여백 포함)
      y: 0, // 하단 위치 조정 (여백 포함)
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  // 페이지 로드 후 자동으로 첫 페이지 넘기기
  useEffect(() => {
    setHasFlipped(true);
    const autoFlip = setTimeout(() => {
      if (flipRef.current) {
        flipRef.current.pageFlip().flipNext(); // 첫 번째 페이지 넘기고 애니메이션 실행
      }
    }, 3000); // 2초 대기 후 첫 번째 페이지 넘기기

    return () => {
      clearTimeout(autoFlip);
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
    showCover: true,
    mobileScrollSupport: true,
    clickEventForward: false,
    useMouseEvents: true,
    swipeDistance: 5,
    showPageCorners: true,
    disableFlipByClick: true,
  };

  return (
    <FlipbookContainer>
      <motion.div
        variants={scaleVariants}
        initial="initial"
        animate={hasFlipped ? "animate" : "initial"} // Trigger animation after flip
        onAnimationComplete={() => {
          // Automatically flip to the next page after animation completes
          if (!hasFlipped && flipRef.current) {
            flipRef.current.pageFlip().flipNext();
            setHasFlipped(true); // Mark the flip as done
          }
        }}
      >
        <Book
          {...flipSettings}
          ref={flipRef}
          style={{}}
          onFlip={(e) => console.log("Page flipped:", e)}
          className="flip-book"
        >
          {pages.map((page, index) => (
            <div key={index}>{page.component}</div>
          ))}
        </Book>
      </motion.div>
    </FlipbookContainer>
  );
};

export default FlipBook;
