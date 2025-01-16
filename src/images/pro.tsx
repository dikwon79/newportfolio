import { motion } from "framer-motion";
import styled from "styled-components";

const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-color: rgb(237, 231, 246);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  padding: 2rem;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: hidden;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 13%;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
  @media (max-height: 1000px) {
    margin-bottom: 5%;
  }
`;

const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 220px); /* 열의 너비를 100px로 설정 */
  grid-template-rows: repeat(3, 315px); /* 행의 높이를 100px로 설정 */
  gap: 0.5rem;
`;
const ProjectCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* 상단과 하단에 공간 분배 */
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0.3rem;
  transition: transform 0.2s ease-in-out;

  &:first-child {
    transform-origin: center left;
  }
  &:nth-child(3) {
    transform-origin: center right;
  }
  &:nth-child(4) {
    transform-origin: center left;
  }

  &:nth-child(6) {
    transform-origin: center right;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 0.5rem;
  margin-top: 0;
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ProjectDetails = styled.div`
  font-size: 0.67rem;
  color: #555;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const TechStack = styled.div`
  margin-top: 0.5rem;
  font-size: 0.6rem;
  font-weight: bold;
  color: #333;

  & span {
    background-color: #eef;
    border-radius: 4px;
    padding: 0.2rem 0.3rem;
    margin-right: 0.2rem;
    display: inline-block;
  }
`;

interface ProjectImgProps {
  src: string; // 이미지 URL 타입 정의
}
const ProjectImg = styled.div<ProjectImgProps>`
  width: 100%;
  aspect-ratio: 16 / 9;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProjectVideo = styled.video<ProjectImgProps>`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  background: #000;
`;
const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem; /* 링크 간 간격 설정 */
  margin-top: 0.5rem;

  & a {
    font-size: 0.8rem;
    font-weight: bold;
    color: #007bff;
    text-decoration: none;
    background-color: #eef;
    border-radius: 4px;
    padding: 0.3rem 0.5rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #cce;
    }
    /* 링크 비활성화 스타일 */
    &:disabled {
      color: #aaa;
      background-color: #f5f5f5;
      cursor: not-allowed;
      pointer-events: none;
    }
  }
`;

interface Project {
  title: string;
  description: string;
  techStack: string[];
  img: string;
  video: string;
  githubLink: string;
  appLink: string;
}

interface ProjectsSectionProps {
  projectData: Project[];
}

const CardVariants = {
  normal: {
    scale: 1,
    zIndex: 1,
  },
  hover: {
    scale: 2,
    y: +50,
    zIndex: 999,
    transition: {
      delay: 0.5,
      type: "tween",
    },
  },
};
const CardVariants2 = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 2,
    y: -240,
    zIndex: 999,
    transition: {
      delay: 0.5,
      type: "tween",
    },
  },
};

function ProjectsSection({ projectData }: ProjectsSectionProps) {
  return (
    <ProjectsContainer>
      {projectData[0].title === "InventorySystem" ? (
        <SectionTitle>Projects</SectionTitle>
      ) : (
        ""
      )}
      <ProjectList>
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            whileHover="hover"
            initial="normal"
            variants={index <= 2 ? CardVariants : CardVariants2}
            transition={{ type: "tween" }}
          >
            <div>
              <TechStack>
                {project.techStack.map((tech, idx) => (
                  <span key={idx}>{tech}</span>
                ))}
              </TechStack>
              <ProjectTitle>{project.title}</ProjectTitle>
              {project.video ? (
                <ProjectVideo
                  src={`/videos/${project.video}`}
                  loop
                  muted
                  controls
                  width="100%"
                  height="40%"
                />
              ) : (
                <ProjectImg src={`/projects/${project.img}`} />
              )}
              <ProjectDetails>{project.description}</ProjectDetails>
            </div>
            <LinksContainer>
              {project.githubLink ? (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              ) : (
                <a
                  href="#"
                  style={{
                    pointerEvents: "none",
                    cursor: "not-allowed",
                    color: "#aaa",
                  }}
                >
                  GitHub
                </a>
              )}
              {project.appLink ? (
                <a
                  href={project.appLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  App
                </a>
              ) : (
                <a
                  href="#"
                  style={{
                    pointerEvents: "none",
                    cursor: "not-allowed",
                    color: "#aaa",
                  }}
                >
                  App
                </a>
              )}
            </LinksContainer>
          </ProjectCard>
        ))}
      </ProjectList>
    </ProjectsContainer>
  );
}

export default ProjectsSection;
