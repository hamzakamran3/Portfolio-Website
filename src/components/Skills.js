import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faBrain,
  faDatabase,
  faCloud,
  faChartLine,
  faToolbox,
} from '@fortawesome/free-solid-svg-icons';

const CATEGORIES = [
  {
    icon: faCode,
    title: 'Languages & Frameworks',
    skills: ['Python', 'SQL', 'Java', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Flask', 'Next.js'],
  },
  {
    icon: faBrain,
    title: 'ML & AI',
    skills: ['ML pipelines', 'Model training', 'Model monitoring', 'LLM pipelines', 'AI agents', 'Prompt engineering', 'scikit-learn', 'XGBoost'],
  },
  {
    icon: faDatabase,
    title: 'Data & Pipelines',
    skills: ['Airflow', 'BigQuery', 'ETL/ELT', 'Batch processing', 'Stream processing', 'Elasticsearch', 'MongoDB', 'NoSQL'],
  },
  {
    icon: faCloud,
    title: 'Cloud & Infrastructure',
    skills: ['Google Cloud Platform', 'AWS', 'Docker', 'Terraform', 'Cloud Run', 'REST APIs', 'Multi-cloud'],
  },
  {
    icon: faChartLine,
    title: 'Analytics & BI',
    skills: ['Dash', 'Plotly', 'Power BI', 'Dashboard development'],
  },
  {
    icon: faToolbox,
    title: 'Tooling & Delivery',
    skills: ['Git', 'CI/CD', 'MLOps', 'Agile/Scrum', 'Jira', 'Confluence', 'Figma'],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Skills</h2>

        <div className="skills-grid">
          {CATEGORIES.map((cat) => (
            <div className="skills-category" key={cat.title}>
              <div className="skills-category-header">
                <span className="skills-icon">
                  <FontAwesomeIcon icon={cat.icon} />
                </span>
                <h3>{cat.title}</h3>
              </div>
              <div className="skills-list">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
