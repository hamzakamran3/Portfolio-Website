import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './SocialLinks.css';

function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://github.com/hamzakamran3" target="_blank" rel="noopener noreferrer" title="GitHub">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/hamza-kamran-185982216/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="mailto:hkamran002@gmail.com" title="Email">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  );
}

export default SocialLinks;
