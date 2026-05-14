import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Welcome from './components/Welcome';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('welcome');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('main section[id]');

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionId = section.id;

        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(sectionId);
        }
      });

      if (window.scrollY === 0) {
        setActiveSection('welcome');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      <main>
        <Welcome />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
      </main>

      <Footer />
    </div>
  );
}

export default App;
