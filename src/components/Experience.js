import React from 'react';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      role: 'Software Development Intern',
      company: 'J.D. Power',
      period: 'May 2023 — September 2024',
      description: `Increased system stability by 15% for 5,000+ daily users by fixing critical bugs and adding key features. Improved page load speed by 25%, enhancing UX for 10,000+ monthly users, by optimizing HTML/CSS, JavaScript, and React.js. Improved API efficiency by 25% and reduced server response times by 20% by optimizing SQL queries and developing back-end APIs in Java with Spring Boot. Reduced production bugs by 15% by implementing Playwright tests with 95% coverage.`,
      tags: ['JavaScript', 'Java', 'TypeScript', 'React', 'MSSQL', 'Springboot', 'PlayWright', 'Node.JS'],
    },
    {
      role: 'Software Engineer Intern',
      company: 'Swimingo',
      period: 'May 2022 — August 2022',
      description: `Built and deployed a MEAN(MongoDB, Express, AngularJS, Node.js) stack lesson booking platform for a seed-stage startup, reducing manual bookings by 50% and increasing user satisfaction by 20%. Optimized MySQL queries, cutting lesson search and booking times by 30% for 2,000+ users. Implemented GCP auto-scaling and storage, reducing server downtime by 40% and lowering cloud costs by 20%.`,
      tags: ['MongoDB', 'Express', 'AngularJS', 'Node.js', 'MySQL', 'GCP'],
    },
    {
      role: 'Shipper/Receiver',
      company: 'Caliber Industrial Supply',
      period: 'May 2022 — September 2022',
      description: `Built a financial dashboard using Python, Pandas & Matplotlib, reducing report generation time by 30% for advisors. Analyzed 50K+ transactions in SQL, Excel & Power BI, identifying trends to improve client investment strategies. Developed a simple predictive model in Scikit-Learn, increasing the accuracy of client risk assessments by 15%.`,
      tags: ['Python', 'Pandas', 'Matplotlib', 'SQL', 'Excel', 'Power BI', 'Scikit-Learn']
    },

    // Add more experiences here...
  ];

  return (
    <section id="experience">
      <h2>Experience</h2>
      {experiences.map((experience, index) => (
        <div key={index} className="experience-item">
          <div className="experience-header">
            <span className="experience-period">{experience.period}</span>
            <span className="experience-role">
              {experience.role} · <span className="experience-company">{experience.company}</span>
            </span>
          </div>
          <p className="experience-description">{experience.description}</p>
          <div className="experience-tags">
            {experience.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Experience;