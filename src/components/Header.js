import React, { useEffect, useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const NAV_ITEMS = [
  { id: 'welcome', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'project', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
];

function Header({ activeSection, setActiveSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScroll = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(sectionId);
    setMobileOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        <button
          className="logo"
          onClick={() => handleScroll('welcome')}
          aria-label="Go to top"
        >
          <span className="logo-mark">HK</span>
          <span className="logo-text">Hamza Kamran</span>
        </button>

        <nav className={`nav ${mobileOpen ? 'is-open' : ''}`}>
          <ul>
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id}>
                <button
                  className={activeSection === id ? 'active' : ''}
                  onClick={() => handleScroll(id)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-socials">
          <a href="https://github.com/hamzakamran3" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/hamza-kamran-185982216/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:hkamran002@gmail.com" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>

        <button
          className={`menu-toggle ${mobileOpen ? 'is-open' : ''}`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
