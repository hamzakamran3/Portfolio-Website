import React from 'react';
import './Experience.css';

const EXPERIENCES = [
  {
    role: 'Junior Data Engineer',
    company: 'Citylitics',
    location: 'Toronto, ON',
    period: 'May 2025 — Present',
    summary: 'Build AI/LLM data pipelines and analytics dashboards for enterprise clients, powering reliable reporting and clearer visibility into product performance.',
    tags: ['Python', 'SQL', 'Airflow', 'Elasticsearch', 'LLM', 'AI Agents', 'Dash', 'Plotly', 'Docker', 'Cloud Run'],
  },
  {
    role: 'AI Automation Consultant (Freelance)',
    company: 'Onshore Advisors',
    location: 'Mississauga, ON',
    period: 'Apr 2025 — Sep 2025',
    summary: 'Designed and prototyped an AI client assistant and streamlined onboarding workflows across engineering and operations.',
    tags: ['Figma', 'Jira', 'Confluence', 'Product Requirements', 'AI Automation', 'Workflow Optimization'],
  },
  {
    role: 'Software Development Intern (Co-op)',
    company: 'J.D. Power',
    location: 'London, ON',
    period: 'May 2023 — Aug 2024',
    summary: 'Shipped full-stack features across engineering and QA, optimizing React front-end performance and Java (Spring Boot) backend APIs.',
    tags: ['JavaScript', 'React', 'Java', 'Spring Boot', 'SQL', 'TypeScript'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Swimingo',
    location: 'Toronto, ON',
    period: 'May 2022 — Aug 2022',
    summary: 'Built and deployed a full-stack MEAN lesson-booking platform with optimized MySQL queries and GCP auto-scaling.',
    tags: ['MongoDB', 'Express', 'Angular', 'Node.js', 'MySQL', 'GCP', 'Agile'],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2>Experience</h2>

        <div className="experience-timeline">
          {EXPERIENCES.map((exp, idx) => (
            <article className="experience-item" key={idx}>
              <div className="timeline-marker" aria-hidden="true">
                <span className="timeline-dot"></span>
                {idx < EXPERIENCES.length - 1 && <span className="timeline-line"></span>}
              </div>

              <div className="experience-card">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-role">{exp.role}</h3>
                    <p className="experience-meta">
                      <span className="experience-company">{exp.company}</span>
                      <span className="experience-divider">·</span>
                      <span className="experience-location">{exp.location}</span>
                    </p>
                  </div>
                  <span className="experience-period">{exp.period}</span>
                </div>

                <p className="experience-summary">{exp.summary}</p>

                <div className="experience-tags">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
