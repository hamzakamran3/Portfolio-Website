import React from 'react';
import './Skills.css';
import programmingImage from '../assets/images/programming.png';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skills-category">
          <h3>Languages</h3>
          <div className="skills-list">
            <span className="skill-tag">Java</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">Python</span>
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">C/C++</span>
            <span className="skill-tag">C#</span>
            <span className="skill-tag">SQL</span>
            <span className="skill-tag">HTML</span>
            <span className="skill-tag">CSS</span>
            <span className="skill-tag">R</span>
          </div>
        </div>

        <div className="skills-category">
          <h3>Frameworks/Libraries</h3>
          <div className="skills-list">
            <span className="skill-tag">React</span>
            <span className="skill-tag">Angular</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">Express</span>
            <span className="skill-tag">Redux</span>
            <span className="skill-tag">Next.js</span>
            <span className="skill-tag">JavaFX</span>
            <span className="skill-tag">Dash</span>
            <span className="skill-tag">Plotly</span>
            <span className="skill-tag">PyTorch</span>
            <span className="skill-tag">TensorFlow</span>
          </div>
        </div>

        <div className="skills-category">
          <h3>Tools/Technologies</h3>
          <div className="skills-list">
            <span className="skill-tag">Git</span>
            <span className="skill-tag">Docker</span>
            <span className="skill-tag">MongoDB</span>
            <span className="skill-tag">MySQL</span>
            <span className="skill-tag">Google Cloud</span>
            <span className="skill-tag">BigQuery</span>
            <span className="skill-tag">Cloud Run</span>
            <span className="skill-tag">AWS</span>
            <span className="skill-tag">Power BI</span>
            <span className="skill-tag">REST APIs</span>
            <span className="skill-tag">GraphQL</span>
            <span className="skill-tag">Jira</span>
            <span className="skill-tag">Confluence</span>
            <span className="skill-tag">Figma</span>
            <span className="skill-tag">Agile</span>
            <span className="skill-tag">Scrum</span>
          </div>
        </div>

        <div className="skills-category">
          <h3>Soft Skills</h3>
          <div className="skills-list">
            <span className="skill-tag">Communication</span>
            <span className="skill-tag">Teamwork</span>
            <span className="skill-tag">Problem Solving</span>
            <span className="skill-tag">Time Management</span>
            <span className="skill-tag">Leadership</span>
            <span className="skill-tag">Adaptability</span>
            <span className="skill-tag">Product Thinking</span>
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