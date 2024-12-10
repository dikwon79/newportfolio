import React from "react";
import FlipPage from "react-flip-page";
import PageContent from "./PageContent";
import styled from "styled-components";
import grandImage from "../images/grand.jpg";
import HomePage from "../pages/HomePage";

// 페이지 리스트 (페이지 이름과 컴포넌트 포함)
const pages = [
  { title: "Home", component: <HomePage /> },
  { title: "About", component: <PageContent pageName="About" /> },
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
      rgba(255, 126, 95, 0),
      rgba(254, 180, 123, 1)
    ),
    url(${grandImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  overflow: hidden;
`;

const Book = styled(FlipPage)`
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  color: black;
`;

const DoublePage = styled.article`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Page = styled.div`
  flex: 1;
  padding: 20px;
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
        {pages.map((page, index) => (
          <DoublePage key={index}>
            <LeftPage>{page.component}</LeftPage>

            <RightPage>
              {index + 1 < pages.length ? (
                <>
                  <h1>{pages[index + 1].title}</h1>
                  {pages[index + 1].component}
                </>
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
