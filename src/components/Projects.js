import React from 'react';
import './Projects.css';

// Import local images
import weatherAppImage from '../assets/images/Weather.png';
import unityImage from '../assets/images/unityImage.png'
import spotifyImage from '../assets/images/spotify.png'
import htcImage from '../assets/images/htc.png'

const projectsData = [

  {
    title: 'Weather App',
    description: 'A weather forecasting app using real-time weather API. The user can enter any city in the world and it will return the forecast for the next 5 days.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    image: weatherAppImage,  // Local image
    link: 'https://hamzakamran3.github.io/hamzakamran3-5-Day-Weather-Forecast/'
  },
  {
    title: 'Music Website',
    description: 'Created a Spotify-like website where you are able to create accounts, sign into accounts using a 3rd party/regular authentication, create/update playlists with numerous songs, search for songs and play them on YouTube',
    technologies: ['JavaScript', 'HTML', 'CSS', 'React', 'MongoDB', 'Express'],
    image: spotifyImage,  // Local image
    link: null
  },
  {
    title: 'Redemption Dungeons Game',
    description: 'Created a 2-D 3rd person shooting game where the user has a choice of 5 different characters with different weapons. They would then fight 3 different enemies at 3 different levels. The user wins by defeating all levels.',
    technologies: ['Unity Game Development', 'C#'],
    image: unityImage,  // Local image
    link: null
  },
  {
    title: 'Exercise Prescription App for Hand Therapy Clinic (In Progress)',
    description: 'An app for patients at the clinic to upload videos of themselves to watch later at home, there will also be a progress bar for them to see their achievements.',
    technologies: ['Current project: TBD'],
    image: htcImage,  // Local image
    link: null
  },
];

const Projects = () => {
  return (
    <section id="project" className="section">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectsData.map((project, index) => (
          <div className="project-item" key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} className="project-thumbnail" />
            </a>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p> {project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
