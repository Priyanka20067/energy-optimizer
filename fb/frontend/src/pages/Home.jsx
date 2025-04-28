import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>

      {/* Hero Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
        padding: '80px 20px',
        textAlign: 'center',
        color: '#fff'
      }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>🌍 Smart Energy Optimizer</h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '30px' }}>
          Power your future. Save Energy Today!
        </p>
        <Link to="/login">
          <button style={{
            padding: '12px 28px',
            fontSize: '1.2rem',
            backgroundColor: '#333',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}>
            🚀 Get Started
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>✨ Core Features</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '30px' }}>
          <FeatureCard title="Real-Time Monitoring" description="Track your energy usage live, device-by-device." />
          <FeatureCard title="AI Smart Suggestions" description="Get personalized energy-saving tips automatically." />
          <FeatureCard title="Weekly Reports" description="Analyze your habits with easy-to-read charts." />
          <FeatureCard title="Secure Login" description="Your dashboard, your data — protected always." />
        </div>
      </section>

      {/* How it Works */}
      <section style={{ padding: '60px 20px', background: '#f5f5f5' }}>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '40px' }}>⚙️ How It Works</h2>
        <ol style={{ fontSize: '1.2rem', maxWidth: '800px', margin: 'auto', color: '#555' }}>
          <li>Connect your home devices.</li>
          <li>Monitor real-time energy usage via dashboard.</li>
          <li>Receive smart AI suggestions daily.</li>
          <li>Track your weekly savings!</li>
        </ol>
      </section>

      {/* Testimonials Section */}
      <section style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>💬 What Our Users Say</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '30px' }}>
          <TestimonialCard
            name="Priya S."
            feedback="Reduced my electricity bill by 20%! The AI tips are very practical and easy to follow."
          />
          <TestimonialCard
            name="Ramesh K."
            feedback="Perfect tool for office energy management. Highly recommend for small businesses too!"
          />
          <TestimonialCard
            name="Swetha M."
            feedback="Simple, effective, and free. Love the dashboard charts!"
          />
        </div>
      </section>

      {/* About Us Section */}
      <section style={{ padding: '60px 20px', background: '#e0f7fa' }}>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '20px' }}>🌱 About Us</h2>
        <p style={{ fontSize: '1.2rem', maxWidth: '900px', margin: 'auto', color: '#333', textAlign: 'center' }}>
          Smart Energy Optimizer is a student-driven project developed for the Nan Mudhalvan 2025 program.
          Our mission is to encourage sustainable energy habits through simple, AI-powered technology for every home and office.
        </p>
      </section>

      {/* Call to Action */}
      <section style={{ padding: '50px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Ready to start your energy-saving journey?</h2>
        <Link to="/login">
          <button style={{
            padding: '14px 28px',
            fontSize: '1.2rem',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}>
            🚀 Login Now
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer style={{ marginTop: '60px', padding: '20px', backgroundColor: '#333', color: '#ccc', textAlign: 'center', fontSize: '0.9rem' }}>
        © 2025 Smart Energy Optimizer | Developed for Nan Mudhalvan by [Your Name]
      </footer>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ title, description }) {
  return (
    <div style={{
      width: '250px',
      padding: '20px',
      borderRadius: '10px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0px 2px 8px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ marginBottom: '10px' }}>{title}</h3>
      <p style={{ fontSize: '1rem', color: '#666' }}>{description}</p>
    </div>
  );
}

// Testimonial Card Component
function TestimonialCard({ name, feedback }) {
  return (
    <div style={{
      width: '300px',
      padding: '20px',
      borderRadius: '10px',
      backgroundColor: '#fafafa',
      boxShadow: '0px 2px 10px rgba(0,0,0,0.1)'
    }}>
      <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '15px' }}>"{feedback}"</p>
      <h4 style={{ color: '#333' }}>- {name}</h4>
    </div>
  );
}

export default Home;
