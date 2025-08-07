import React from 'react';
import './AboutMe.css';
import myImage from '../assets/images/IMG_2094.jpeg'

function AboutMe() {
  return (
    <section id = "about" className="about-me section">
      <h2>About Me</h2>
      <div className="content-box">
        <p>
        Hello, I'm Hamza Kamran. I'm a Junior Data Engineer and a graduate of Software Engineering from Western University, with a strong foundation in full-stack development and a growing interest in data-driven products.
<br /><br />In my current role, I work closely with the product team to build scalable data pipelines, internal tools, and dashboards that support key business decisions. I’ve developed interactive analytics solutions using Dash and Plotly, automated infrastructure with Docker and Terraform, and used BigQuery and other Google Cloud Platform services to process large datasets. Collaborating directly with product stakeholders has helped me understand how technical solutions can be shaped by user needs and product goals.
<br /><br />My technical experience includes working with Python, SQL, JavaScript, Java, TypeScript, C++, and C#. I'm also comfortable with tools and frameworks such as React, Node.js, Spring Boot, MongoDB, and Unity. During my previous software development internship, I focused on improving system stability and API performance for a widely used platform, which further developed my skills in debugging, testing, and building reliable systems.
I enjoy solving problems that have real impact and building software that is both technically sound and user-focused.</p>
        <img src={myImage} alt="About Me" className="about-image" />
      </div>
    </section>
  );
}

export default AboutMe;
