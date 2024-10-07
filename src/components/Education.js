import React from 'react';
import './Education.css';  // Apply the same styles

function Education() {
  return (
    <section id = "education" className="education section">
      <h2>Education</h2>
      <div className="content-box">
        <p>
        <b>Bachelor of Software Engineering with Co-op - Western University (2020-2024)</b><br />
        <b>Relevent Coursework:</b><br />
        <div className="content-course">
        <p>
                                   <br />
                                   Artificial Intelligence 1<br />
                                   Artificial Intelligence 2<br />
                                   Game Design<br />
                                   Game Programming<br />
                                   Software Engineering Design <br />
                                   Computer Networks Applications <br />
                                   Software Engineering Design 2<br />
                                   Software Testing and Maintenance<br />
                                   Information Security<br />
                                   Cloud Computing<br />
                                   Web Technologies<br />
                                   </p>
                                   <p>
                                   <br />
                                   Software Engineering Design 1<br />
                                   Software Project and Project Management<br />
                                   Software Requirement and Analysis<br />
                                   Microprocessors and Microcomp<br />
                                   Database Management Systems<br />
                                   Human-Computer Interface Design<br />
                                   Operating Systems For Software Engineering<br />
                                   Theoretical Foundations of Software Engineering<br />
                                   </p>
                                   <br />
                                   </div>                           
        </p>
        <div className="education-image">
        <img
          src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExN28yNGE0dXdubGxmazFsZmZwbTV0bXAwOWU5NWdnaDE4dWFleG40diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EYngdnMrkj9Aq4oND0/giphy.gif"
          alt="Exciting Animation"
          className="welcome-gif"
        />
        </div>
      </div>
    </section>
  );
}

export default Education;