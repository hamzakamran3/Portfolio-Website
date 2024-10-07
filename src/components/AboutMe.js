import React from 'react';
import './AboutMe.css';
import myImage from '../assets/images/IMG_2094.jpeg'

function AboutMe() {
  return (
    <section id = "about" className="about-me section">
      <h2>About Me</h2>
      <div className="content-box">
        <p>
Hello, I'm Hamza Kamran, a full-stack software developer who is looking to be a part of a motivated team. 
As of September 2024, I am in my final year of Software Engineering at Western University, and I couldn't be more excited for what the future holds.
In terms of programming, my education and co-op experience has greatly improved my skillset and made me in to a very confident developer. I have extensive knowledge on multiple languages such as: Java, JavaScript, Python, HTML/CSS, TypeScript, SQL, C# and C++.
<br /><br />I also have experience in databases such as: MSSQL and MySQL, and experience with a lot of other necessary tools such as GitHub, GitLab, React, Springboot, MongoDB, Unity Game Development, Node.Js and REST API.
My Co-op experience also greatly strengthend me as a debugger and even gave me some experience as a QA.
This has turned me into a very strong full stack developer that is ready to help out any team right away.
<br /><br />I love solving complex problems and building challenging web applications.
 Currently looking for opportunities in full-stack development!
</p>
        <img src={myImage} alt="About Me" className="about-image" />
      </div>
    </section>
  );
}

export default AboutMe;
