import React from "react";
import "../styles/AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">
      <h2>About Me</h2>
      <p>
        Hi! I’m Dongil Kwon, a passionate software developer with experience in
        creating efficient inventory management systems and a background in
        logistics.
      </p>
      <p>
        After graduating from BCIT in Computer Systems, I’m excited to leverage
        my technical skills to create impactful software solutions.
      </p>
      <img src="/images/about-me.jpg" alt="About Me" className="about-image" />
    </div>
  );
}

export default AboutPage;
