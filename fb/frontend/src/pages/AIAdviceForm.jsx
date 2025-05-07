import React, { useState } from 'react';
import '../styles/AiAdviceForm.css';

const AIAdviceForm = () => {
  const [form, setForm] = useState({ ac: '', fan: '', light: '' });
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const response = await fetch("http://localhost:5000/api/advice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ac: parseFloat(form.ac),
        fan: parseFloat(form.fan),
        light: parseFloat(form.light)
      })
    });
    
    const data = await response.json();
    setAdvice(data.advice);
    setLoading(false);
  };
  
  return (
    <div className="energy-advisor-container">
      <div className="advisor-header">
        <h1><span className="brain-emoji">🧠</span> AI Energy Saving Advisor</h1>
        <p>Enter your device usage data to get smart recommendations</p>
      </div>
      
      <form className="advisor-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="ac">AC Usage (hours/day)</label>
          <input
            type="number"
            id="ac"
            name="ac"
            value={form.ac}
            onChange={handleChange}
            required
            min="0"
            max="24"
            step="0.5"
            placeholder="Ex: 5.5"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="fan">Fan Usage (hours/day)</label>
          <input
            type="number"
            id="fan"
            name="fan"
            value={form.fan}
            onChange={handleChange}
            required
            min="0"
            max="24"
            step="0.5"
            placeholder="Ex: 8"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="light">Light Usage (hours/day)</label>
          <input
            type="number"
            id="light"
            name="light"
            value={form.light}
            onChange={handleChange}
            required
            min="0"
            max="24"
            step="0.5"
            placeholder="Ex: 6"
          />
        </div>
        
        <button 
          type="submit" 
          className="submit-button" 
          disabled={loading}
        >
          {loading && <span className="loading-spinner"></span>}
          {loading ? 'Predicting...' : 'Get Smart Advice'}
        </button>
      </form>
      
      {advice && (
        <div className="advice-container">
          <div className="advice-header">AI Suggestion:</div>
          <div className="advice-text">{advice}</div>
        </div>
      )}
    </div>
  );
};

export default AIAdviceForm;