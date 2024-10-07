import { useEffect } from 'react';
import React from 'react';
import './Welcome.css';

function Welcome() {
  useEffect(() => {
    // Scroll to a specific Y position within the Welcome section
    window.scrollTo({
      top: 200, // 200px down from the top of the page
      behavior: 'smooth', 
    });
  }, []);
  return (
    <section id="welcome" className="home">
      <div className="content-container">
        <div className="text-left">
          <h1>
            Hey, I'm Hamza
            <img 
              src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3BleTZodTd1Mmh1ZGpkb2MxaGJpaGQ3c2Rrb3ZmdWZxa3Q3Mm90aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/w1OBpBd7kJqHrJnJ13/giphy.gif"
              alt="Waving Hand" 
              className="waving-hand"
            />
          </h1>
        </div>
        <div className="text-right">
          <p>Discover my work, skills, and passion for development below.</p>
          <div className="animated-arrow">
            <img 
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnN0aTViZ3IwZ3d1cnZrZ2tlNjI4YjZiYWg5dGN0cWhsc2hydGxleiZlcD12MV9naWZzX3NlYXJjaCZjdD1z/5QQ6FpAQ0syYLkONPB/giphy.gif" 
              alt="Animated Arrow" 
              className="arrow-gif" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
