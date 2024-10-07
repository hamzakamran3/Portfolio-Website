import React from 'react';
import './Skills.css';
import programmingImage from '../assets/images/programming.png'

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skills-category">
          <h3>Languages</h3>
          <div className="skills-list">
            <span className="skill-tag">HTML</span>
            <span className="skill-tag">CSS</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">Java</span>
            <span className="skill-tag">Python</span>
            <span className="skill-tag">C#</span>
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">C/C++</span>
            <span className="skill-tag">SQL</span>
          </div>
        </div>
        <div className="skills-category">
          <h3>Frameworks/Libraries</h3>
          <div className="skills-list">
            <span className="skill-tag">React</span>
            <span className="skill-tag">Node</span>
            <span className="skill-tag">Express</span>
            <span className="skill-tag">JavaFX</span>
          </div>
        </div>
        <div className="skills-category">
          <h3>Tools/Technologies</h3>
          <div className="skills-list">
            <span className="skill-tag">AWS</span>
            <span className="skill-tag">MySQL</span>
            <span className="skill-tag">MSSQL</span>
            <span className="skill-tag">Unity Game Development</span>
            <span className="skill-tag">MongoDB</span>
            <span className="skill-tag">Postman</span>
            <span className="skill-tag">Git</span>
            <span className="skill-tag">GitHub</span>
            <span className="skill-tag">GitLab</span>
            <span className="skill-tag">Jira</span>
            <span className="skill-tag">Rest API</span>
            <span className="skill-tag">Confluence</span>
            <span className="skill-tag">MatLab</span>
          </div>
        </div>
        <div className="skills-image">
          <img src={programmingImage} alt="Skills illustration" />
        </div>
      </div>
    </section>
  );
}

export default Skills;