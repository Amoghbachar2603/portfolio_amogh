import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top shadow"
      style={{
        backgroundColor: "#111",
        borderBottom: "0.1vw solid #1976d2",
      }}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand fw-bold text-primary"
          href="#header"
        >
          My Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="about" 
                smooth={true} 
                duration={300}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="skills" 
                smooth={true} 
                duration={300}
                onClick={closeMenu}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="projects" 
                smooth={true} 
                duration={300}
                onClick={closeMenu}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="contact" 
                smooth={true} 
                duration={300}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="/resume.pdf"
                className="btn resume-btn ms-lg-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Responsive styles */}
      <style>{`
        .navbar {
          padding: 0.2rem 1rem;
          transition: all 0.3s ease;
          min-height: 3rem;
          backdrop-filter: blur(8px);
          background-color: rgba(17, 17, 17, 0.85) !important;
          border-bottom: 1px solid rgba(25, 118, 210, 0.3);
        }
        
        .navbar-brand {
          font-size: 1.1rem;
          padding: 0;
          letter-spacing: 0.5px;
        }

        .nav-link {
          font-size: 0.9rem;
          padding: 0.25rem 0.7rem !important;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 1px;
          background: #1976d2;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-link:hover::after {
          width: 80%;
        }

        .resume-btn {
          font-size: 0.9rem;
          padding: 0.25rem 0.7rem;
          border: 1px solid #1976d2;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .resume-btn:hover {
          background: rgba(25, 118, 210, 0.1);
          transform: translateY(-1px);
        }

        @media (max-width: 991px) {
          .navbar {
            padding: 0.2rem 0.5rem;
            min-height: 2.8rem;
          }

          .navbar-collapse {
            background-color: rgba(17, 17, 17, 0.95);
            backdrop-filter: blur(8px);
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            padding: 0.5rem;
            border-bottom: 1px solid rgba(25, 118, 210, 0.3);
            transition: all 0.3s ease;
          }

          .navbar-nav {
            gap: 0.2rem;
            text-align: center;
          }

          .nav-link {
            padding: 0.4rem !important;
            font-size: 0.95rem;
          }

          .nav-link::after {
            display: none;
          }

          .resume-btn {
            margin: 0.2rem 0;
            width: 100%;
            text-align: center;
          }
        }

        @media (max-width: 576px) {
          .navbar {
            min-height: 2.6rem;
          }
          
          .navbar-brand {
            font-size: 1rem;
          }

          .nav-link {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;