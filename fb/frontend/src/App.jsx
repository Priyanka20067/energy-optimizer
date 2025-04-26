import React, { useEffect, useState } from 'react';
import DeviceCard from './components/DeviceCard';
import SuggestionBox from './components/SuggestionBox';

function App() {
  const [usage, setUsage] = useState({});
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/usage')
      .then(res => res.json())
      .then(data => {
        setUsage(data);
        generateSuggestions(data);
      });
  }, []);

  const generateSuggestions = (data) => {
    const tips = [];
    if (data["AC"] > 3) tips.push("AC usage is high. Reduce usage time.");
    if (data["Light"] > 0.8) tips.push("Use sunlight during day.");
    setSuggestions(tips);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>⚡ Energy Dashboard</h1>
      <div style={{ display: 'flex', gap: '10px' }}>
        {Object.entries(usage).map(([device, usage]) => (
          <DeviceCard key={device} device={device} usage={usage} />
        ))}
      </div>
      <SuggestionBox suggestions={suggestions} />
    </div>
  );
}

export default App;
