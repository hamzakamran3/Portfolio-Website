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
              Hello, I&rsquo;m <strong>Hamza Kamran</strong>. I&rsquo;m a Junior
              Data Engineer and a graduate of Software Engineering from Western
              University, with a strong foundation in full-stack development and
              a growing interest in data-driven products.
            </p>
            <p>
              In my current role I work closely with the product team to build
              scalable data pipelines, internal tools, and dashboards that
              support key business decisions. I&rsquo;ve developed interactive
              analytics solutions using Dash and Plotly, automated infrastructure
              with Docker and Terraform, and used BigQuery and other Google
              Cloud Platform services to process large datasets.
            </p>
            <p>
              My technical experience includes Python, SQL, JavaScript, Java,
              TypeScript, C++, and C#. I&rsquo;m also comfortable with frameworks
              such as React, Node.js, Spring Boot, and MongoDB. I enjoy solving
              problems with real impact and building software that is both
              technically sound and user-focused.
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
