import React, { useState } from "react";
import styled from "styled-components";
import { Link } from 'react-scroll';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  background: rgba(17, 24, 39, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 1000;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0 1.2rem;
    height: 45px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  img {
    height: 35px;
    width: auto;
    transition: all 0.3s ease;
    filter: invert(24%) sepia(98%) saturate(2000%) hue-rotate(210deg) brightness(90%) contrast(101%) drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));
  }

  &:hover {
    transform: scale(1.05);
    img {
      filter: invert(24%) sepia(98%) saturate(2000%) hue-rotate(210deg) brightness(110%) contrast(101%) drop-shadow(0 0 2px rgba(0, 0, 0, 0.4));
    }
  }

  @media (max-width: 768px) {
    img {
      height: 30px;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Inter', sans-serif;
  position: relative;
  padding: 0.3rem 0;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 1.5px;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.primary};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-1px);

    &:after {
      width: 100%;
    }
  }

  &.active {
    color: ${({ theme }) => theme.primary};
    
    &:after {
      width: 100%;
    }
  }
`;

const ResumeButton = styled.a`
  background: ${({ theme }) => theme.primary};
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 3px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid transparent;

  &:hover {
    background: transparent;
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    transform: translateY(-1px);
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 45px;
    left: 0;
    right: 0;
    background: rgba(17, 24, 39, 0.95);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 1rem;
    gap: 0.8rem;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    animation: slideDown 0.3s ease-out;
  }

  @keyframes slideDown {
    from {
      transform: translateY(-10px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.3rem;
  font-family: 'Inter', sans-serif;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContainer>
      <Logo>
        <img src="/logo.png" alt="Amogh B Achar" />
      </Logo>
      <NavLinks>
        <NavLink to="home" smooth={true} duration={500} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</NavLink>
        <NavLink to="about" smooth={true} duration={500}>About</NavLink>
        <NavLink to="skills" smooth={true} duration={500}>Skills</NavLink>
        <NavLink to="projects" smooth={true} duration={500}>Projects</NavLink>
        <NavLink to="achievements" smooth={true} duration={500}>Achievements</NavLink>
        <NavLink to="contact" smooth={true} duration={500}>Contact</NavLink>
        <ResumeButton href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume
        </ResumeButton>
      </NavLinks>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>☰</Hamburger>
      {isOpen && (
        <MobileMenu>
          <NavLink to="home" smooth={true} duration={500} onClick={() => {
            setIsOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}>Home</NavLink>
          <NavLink to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="skills" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Skills</NavLink>
          <NavLink to="projects" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Projects</NavLink>
          <NavLink to="achievements" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Achievements</NavLink>
          <NavLink to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Contact</NavLink>
          <ResumeButton href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </ResumeButton>
        </MobileMenu>
      )}
    </NavContainer>
  );
};

export default Navbar; 