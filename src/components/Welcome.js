import React from 'react';
import './Welcome.css';

function Welcome() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="welcome" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <span className="blob blob-1"></span>
        <span className="blob blob-2"></span>
        <span className="blob blob-3"></span>
      </div>

      <div className="hero-inner">
        <span className="hero-eyebrow">Portfolio · 2025</span>
        <h1 className="hero-title">
          Hey, I&rsquo;m Hamza
          <img
            src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3BleTZodTd1Mmh1ZGpkb2MxaGJpaGQ3c2Rrb3ZmdWZxa3Q3Mm90aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/w1OBpBd7kJqHrJnJ13/giphy.gif"
            alt="Waving Hand"
            className="waving-hand"
          />
        </h1>
        <p className="hero-subtitle">
          Junior Data Engineer · Software Engineer · AI &amp; ML Builder
        </p>
        <p className="hero-description">
          I build reliable data pipelines, thoughtful AI workflows, and
          interfaces people enjoy using. Take a look around &mdash; my work,
          experience, and skills are just a scroll away.
        </p>

        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => scrollTo('project')}>
            View My Work
          </button>
          <button className="btn btn-ghost" onClick={() => scrollTo('about')}>
            About Me
          </button>
        </div>
      </div>

      <button
        type="button"
        className="scroll-indicator"
        onClick={() => scrollTo('about')}
        aria-label="Scroll to about section"
      >
        <span className="scroll-mouse">
          <span className="scroll-dot"></span>
        </span>
        <span className="scroll-label">Scroll</span>
      </button>
    </section>
  );
}

export default Welcome;
