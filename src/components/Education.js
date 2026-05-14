import React from 'react';
import './Education.css';

const COURSEWORK = [
  'Artificial Intelligence 1',
  'Artificial Intelligence 2',
  'Game Design',
  'Game Programming',
  'Software Engineering Design',
  'Computer Networks Applications',
  'Software Engineering Design 2',
  'Software Testing & Maintenance',
  'Information Security',
  'Cloud Computing',
  'Web Technologies',
  'Software Engineering Design 1',
  'Software Project & Project Management',
  'Software Requirements & Analysis',
  'Microprocessors & Microcomputers',
  'Database Management Systems',
  'Human-Computer Interface Design',
  'Operating Systems',
  'Theoretical Foundations of SE',
];

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2>Education</h2>

        <div className="education-card">
          <div className="education-header">
            <div>
              <h3 className="degree">Bachelor of Software Engineering, Co-op</h3>
              <p className="school">Western University &middot; London, ON</p>
            </div>
            <span className="period">2020 &mdash; 2024</span>
          </div>

          <div className="coursework">
            <h4>Relevant Coursework</h4>
            <ul className="coursework-grid">
              {COURSEWORK.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
