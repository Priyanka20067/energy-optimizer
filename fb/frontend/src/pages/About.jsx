import React from 'react';
import '../styles/About.css'; 

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-heading">
        <span className="plant-emoji">🌱</span>
        About Smart Energy Optimizer
      </h2>
      
      <p className="about-description">
        The Smart Energy Optimizer is a student-driven <span className="highlight">AI + IoT project</span> developed 
        as part of the Nan Mudhalvan Phase 2 initiative. It focuses on promoting sustainable energy consumption 
        in smart buildings by integrating:
      </p>
      
      <ul className="feature-list">
        <li>
          <span className="emoji">⚡</span>
          <span className="feature-text">Real-time monitoring of energy usage</span>
        </li>
        <li>
          <span className="emoji">🧠</span>
          <span className="feature-text">AI-powered suggestions for energy saving</span>
        </li>
        <li>
          <span className="emoji">📊</span>
          <span className="feature-text">Dashboard with weekly usage analytics</span>
        </li>
        <li>
          <span className="emoji">🔌</span>
          <span className="feature-text">Optional integration with IoT sensors</span>
        </li>
      </ul>
      
      <p className="about-footer">
        This project is built using <span className="highlight">React</span>, 
        <span className="highlight"> Flask</span>, and <span className="highlight">machine learning</span> with 
        an aim to help individuals and organizations reduce power consumption and become more 
        environmentally responsible.
      </p>
    </div>
  );
};

export default About;