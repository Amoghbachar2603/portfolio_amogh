import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import projects from "../data/projects";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const ProjectsSection = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.sectionBg};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 3rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProjectContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding: 0 2rem;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.cardBg};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  animation: ${fadeIn} 0.5s ease-out forwards;
  height: 500px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.cardBg};
  padding: 2rem;
`;

const CardImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;

  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.cardBg};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.primary};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.primaryDark};
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const CardTitle = styled.h3`
  margin: 0 0 1rem;
  color: ${({ theme }) => theme.primary};
  font-size: 1.8rem;
  font-family: 'Poppins', sans-serif;
`;

const CardDesc = styled.p`
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.5rem;
  line-height: 1.6;
  text-align: justify;
  hyphens: auto;
  word-wrap: break-word;
`;

const TechTags = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background: ${({ theme }) => theme.tagBg};
  color: ${({ theme }) => theme.tagText};
  padding: 0.3rem 0.7rem;
  border-radius: 12px;
  font-size: 0.85rem;
`;

const CardLinks = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const GithubLink = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 8px;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
    transform: translateY(-2px);
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  opacity: ${props => props.hidden ? 0 : 1};
  pointer-events: ${props => props.hidden ? 'none' : 'auto'};

  &:hover {
    background: ${({ theme }) => theme.primaryDark};
    transform: translateY(-50%) scale(1.1);
  }

  &.prev {
    left: -20px;
  }

  &.next {
    right: -20px;
  }

  @media (max-width: 768px) {
    &.prev {
      left: 0;
    }
    &.next {
      right: 0;
    }
  }
`;

const ProjectCounter = styled.div`
  text-align: center;
  margin-top: 2rem;
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;
`;

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <ProjectsSection id="projects">
      <SectionTitle>Projects</SectionTitle>
      <ProjectContainer>
        <NavigationButton 
          className="prev" 
          onClick={prevProject}
          hidden={currentProject === 0}
        >
          <FaChevronLeft />
        </NavigationButton>
        
        <Card>
          <ImageContainer>
            <CardImage src={projects[currentProject].image} alt={projects[currentProject].title} />
          </ImageContainer>
          <CardContent>
            <ContentWrapper>
              <CardTitle>{projects[currentProject].title}</CardTitle>
              <CardDesc>{projects[currentProject].description}</CardDesc>
              <TechTags>
                {projects[currentProject].tech.map(t => <Tag key={t}>{t}</Tag>)}
              </TechTags>
            </ContentWrapper>
            <CardLinks>
              <GithubLink href={projects[currentProject].code} target="_blank" rel="noopener noreferrer">
                <FaGithub /> View Code
              </GithubLink>
            </CardLinks>
          </CardContent>
        </Card>

        <NavigationButton 
          className="next" 
          onClick={nextProject}
          hidden={currentProject === projects.length - 1}
        >
          <FaChevronRight />
        </NavigationButton>

        <ProjectCounter>
          Project {currentProject + 1} of {projects.length}
        </ProjectCounter>
      </ProjectContainer>
    </ProjectsSection>
  );
};

export default Projects; 