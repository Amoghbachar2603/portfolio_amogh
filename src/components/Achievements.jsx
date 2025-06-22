import React from "react";
import styled, { keyframes } from "styled-components";
import { FaExternalLinkAlt } from "react-icons/fa";
import achievements from "../data/achievements";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AchievementsSection = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.sectionBgAlt};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.text};
  font-size: 1.1rem;
  margin-bottom: 3rem;
  opacity: 0.8;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 0 1rem;
`;

const CategoryContainer = styled.div`
  background: ${({ theme }) => theme.cardBg};
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.6s ease-out forwards;
  animation-delay: ${props => props.delay}s;
  opacity: 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.2);
  }
`;

const CategoryTitle = styled.h3`
  color: ${({ theme }) => theme.primary};
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.primary};
    opacity: 0.3;
  }
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
`;

const Item = styled.div`
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 200px;

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.05);
  }
`;

const ItemTitle = styled.h4`
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  padding-right: 100px;
`;

const ItemDate = styled.span`
  color: ${({ theme }) => theme.primary};
  font-size: 0.9rem;
  font-weight: 500;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;

const ItemDescription = styled.p`
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  font-size: 1rem;
  margin-bottom: 0.8rem;
  line-height: 1.6;
  flex: 1;
`;

const ItemLink = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  margin-top: auto;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: fit-content;

  &:hover {
    color: ${({ theme }) => theme.primaryDark};
    transform: translateX(2px);
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Achievements = () => {
  return (
    <AchievementsSection id="achievements">
      <SectionTitle>Achievements & Recognition</SectionTitle>
      <SectionSubtitle>Hackathons and Notable Achievements</SectionSubtitle>
      <Container>
        {Object.entries(achievements).map(([category, items], index) => (
          <CategoryContainer key={category} delay={index * 0.2}>
            <CategoryTitle>{category}</CategoryTitle>
            <ItemList>
              {items.map((item, itemIndex) => (
                <Item key={itemIndex}>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemDate>{item.date}</ItemDate>
                  <ItemDescription>{item.description}</ItemDescription>
                  {item.link && (
                    <ItemLink href={item.link} target="_blank" rel="noopener noreferrer">
                      Learn More <FaExternalLinkAlt size={12} />
                    </ItemLink>
                  )}
                </Item>
              ))}
            </ItemList>
          </CategoryContainer>
        ))}
      </Container>
    </AchievementsSection>
  );
};

export default Achievements; 