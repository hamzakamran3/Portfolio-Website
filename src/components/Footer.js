import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h4>Hamza&nbsp;Kamran</h4>
        <p>Portfolio Website</p>
      </div>

      <div className="footer-column">
        <h4>Explore</h4>
        <ul>
          <li><a href="#welcome">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Contact</h4>
        <div className="socials">
          <a href="https://github.com/hamzakamran3" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="social-icon" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/hamza-kamran-185982216/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" /> LinkedIn
          </a>
          <a href="mailto:hkamran002@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="social-icon" /> Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
