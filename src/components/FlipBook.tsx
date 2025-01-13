import styled from "styled-components";
import HomePage from "../pages/HomePage";
import Skills from "../pages/Skills";
import Experience from "../pages/Experiences";
import { useEffect, useRef, useState } from "react";
import Education from "../pages/Education";
import ProjectsSection from "../pages/ProjectsPage";
import Volunteering from "../pages/Volunteering";
import Contact from "../pages/Contact";
import { myPracticum, myselling } from "../data/projectData";
import { IFlipSetting } from "../types/settings";
import FlipPage from "react-pageflip";
import { motion } from "framer-motion"; // Import motion
import FirstPage from "../pages/Cover";

// 첫 번째 페이지 배경 설정
const FirstPageBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5; /* 배경 단색 설정 */
  overflow: hidden; /* 부모 영역을 넘어가지 않도록 설정 */

  @media (max-width: 768px) {
    height: 50vh;
  }
`;

const pages = [
  { title: "cover", component: <FirstPage /> },
  { title: "list", component: <FirstPageBackground /> },
  { title: "Home", component: <HomePage /> },
  { title: "SKILL", component: <Skills /> },
  { title: "Experience", component: <Experience /> },
  { title: "Education", component: <Education /> },
  { title: "Volunteering", component: <Volunteering /> },
  {
    title: "ProjectsPage",
    component: <ProjectsSection projectData={myselling} />,
  },
  {
    title: "ProjectsPage",
    component: <ProjectsSection projectData={myPracticum} />,
  },
  { title: "Contact", component: <Contact /> },
  { title: "last cover", component: <FirstPageBackground /> },
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
  border-radius: 5px;
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
    initial: { scale: 0.2, rotate: -20 }, // Start small and not rotated
    animate: {
      scale: 1,
      rotate: 0,
      transition: { duration: 3, ease: "easeInOut" },
    }, // Scale to normal size, no rotation
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
