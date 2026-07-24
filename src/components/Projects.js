import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import weatherAppImage from '../assets/images/Weather.png';
import unityImage from '../assets/images/unityImage.png';
import spotifyImage from '../assets/images/spotify.png';
import htcImage from '../assets/images/htc.png';
import marketPulseImage from '../assets/images/marketPulse.svg';

const PROJECTS = [
  {
    title: 'Market Pulse',
    description:
      'An end-to-end data platform that streams live market data through a real-time pipeline (Redpanda → DuckDB) with schema validation, dead-letter handling, and idempotent writes. dbt and Great Expectations enforce data quality, PySpark engineers rolling-volatility and cross-ticker features, and an Isolation Forest model surfaces anomalies via a FastAPI service. Airflow orchestrates hourly runs and daily drift checks, MLflow tracks experiments, and a Streamlit dashboard visualizes live feeds, anomalies, and system health.',
    technologies: ['Python', 'PySpark', 'dbt', 'DuckDB', 'Redpanda', 'Airflow', 'FastAPI', 'MLflow', 'scikit-learn', 'Streamlit'],
    image: marketPulseImage,
    link: 'https://github.com/hamzakamran3/market-pulse',
  },
  {
    title: 'Weather App',
    description:
      'A weather forecasting app using a real-time weather API. Users enter any city in the world to view the forecast for the next 5 days.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    image: weatherAppImage,
    link: 'https://hamzakamran3.github.io/hamzakamran3-5-Day-Weather-Forecast/',
  },
  {
    title: 'Music Website',
    description:
      'A Spotify-style platform with third-party auth, playlist creation and updates, song search, and YouTube playback.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript'],
    image: spotifyImage,
    link: null,
  },
  {
    title: 'Redemption Dungeons',
    description:
      'A 2-D third-person shooter built in Unity with 5 playable characters, distinct weapons, and 3 progressively harder levels.',
    technologies: ['Unity', 'C#', 'Game Design'],
    image: unityImage,
    link: null,
  },
  {
    title: 'Exercise Prescription App',
    description:
      'An app for hand therapy clinic patients to upload videos and follow at-home exercise plans, with a progress tracker for goals.',
    technologies: ['React Native', 'Node.js', 'MongoDB'],
    image: htcImage,
    link: null,
  },
];

const Projects = () => {
  return (
    <section id="project" className="projects-section">
      <div className="container">
        <h2>Projects</h2>

        <div className="project-grid">
          {PROJECTS.map((project, index) => {
            const CardTag = project.link ? 'a' : 'div';
            const cardProps = project.link
              ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
              : {};

            return (
              <CardTag
                className={`project-card ${project.link ? 'is-linked' : ''}`}
                key={index}
                {...cardProps}
              >
                <div className="project-thumb">
                  <img src={project.image} alt={project.title} />
                  {project.link && (
                    <span className="project-launch">
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </span>
                  )}
                </div>

                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </CardTag>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
