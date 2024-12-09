import React from "react";
import FlipPage from "react-flip-page";
import PageContent from "./PageContent";
import "../styles/FlipBook.css";

const pages = [
  { title: "Home", component: <PageContent pageName="Home" /> },
  { title: "About", component: <PageContent pageName="About" /> },
  { title: "Projects", component: <PageContent pageName="Projects" /> },
  { title: "Contact", component: <PageContent pageName="Contact" /> },
];

function FlipBook() {
  return (
    <FlipPage
      className="book"
      showSwipeHint
      uncutPages
      orientation="horizontal"
      width="800"
      pageBackground="#fffdf8"
      animationDuration="400"
    >
      {pages.map((page, index) => (
        <article key={index} className="page">
          <h1>{page.title}</h1>
          {page.component}
        </article>
      ))}
    </FlipPage>
  );
}

export default FlipBook;
