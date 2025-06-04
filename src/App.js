import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-vh-100">
      <Header />
      <About />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;