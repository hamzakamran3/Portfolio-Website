import React from 'react';
import './Header.css';
import SocialLinks from './SocialLinks';

function Header({ activeSection, setActiveSection }) {
  const handleScroll = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId); // Update the active section
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <button
              className={activeSection === 'welcome' ? 'active' : ''}
              onClick={() => handleScroll('welcome')}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className={activeSection === 'about' ? 'active' : ''}
              onClick={() => handleScroll('about')}
            >
              About
            </button>
          </li>
          <li>
            <button
              className={activeSection === 'education' ? 'active' : ''}
              onClick={() => handleScroll('education')}
            >
              Education
            </button>
          </li>
          <li>
            <button
              className={activeSection === 'experience' ? 'active' : ''}
              onClick={() => handleScroll('experience')}
            >
              Experience
            </button>
          </li>
          <li>
            <button
              className={activeSection === 'project' ? 'active' : ''}
              onClick={() => handleScroll('project')}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              className={activeSection === 'skills' ? 'active' : ''}
              onClick={() => handleScroll('skills')}
            >
              Skills
            </button>
          </li>
        </ul>
        <SocialLinks/>
      </nav>
    </header>
  );
}

export default Header;
