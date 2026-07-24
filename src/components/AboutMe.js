import React from 'react';
import './AboutMe.css';
import myImage from '../assets/images/IMG_2094.jpeg';

function AboutMe() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Me</h2>

        <div className="about-grid">
          <div className="about-image-wrap">
            <img src={myImage} alt="Hamza Kamran" className="about-image" />
          </div>

          <div className="about-text">
            <p>
              Hello, I&rsquo;m <strong>Hamza Kamran</strong> &mdash; a Data
              Engineer focused on AI, ML, and the systems that make them
              dependable in production. I graduated in Software Engineering
              from Western University, and I sit comfortably across the stack:
              from the pipelines and models on the back end to the dashboards
              and tools that put those insights in front of real users.
            </p>
            <p>
              In my current role I design and own end-to-end data and AI/LLM
              pipelines &mdash; ingestion, retrieval over large Elasticsearch
              indices, orchestration in Airflow, and deployment on Google
              Cloud Platform. I prototype agentic AI workflows to automate
              research, extraction, and classification, and I treat
              evaluation, monitoring, and cost/latency trade-offs as
              first-class concerns rather than afterthoughts.
            </p>
            <p>
              I work closely with product, and I think like a product
              engineer: shipping reliable analytics dashboards, scoping ML
              features around the decisions they need to power, and asking
              &ldquo;does this actually move the metric?&rdquo; before adding
              complexity. My toolkit spans Python, SQL, scikit-learn, LLM and
              retrieval pipelines, Airflow, BigQuery, Docker, Terraform, and
              Cloud Run &mdash; alongside React and Node.js for when an idea
              needs an interface to come alive.
            </p>

            <div className="about-stats">
              <div className="about-stat">
                <span className="stat-value">3+</span>
                <span className="stat-label">Years building software</span>
              </div>
              <div className="about-stat">
                <span className="stat-value">5,000+</span>
                <span className="stat-label">Daily pipeline results</span>
              </div>
              <div className="about-stat">
                <span className="stat-value">50+</span>
                <span className="stat-label">Hours / month saved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
