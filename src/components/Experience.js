import React from 'react';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      role: 'Software Development Intern',
      company: 'J.D. Power',
      period: 'May 2023 — September 2024',
      description: `Software sustain work for one of the company's larger projects as one of the main developers. Supported QA creating automated tests scripts in Playwright. Supported the DevOps for the projects. `,
      tags: ['JavaScript', 'Java', 'TypeScript', 'React', 'MSSQL', 'Springboot', 'PlayWright', 'Node.JS'],
    },
    {
      role: 'Administrative Assistant',
      company: 'OnShore Advisors',
      period: 'January 2018 — January 2019',
      description: `Worked on various Excel spreadsheets, maintained files and provided customer service`,
      tags: ['Microsoft Excel', 'Customer Service', 'Microsoft Powerpoint', 'Data Entry'],
    },
    {
      role: 'Shipper/Receiver',
      company: 'Caliber Industrial Supply',
      period: 'May 2022 — September 2022',
      description: `Monitored scheduled shipment dates to achieve timely delivery`,
      tags: ['Data Entry']
    },


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
