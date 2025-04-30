import React, { useState } from 'react';

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
    <div style={{ padding: '30px', maxWidth: '600px', margin: 'auto' }}>
      <h2>🧠 AI Energy Saving Advisor</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="number"
          name="ac"
          value={form.ac}
          onChange={handleChange}
          placeholder="AC usage in kWh"
          required
        />
        <input
          type="number"
          name="fan"
          value={form.fan}
          onChange={handleChange}
          placeholder="Fan usage in kWh"
          required
        />
        <input
          type="number"
          name="light"
          value={form.light}
          onChange={handleChange}
          placeholder="Light usage in kWh"
          required
        />
        <button type="submit" style={{
          padding: '10px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          {loading ? 'Predicting...' : 'Get Smart Advice'}
        </button>
      </form>

      {advice && (
        <div style={{ marginTop: '20px', backgroundColor: '#f0f0f0', padding: '15px', borderRadius: '8px' }}>
          <strong>AI Suggestion:</strong> {advice}
        </div>
      )}
    </div>
  );
};

export default AIAdviceForm;
