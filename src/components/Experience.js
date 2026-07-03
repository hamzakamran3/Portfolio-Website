import React from 'react';
import './Experience.css';

const EXPERIENCES = [
  {
    role: 'Junior Data Engineer',
    company: 'Citylitics',
    location: 'Toronto, ON',
    period: 'May 2025 — Present',
    bullets: [
      'Owned data pipelines and dashboards for high-priority enterprise clients, ensuring clean data ingestion, accurate reporting, and reliable client deliverables.',
      'Developed and maintained AI/LLM pipelines using Python, SQL, and Airflow DAGs to process 5,000+ results daily, including Elasticsearch queries against indices of 100k+ documents to power the retrieval layer.',
      'Prototyped and evaluated agentic AI workflows to automate manual research, data extraction, and classification tasks, assessing trade-offs between cost, latency, and output quality.',
      'Built analytics dashboards with Python, Dash, Plotly, Docker, and Cloud Run, saving 50+ hours/month and giving teams clearer visibility into client and product performance.',
    ],
    tags: ['Python', 'SQL', 'Airflow', 'Elasticsearch', 'LLM', 'AI Agents', 'Dash', 'Plotly', 'Docker', 'Cloud Run'],
  },
  {
    role: 'AI Automation Consultant (Freelance)',
    company: 'Onshore Advisors',
    location: 'Mississauga, ON',
    period: 'Apr 2025 — Sep 2025',
    bullets: [
      'Defined product requirements, user workflows, and documentation in Jira to support onboarding automation; coordinated task sequencing and prioritization across engineering and operations.',
      'Created Figma prototypes for an AI-based client assistant designed to reduce FAQ/onboarding calls; validated with 6 internal stakeholders and 2 pilot clients before handoff to engineering.',
      'Documented workflows, acceptance criteria, and implementation notes in Confluence; consolidated onboarding processes into a dashboard, reducing onboarding time by 30%.',
    ],
    tags: ['Figma', 'Jira', 'Confluence', 'Product Requirements', 'AI Automation', 'Workflow Optimization'],
  },
  {
    role: 'Software Development Intern (Co-op)',
    company: 'J.D. Power',
    location: 'London, ON',
    period: 'May 2023 — Aug 2024',
    bullets: [
      'Collaborated across engineering and QA teams to scope, test, and ship features on a product used by 1,000+ daily users, contributing to multiple release cycles over a 16-month internship.',
      'Improved load speed by 25% for 1,000+ users by optimizing React.js and JavaScript.',
      'Reduced server response times by 20% by optimizing SQL queries and developing efficient backend APIs in Java (Spring Boot).',
    ],
    tags: ['JavaScript', 'React', 'Java', 'Spring Boot', 'SQL', 'TypeScript'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Swimingo',
    location: 'Toronto, ON',
    period: 'May 2022 — Aug 2022',
    bullets: [
      'Built and deployed a full-stack lesson booking platform using the MEAN stack (MongoDB, Express, Angular, Node.js), reducing manual bookings by 50% and improving user satisfaction by 20%.',
      'Optimized MySQL queries and implemented GCP auto-scaling, cutting load times by 30% and reducing cloud costs by 20%.',
      'Collaborated with a small agile team to scope and deliver features across the full development lifecycle, including code reviews, testing, and iterative releases.',
    ],
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

                <ul className="experience-bullets">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>

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
