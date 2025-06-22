import { createGlobalStyle } from "styled-components";

export const theme = {
  primary: "#7c3aed",
  primaryDark: "#5b21b6",
  navBg: "rgb(17 24 39)",
  heroBg: "rgb(17 24 39)",
  sectionBg: "rgb(31 41 55)",
  sectionBgAlt: "rgb(17 24 39)",
  cardBg: "rgb(31 41 55)",
  tagBg: "rgb(55 65 81)",
  tagText: "#7c3aed",
  text: "#e5e7eb",
  footerBg: "rgb(17 24 39)",
  footerText: "#9ca3af",
  error: "#ef4444",
  success: "#10b981",
};

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: ${({ theme }) => theme.heroBg};
    color: ${({ theme }) => theme.text};
    line-height: 1.6;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.text};
  }

  h1 {
    font-size: 3.5rem;
    letter-spacing: -0.02em;
  }

  h2 {
    font-size: 2.5rem;
    letter-spacing: -0.01em;
  }

  h3 {
    font-size: 1.75rem;
  }

  p {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    line-height: 1.7;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  button {
    font-family: 'Inter', sans-serif;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.navBg};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.primary};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.primaryDark};
  }
`; 