import React from 'react';
import Navbar from './Navbar';
import './Header.css';

const Header = () => {
  return (
    <header className="header-hero">
      <Navbar />
      {/* Animated background */}
      <div className="header-bg-animation"></div>
      {/* Name and quote container */}
      <div className="header-content">
        <div className="name-animation-container">
          <div className="name-bg-animation"></div>
          <h1 className="header-name">
            Amogh B Achar
          </h1>
        </div>
        <p className="header-quote">
          "Turning ideas into reality, one line of code at a time."
        </p>
      </div>
    </header>
  );
};

export default Header;