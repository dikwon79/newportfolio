import styled from "styled-components";
import HomePage from "../pages/HomePage";
import Skills from "../pages/Skills";
import Experience from "../pages/Experiences";
import { useEffect, useRef, useState } from "react";
import Education from "../pages/Education";
import Volunteering from "../pages/Volunteering";
import { myPracticum, myselling } from "../data/projectData";
import { IFlipSetting } from "../types/settings";
import FlipPage from "react-pageflip";
import { motion } from "framer-motion"; // Import motion
import FirstPage from "../pages/Cover";
import ContentsList from "../pages/ContentsList";
import ProjectPage from "../pages/ProjectsPage";
import ProjectSecondPage from "../pages/projectSecondPage";
import LastPageBackground from "../pages/LastCover";

const pages = [
  { title: "cover", component: <FirstPage /> },
  { title: "Contents", component: <ContentsList /> },
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

  { title: "last cover", component: <LastPageBackground /> },
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
    height: 100%;
    .page {
      transform: rotateX(0); /* 위로 넘기는 효과 */
    }
  }
`;
interface NavigationButtonProps {
  $position: "left" | "right";
  onClick: () => void; // 클릭 이벤트 핸들러
  children: React.ReactNode; // 버튼 내용
}

// 버튼 스타일 정의
const NavigationButton = styled.button<
  NavigationButtonProps & { hidden?: boolean }
>`
  position: absolute;
  top: 40px;
  ${({ $position }) => $position === "left" && `left: 20px;`}
  ${({ $position }) => $position === "right" && `right: 20px;`}

  padding: 5px 10px;
  background-color: #bc98ef;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  z-index: 1000;
  display: ${({ hidden }) => (hidden ? "none" : "block")};
  &:hover {
    background-color: #8c6dba;
  }

  @media (max-width: 768px) {
    top: 5px;
    font-size: 14px;
  }
`;
const FlipBook = () => {
  const [hasFlipped, setHasFlipped] = useState(false);
  const flipRef = useRef<any>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // 초기값 설정
  const [screenSize, setScreenSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  const [currentPage, setCurrentPage] = useState(0);

  const handleFlipEvent = (e: any) => {
    console.log("page flipped", e.data);
    setCurrentPage(e.data);
  };
  const handleNextPage = () => {
    console.log("Next button clicked!");
    if (flipRef.current) {
      flipRef.current.pageFlip().flipNext();
    }
  };
  const handlePrevPage = () => {
    console.log("Prev button clicked!");
    if (flipRef.current) {
      flipRef.current.pageFlip().turnToPrevPage();
    }
  };
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
    const handleResize = () => {
      const isNowMobile = window.innerWidth <= 768;
      setIsMobile(isNowMobile);
      setScreenSize([window.innerWidth, window.innerHeight]);
      console.log("Window width:", window.innerWidth, "isMobile:", isNowMobile);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    console.log(isMobile);

    setHasFlipped(true);
    const autoFlip = setTimeout(() => {
      if (flipRef.current) {
        flipRef.current.pageFlip().flipNext(); // 첫 번째 페이지 넘기고 애니메이션 실행
      }
    }, 3000); // 2초 대기 후 첫 번째 페이지 넘기기

    return () => {
      clearTimeout(autoFlip);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const flipSettings: IFlipSetting = {
    startPage: 0,
    size: "fixed",
    width: isMobile ? screenSize[0] : 750,
    height: isMobile ? screenSize[1] : 700,
    minWidth: 300,
    maxWidth: 100,
    minHeight: 400,
    maxHeight: 500,
    drawShadow: true,
    flippingTime: 1000,
    usePortrait: isMobile,
    startZIndex: 1,
    autoSize: true,
    maxShadowOpacity: 0.5,
    showCover: true,
    mobileScrollSupport: true,
    clickEventForward: true,
    useMouseEvents: !isMobile,
    swipeDistance: 1,
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
          style={{
            flexDirection: isMobile ? "column" : "row", // 모바일에서는 위아래 스크롤
          }}
          onFlip={handleFlipEvent}
          className="flip-book"
        >
          {pages.map((page, index) => (
            <div key={index}>{page.component}</div>
          ))}
        </Book>
        {/* ---- 추가한 두 개의 버튼 ---- */}
        <NavigationButton
          $position="left"
          onClick={handlePrevPage}
          hidden={currentPage === 0 || !isMobile}
        >
          prev
        </NavigationButton>
        <NavigationButton
          $position="right"
          onClick={handleNextPage}
          hidden={currentPage === pages.length - 1 || !isMobile}
        >
          next
        </NavigationButton>
      </motion.div>
    </FlipbookContainer>
  );
};

export default FlipBook;
