import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Welcome from './components/Welcome';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('welcome');

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionId = section.id;

        // If the section is in the viewport (with some threshold)
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(sectionId);
        }
      });

      // Handle case when we're at the very top of the page
      if (window.scrollY === 0) {
        setActiveSection('welcome');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <SocialLinks />

      <main>
        <section id="welcome" className="section active">
          <Welcome />
        </section>

        <section id="about" className="section">
          <About />
        </section>

        <section id="education" className="section">
          <Education />
        </section>

        <section id="experience" className="section">
          <Experience />
        </section>

        <section id="project" className="section">
          <Projects />
        </section>

        <section id="skills" className="section">
          <Skills />
        </section>

      </main>
      <section id="footer" className="footer">
          <Footer />
        </section>
    </div>
  );
}

export default App;
