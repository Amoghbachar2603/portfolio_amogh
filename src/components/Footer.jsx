import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

const FooterSection = styled.footer`
  background: ${({ theme }) => theme.footerBg};
  color: ${({ theme }) => theme.footerText};
  text-align: center;
  padding: 1rem 0;
  font-size: 0.9rem;
`;

const SocialLinks = styled.div`
  margin-bottom: 0.5rem;
  a {
    color: ${({ theme }) => theme.primary};
    margin: 0 0.5rem;
    font-size: 1.2rem;
    transition: color 0.2s;
    &:hover {
      color: ${({ theme }) => theme.primaryDark};
    }
  }
`;

const Copyright = styled.div`
  opacity: 0.8;
`;

const Footer = () => (
  <FooterSection>
    <SocialLinks>
      <a href="https://github.com/Amoghbachar2603" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href="https://linkedin.com/in/amogh-b-achar" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      <a href="https://leetcode.com/AmoghBAchar" target="_blank" rel="noopener noreferrer"><FaCode /></a>
    </SocialLinks>
    <Copyright>&copy; {new Date().getFullYear()} Amogh B Achar. All rights reserved.</Copyright>
  </FooterSection>
);

export default Footer; 