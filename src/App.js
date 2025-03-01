// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router basename="/">
      <div>
        <Navbar />

        {/* Content Sections */}
        <div className="container">
          <section id="home">
            <Home />
          </section>
          <section id="education">
            <Education />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </div>
    </Router>
  );
}

export default App;
