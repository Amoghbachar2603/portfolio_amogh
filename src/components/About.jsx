import React from "react";
import styled, { keyframes } from "styled-components";

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

const AboutSection = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.sectionBg};
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 3rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoBox = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  animation: ${fadeInUp} 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);

  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }
  &:nth-child(4) { animation-delay: 0.4s; }

  h3 {
    color: ${({ theme }) => theme.primary};
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    font-weight: 600;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  p {
    color: ${({ theme }) => theme.text};
    line-height: 1.6;
    font-family: 'Inter', sans-serif;
    text-align: justify;
    hyphens: auto;
    word-wrap: break-word;
  }

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    transition: all 0.3s ease;
    text-align: center;
    display: inline-block;
    font-weight: 500;
    
    &:hover {
      color: ${({ theme }) => theme.primaryDark};
      text-decoration: underline;
    }
  }

  &:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease;
  }
`;

const EducationTitle = styled.h4`
  color: ${({ theme }) => theme.primary};
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
`;

const CourseInfo = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.9;
`;

const YearInfo = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
`;

const About = () => (
  <AboutSection id="about">
    <SectionTitle>About Me</SectionTitle>
    <InfoGrid>
      <InfoBox>
        <h3>Brief Description</h3>
        <p>
          I'm a creative and collaborative individual who thrives in team environments. My passion for 
          anime and art reflects my appreciation for creativity and attention to detail. I believe in 
          open communication, taking initiative, and supporting others to achieve common goals. 
          Whether it's through my artwork or team projects, I enjoy bringing ideas to life and 
          creating meaningful connections with others.
        </p>
      </InfoBox>

      <InfoBox>
        <h3>Education</h3>
        <p>
          <h4>Global Academy of Technology, Bangalore</h4>
          Bachelor of Engineering in Artificial Intelligence and Machine Learning<br />
          CGPA: 9.33 (2021 - 2025)
        </p>
      </InfoBox>

      <InfoBox>
        <h3>Hobbies</h3>
        <p>
          I'm passionate about anime sketching and share my artwork on Instagram. 
          Check out my sketches at <a href="https://www.instagram.com/sktchnimes/?igsh=czgweHM0c3VxNWs2#" target="_blank" rel="noopener noreferrer">@sktchnimes</a>
        </p>
      </InfoBox>

      <InfoBox>
        <h3>Technical Interests</h3>
        <p>
          • Deep Learning and Neural Networks<br />
          • Natural Language Processing<br />
          • Computer Vision<br />
          • Full Stack Development<br />
          • Cloud Computing and DevOps
        </p>
      </InfoBox>
    </InfoGrid>
  </AboutSection>
);

export default About; 