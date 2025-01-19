import styled from "styled-components";
import { motion } from "framer-motion";
// Styled Components
const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border-left: 1px solid #a263c9;
  background: linear-gradient(to bottom, #b084cc, rgb(237, 231, 246));

  box-sizing: border-box;
  padding: 5px;
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
    overflow-y: scroll;
  }
`;

const TopBox = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: right;
  align-items: flex-start;
  background-color: white;
  border-bottom: 2px solid #5a25b0;
  padding-right: 1.5rem;
  @media (max-width: 768px) {
    justify-content: center; /* 가로 중앙 정렬 */
    padding-right: 0;
  }
`;

const TopTitle = styled.div`
  font-family: "Georgia", serif;
  font-size: 3rem; /* 폰트 크기 */
  color: #5a25b0;
  font-weight: bold;
  text-align: center; /* 텍스트 중앙 정렬 */
`;

const MiddleBox = styled.div`
  flex: 5;
  display: flex;
  justify-content: center; /* 중앙 정렬 */
  align-items: flex-start; /* 위쪽 정렬 */
  margin-top: 1px;

  padding-top: 0.6rem;
`;

const SubBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #e8e1f7;
  font-size: 1.2rem;
  font-weight: bold;
  color: #444;
  padding: 1rem;

  &:not(:last-child) {
    border-right: 2px solid #5a25b0;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #5a25b0;
  margin-bottom: 1rem;
`;

const ItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Item = styled.span`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10%;
  padding: 0.5rem;
  font-size: 1rem;
  color: #555;
  font-weight: normal;
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
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-template-rows: auto;
  gap: 0.8rem;
`;

const ProjectCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* 상단과 하단에 공간 분배 */
  background-color: #e8e1f7;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0.3rem;
  transition: transform 0.2s ease-in-out;

  &:first-child {
    transform-origin: center left;
  }
  &:nth-child(2) {
    transform-origin: center center;
  }
  &:nth-child(3) {
    transform-origin: center right;
  }

  &:nth-child(4) {
    transform-origin: bottom left;
  }
`;
const CardVariants = {
  normal: {
    scale: 1,
    zIndex: 1,
  },
  hover: {
    scaleX: 2, // 가로 방향으로만 2배 확대
    scaleY: 2,
    zIndex: 999,
    transition: {
      delay: 0.5,
      type: "tween",
    },
  },
};

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #5a25b0;
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
  display: none;

  /* On hover, show the details */
  ${ProjectCard}:hover & {
    display: block;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    display: block;
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

// Component
function ProjectPage({ projectData }: ProjectsSectionProps) {
  return (
    <ProjectContainer>
      <OuterBox>
        {/* 상단 박스 */}
        <TopBox>
          <TopTitle>Projects</TopTitle>
        </TopBox>

        {/* Middle Box */}
        <MiddleBox>
          <ProjectList>
            {projectData.map((project, index) => (
              <ProjectCard
                key={index}
                whileHover="hover"
                initial="normal"
                variants={CardVariants}
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
                      height="50%"
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
        </MiddleBox>
      </OuterBox>
    </ProjectContainer>
  );
}

export default ProjectPage;
