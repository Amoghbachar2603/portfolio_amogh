import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.heroBg};
  padding: 0 4rem;
  gap: 2rem;
  position: relative;
  padding-top: 50px; /* Account for navbar height */

  @media (max-width: 1024px) {
    padding: 0 2rem;
    padding-top: 50px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 45px 2rem 2rem; /* Account for mobile navbar height */
    text-align: center;
    justify-content: center;
    gap: 1.5rem;
    min-height: calc(100vh - 45px); /* Subtract navbar height */
  }
`;

const HeroContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 800px;
  margin-top: 1rem; /* Add some top margin */

  @media (max-width: 768px) {
    align-items: center;
    gap: 1rem;
    margin-top: 0.5rem; /* Reduce margin on mobile */
  }
`;

const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.primary};
  font-family: 'Poppins', sans-serif;
  line-height: 1.1;
  margin: 0;
  white-space: nowrap;

  @media (max-width: 1024px) {
    font-size: 3.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2.8rem;
    white-space: normal;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.text};
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  margin: 0;
  opacity: 0.9;

  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const ContactInfo = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  font-family: 'Inter', sans-serif;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled.button`
  background: ${({ theme }) => theme.primary};
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content;

  &:hover {
    background: ${({ theme }) => theme.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0.8rem 1.6rem;
  }
`;

const PhotoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  border: 4px solid ${({ theme }) => theme.primary};
  background: white;
  padding: 4px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  @media (max-width: 1024px) {
    max-width: 350px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Hero = () => (
  <HeroSection id="hero">
    <HeroContent>
      <Title>Hi, I'm<br />Amogh B Achar</Title>
      <Subtitle>AI & ML Engineer | Full Stack Developer</Subtitle>
      <ContactInfo>
        amoghbachar26@gmail.com | +91 6361479905
      </ContactInfo>
      <CTAButton onClick={() => {
        document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
      }}>
        View Projects
      </CTAButton>
    </HeroContent>
    <PhotoContainer>
      <img src="\profile.jpg" alt="Amogh B Achar" />
    </PhotoContainer>
  </HeroSection>
);

export default Hero; 