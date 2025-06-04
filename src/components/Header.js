import React from 'react';
import Navbar from './Navbar';
import './About.css';

const Header = () => {
  return (
    <header
      className="header-hero position-relative d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "100vh", width: "100vw", overflow: "hidden" }}
    >
      <Navbar />
      {/* Animated background */}
      <div className="header-bg-animation" style={{ zIndex: 0 }}></div>
      {/* Name and quote above animation */}
      <div
        className="header-name-container d-flex flex-column justify-content-center align-items-center"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 2, // Make sure this is above the animation
        }}
      >
        <h1
          className="header-name"
          style={{
            fontFamily: "'Poppins', 'Inter', 'Roboto', sans-serif",
            fontWeight: 700,
            letterSpacing: "2px",
            marginBottom: "1.5rem",
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            textAlign: "center",
            lineHeight: 1.1,
            background: "linear-gradient(90deg, #1976d2 0%, #64FFDA 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Amogh B Achar
        </h1>
        <p
          style={{
            color: "#64FFDA",
            fontStyle: "italic",
            fontSize: "clamp(1.1rem, 3vw, 2rem)",
            textAlign: "center",
            maxWidth: "90vw",
          }}
        >
          "Turning ideas into reality, one line of code at a time."
        </p>
      </div>
    </header>
  );
};

export default Header;