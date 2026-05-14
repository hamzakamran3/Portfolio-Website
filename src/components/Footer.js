import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="footer-logo">HK</span>
            <h4>Hamza Kamran</h4>
            <p>Junior Data Engineer &amp; Software Engineer building thoughtful, data-driven products.</p>
          </div>

          <div className="footer-column">
            <h5>Explore</h5>
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
            <h5>Connect</h5>
            <ul className="footer-socials">
              <li>
                <a href="https://github.com/hamzakamran3" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/hamza-kamran-185982216/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="mailto:hkamran002@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {currentYear} Hamza Kamran. All rights reserved.</span>
          <span>Designed &amp; built with React.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
