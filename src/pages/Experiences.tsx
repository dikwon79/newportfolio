import React from "react";

// 경험 항목 타입 정의
interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string;
}

// 경험 항목 목록
const experiences: ExperienceItem[] = [
  {
    title: "Software Developer",
    company: "Tech Company",
    duration: "Jan 2022 - Present",
    description:
      "Developed and maintained web applications using React and TypeScript. Collaborated with the team to implement new features and improve user experience.",
  },
  {
    title: "Intern Developer",
    company: "Startup Inc.",
    duration: "Jun 2021 - Dec 2021",
    description:
      "Worked on a variety of tasks, including debugging and writing test cases. Gained experience in agile methodologies and participated in sprint meetings.",
  },
  {
    title: "Junior Developer",
    company: "Global Tech Solutions",
    duration: "Jan 2020 - May 2021",
    description:
      "Assisted in the development of enterprise-level applications. Focused on improving performance and optimizing code.",
  },
];

// Experience 컴포넌트
const Experience: React.FC = () => {
  return (
    <div className="experience-container">
      <h1>Experience</h1>
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-item">
            <h2>{experience.title}</h2>
            <h3>{experience.company}</h3>
            <p>
              <strong>Duration:</strong> {experience.duration}
            </p>
            <p>{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
