import React from "react";
import styled, { keyframes } from "styled-components";
import skills from "../data/skills";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const SkillsSection = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.sectionBgAlt};
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 3rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: ${fadeInUp} 0.6s ease-out forwards;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CategoryContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  animation: ${fadeInUp} 0.6s ease-out forwards;
  animation-delay: 0.2s;
  opacity: 0;
`;

const Category = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CategoryTitle = styled.h3`
  color: ${({ theme }) => theme.primary};
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1.5rem;
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: scale(1.05);

    img {
      animation: ${float} 2s ease-in-out infinite;
    }
  }
`;

const SkillIcon = styled.img`
  width: 48px;
  height: 48px;
  transition: all 0.3s ease;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
`;

const SkillName = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
`;

const Skills = () => (
  <SkillsSection id="skills">
    <SectionTitle>Skills & Technologies</SectionTitle>
    <CategoryContainer>
      {Object.entries(skills).map(([category, items]) => (
        <Category key={category}>
          <CategoryTitle>{category}</CategoryTitle>
          <SkillsGrid>
            {items.map(skill => (
              <SkillCard key={skill.name}>
                <SkillIcon src={skill.icon} alt={skill.name} />
                <SkillName>{skill.name}</SkillName>
              </SkillCard>
            ))}
          </SkillsGrid>
        </Category>
      ))}
    </CategoryContainer>
  </SkillsSection>
);

export default Skills; 