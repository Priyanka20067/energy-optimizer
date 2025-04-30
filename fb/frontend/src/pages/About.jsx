import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: 'auto', fontFamily: 'Arial' }}>
      <h2>🌱 About Smart Energy Optimizer</h2>
      <p style={{ marginTop: '20px', lineHeight: '1.6' }}>
        The Smart Energy Optimizer is a student-driven AI + IoT project developed as part of the Nan Mudhalvan Phase 2 initiative.
        It focuses on promoting sustainable energy consumption in smart buildings by integrating:
      </p>
      <ul style={{ marginTop: '15px', lineHeight: '1.8' }}>
        <li>⚡ Real-time monitoring of energy usage</li>
        <li>🧠 AI-powered suggestions for energy saving</li>
        <li>📊 Dashboard with weekly usage analytics</li>
        <li>🔌 Optional integration with IoT sensors</li>
      </ul>
      <p style={{ marginTop: '20px' }}>
        This project is built using React, Flask, and machine learning with an aim to help individuals and organizations
        reduce power consumption and become more environmentally responsible.
      </p>
    </div>
  );
};

export default About;
