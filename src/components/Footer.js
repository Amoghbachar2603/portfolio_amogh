import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white text-center" style={{ minHeight: "24px", padding: "0.2rem 0" }}>
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
        {/* Left: Copyright */}
        <p className="mb-2 mb-md-0" style={{ fontSize: "0.9rem", letterSpacing: "0.5px" }}>
          © {new Date().getFullYear()} Amogh B Achar
        </p>
        {/* Center: Social Icons */}
        <div>
          <a
            href="https://github.com/amoghbachar2603"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
            aria-label="GitHub"
          >
            <i className="bi bi-github" style={{ fontSize: "1.5rem" }}></i>
          </a>
          <a
            href="https://www.linkedin.com/in/Amogh-B-Achar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin" style={{ fontSize: "1.5rem" }}></i>
          </a>
          <a
            href="https://instagram.com/your-instagram-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
            aria-label="Instagram"
          >
            <i className="bi bi-instagram" style={{ fontSize: "1.5rem" }}></i>
          </a>
        </div>
        {/* Right: Made by */}
        <p className="mb-0 d-none d-md-block" style={{ fontSize: "0.9rem" }}>
          Made with <span style={{ color: "#e25555" }}>♥</span> by Amogh
        </p>
      </div>
    </footer>
  );
};

export default Footer;