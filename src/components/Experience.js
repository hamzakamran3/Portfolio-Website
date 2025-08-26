import React from 'react';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      role: 'Junior Data Engineer',
      company: 'Citylitics',
      period: 'May 2025 — Present',
      description: `Increased internal data pipeline efficiency by 40% through optimized SQL queries and automation of client-specific data outputs. Built and containerized interactive dashboards with Python, Dash, Plotly, and Docker, saving 50+ hours/month and supporting faster product decisions. Developed an AI-powered customer-facing chatbot using Python and NLP tools, increasing user engagement by 25%. Debugged and maintained Cloud Run apps through log analysis and deployed Dockerized infrastructure updates using Terraform.`,
      tags: ['Python', 'SQL', 'Dash', 'Plotly', 'Docker', 'Cloud Run', 'Terraform'],
    },
    {
      role: 'Product Strategy & Automation Consultant (Freelance)',
      company: 'Onshore Advisors',
      period: 'Apr 2025 — August 2025',
      description: `Consolidated systems into a centralized dashboard, reducing onboarding time by 30%. Prototyped an AI-based client assistant using Figma to handle FAQs/onboarding and reduce manual calls. Automated key client lifecycle steps and documented workflows in Confluence, increasing overall process efficiency by 25% and improving user experience. Defined product requirements and managed tasks through Jira to ensure progress and visibility on workflow improvements designed for future scalability.`,
      tags: ['Figma', 'Confluence', 'Jira', 'AI Automation', 'Dashboard Development', 'Workflow Optimization', 'Process Improvement']    
    },
    {
      role: 'Software Development Intern',
      company: 'J.D. Power',
      period: 'May 2023 — September 2024',
      description: `Increased system stability by 15% for 5,000+ daily users by fixing critical bugs and adding key features. Improved page load speed by 25%, enhancing UX for 10,000+ monthly users, by optimizing HTML/CSS, JavaScript, and React.js. Improved API efficiency by 25% and reduced server response times by 20% by optimizing SQL queries and developing back-end APIs in Java with Spring Boot. Reduced production bugs by 15% by implementing Playwright tests with 95% coverage.`,
      tags: ['JavaScript', 'Java', 'TypeScript', 'React', 'MSSQL', 'Springboot', 'PlayWright', 'Node.JS'],
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