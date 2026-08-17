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
              Hi, I&rsquo;m <strong>Hamza Kamran</strong>, a data engineer. I
              build the pipelines, models, and datasets that turn messy raw
              data into something clean and reliable to work with. I studied
              Software Engineering at Western University, and I&rsquo;m happy
              working anywhere from the ingestion layer up to the tables and
              dashboards that sit on top.
            </p>
            <p>
              Most of my day is spent designing and maintaining data pipelines.
              I handle ingestion, transformation, and modeling, orchestrate it
              all with Airflow, and run it on Google Cloud with BigQuery as the
              warehouse. I care a lot about data quality, so I put real effort
              into testing, monitoring, and documentation, and I keep an eye on
              cost and performance instead of letting them creep up unnoticed.
            </p>
            <p>
              I also build out AI and LLM workflows where they earn their keep,
              mostly for research, extraction, and classification on top of the
              data I already manage. My main tools are Python, SQL, data
              modeling, Airflow, BigQuery, Docker, and Terraform, with React and
              Node.js on hand when something needs a front end.
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
