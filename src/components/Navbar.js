import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top shadow"
      style={{
        backgroundColor: "#111",
        borderBottom: "0.1vw solid #1976d2",
        minHeight: "3vw", // Even smaller height
        paddingTop: "0vw",   // No top padding
        paddingBottom: "0vw" // No bottom padding
      }}
    >
      <div className="container-fluid" style={{ paddingLeft: "1vw", paddingRight: "1vw" }}>
        <a
          className="navbar-brand fw-bold text-primary"
          href="#header"
          style={{
            letterSpacing: "0.12vw",
            fontSize: "1.1vw",
            minWidth: 0
          }}
        >
          My Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ fontSize: "1.1vw", padding: "0.1vw 0.5vw" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto d-flex align-items-center" style={{ gap: "0.5vw" }}>
            <li className="nav-item">
              <Link className="nav-link nav-apple" to="about" smooth={true} duration={300} style={{ fontSize: "0.8vw" }}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-apple" to="skills" smooth={true} duration={300} style={{ fontSize: "0.8vw" }}>Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-apple" to="projects" smooth={true} duration={300} style={{ fontSize: "0.8vw" }}>Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-apple" to="contact" smooth={true} duration={300} style={{ fontSize: "0.8vw" }}>Contact</Link>
            </li>
            <li className="nav-item">
              <a
                href="/resume.pdf"
                className="btn resume-btn ms-3"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "0.8vw", padding: "0.1vw 0.6vw" }}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Responsive styles */}
      <style>{`
        @media (max-width: 600px) {
          .navbar {
            min-height: 7vw !important;
            padding-top: 0vw !important;
            padding-bottom: 0vw !important;
          }
          .navbar-brand {
            font-size: 3vw !important;
            padding-left: 1vw !important;
          }
          .navbar-nav {
            gap: 1vw !important;
          }
          .nav-link, .resume-btn {
            font-size: 2vw !important;
            padding: 0.7vw 1.5vw !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;