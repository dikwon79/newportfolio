import { motion } from "framer-motion";
import ReactPlayer from "react-player";
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
  width: 100%; /* 부모 컨테이너의 너비를 기준 */
  aspect-ratio: 16 / 9; /* 16:9 비율로 이미지 표시 */
  background-image: url(${(props) => props.src}); /* 이미지 소스 설정 */
  background-size: cover; /* 이미지 크기를 컨테이너에 맞춤 */
  background-position: center; /* 이미지 중심 표시 */
  border-radius: 8px; /* 모서리를 둥글게 설정 */
  overflow: hidden; /* 자식 내용이 넘치지 않도록 숨김 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 약간의 그림자 효과 */
`;

const ProjectVideo = styled.video<ProjectImgProps>`
  width: 100%; /* 부모 컨테이너의 너비 */
  aspect-ratio: 16 / 9; /* 16:9 비율로 설정 */
  border-radius: 8px; /* 모서리를 둥글게 */
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 약간의 그림자 효과 */
  object-fit: cover; /* 비디오가 컨테이너를 채우도록 크기 조정 */
  background: #000; /* 비디오 로드 중 배경 */
`;

interface Project {
  title: string;
  description: string;
  techStack: string[];
  img: string;
  video: string;
  duration: string;
}

interface ProjectsSectionProps {
  projectData: Project[];
}

const CardVariants = {
  normal: {
    scale: 1,
    zIndex: 1, // 기본 zIndex 설정
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
    y: -50,
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
                width="100%" // 원하는 크기 설정
                height="40%"
              />
            ) : (
              <ProjectImg src={`/projects/${project.img}`} />
            )}

            <ProjectDetails>{project.description}</ProjectDetails>
          </ProjectCard>
        ))}
      </ProjectList>
    </ProjectsContainer>
  );
}

export default ProjectsSection;
