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
              Hello, I&rsquo;m <strong>Hamza Kamran</strong>, a Data Engineer
              focused on AI, ML, and the systems that keep them reliable in
              production. I studied Software Engineering at Western University,
              and I&rsquo;m comfortable across the stack, from the pipelines and
              models on the back end to the dashboards and tools people
              actually use.
            </p>
            <p>
              Right now I design and own end-to-end data and AI/LLM pipelines.
              That covers ingestion, retrieval over large Elasticsearch
              indices, orchestration in Airflow, and deployment on Google Cloud
              Platform. I also build agentic AI workflows to automate research,
              extraction, and classification, and I pay close attention to
              evaluation, monitoring, and the cost and latency trade-offs that
              tend to get ignored until they hurt.
            </p>
            <p>
              I work closely with product and try to think the way a product
              engineer does: ship analytics dashboards people can trust, scope
              ML features around the decisions they need to support, and make
              sure the added complexity is actually worth it. My toolkit spans
              Python, SQL, scikit-learn, LLM and retrieval pipelines, Airflow,
              BigQuery, Docker, Terraform, and Cloud Run, plus React and
              Node.js when an idea needs a front end to go with it.
            </p>

            <p>
              Outside of work, I like to play basketball, travel the world,
              and go on hikes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
