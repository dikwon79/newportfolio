import { useState } from "react";
import styled from "styled-components";

// Styled components definitions
const ContentsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: linear-gradient(
    to bottom,
    #f5e3cb,
    #b084cc
  ); /* 배경 그라데이션 */
`;

const OuterBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 95%;
  border: 2px solid #5a25b0;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 768px) {
    overflow-y: auto;
  }
`;

const HeaderBox = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: right;
  align-items: center;

  padding-right: 1.5rem;

  @media (max-width: 768px) {
    justify-content: center;
    border-bottom: 2px solid #5a25b0;
    padding-left: 0;
  }
`;

const HeaderTitle = styled.div`
  font-family: "Georgia", serif;
  font-size: 3rem;
  color: #fff;
  font-weight: bold;
`;
const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #5a25b0;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #431c8c;
  }

  &.prev {
    left: 1rem;
  }

  &.next {
    right: 1rem;
  }
`;
const TopsubBox = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;

  border-bottom: 2px solid #5a25b0;

  @media (max-width: 768px) {
    align-items: flex-start;
    padding: 1rem;
  }
`;

const BottomBox = styled.div`
  flex: 2;
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SubBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e8e1f7;
  font-size: 1.1rem;
  font-weight: bold;
  color: #444;
  cursor: pointer;
  text-align: center;
  padding: 10px;

  &:not(:last-child) {
    border-right: 2px solid #5a25b0;
  }

  &:hover {
    background-color: #d3c6f3;
  }
`;

const ChapterItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline; /* 텍스트 기준선에 맞춰 정렬 */
  margin: 1px 5px;
  padding: 1px;
  font-family: "Poppins", sans-serif;
  text-align: center;
`;

const ChapterNumber = styled.span`
  font-size: 3.5rem;
  font-weight: bold;
  color: #5a189a;
  margin-right: 1rem;

  @media (max-width: 768px) {
    font-size: 3rem;
    margin-right: 0.75rem;
  }
`;

const ChapterTitle = styled.div`
  font-size: 2rem;
  font-weight: normal;
  color: #6d6875;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

// Data for the Contents
const chapters = [
  { number: "01", title: "Profile" },
  { number: "02", title: "Skill" },
  { number: "03", title: "Experience" },
  { number: "04", title: "Project" },
  { number: "05", title: "Education" },
  { number: "06", title: "Volunteering" },
];

// Functional Component
const Contents = () => {
  return (
    <ContentsContainer>
      <OuterBox>
        <HeaderBox>
          <HeaderTitle>Contents</HeaderTitle>
        </HeaderBox>

        <TopsubBox>
          {chapters.map((chapter, index) => (
            <ChapterItem key={index}>
              <ChapterNumber>{chapter.number}</ChapterNumber>
              <ChapterTitle>{chapter.title}</ChapterTitle>
            </ChapterItem>
          ))}
        </TopsubBox>
      </OuterBox>
    </ContentsContainer>
  );
};
export default Contents;
