import React, { useEffect, useState } from 'react';
import DeviceCard from '../components/DeviceCard';
import SuggestionBox from '../components/SuggestionBox';
import EnergyChart from '../components/EnergyChart';

function Dashboard() {
  const [usage, setUsage] = useState({});
  const [weeklyData, setWeeklyData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalConsumption, setTotalConsumption] = useState(0);

  useEffect(() => {
    Promise.all([
      fetch('http://127.0.0.1:5000/api/usage').then(res => res.json()),
      fetch('http://127.0.0.1:5000/api/weekly').then(res => res.json())
    ]).then(([usageData, weeklyData]) => {
      setUsage(usageData);
      setWeeklyData(weeklyData);
      generateSuggestions(usageData);
      calculateTotalConsumption(usageData);
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:5000/api/usage")
        .then(res => res.json())
        .then(data => {
          setUsage(data);
          calculateTotalConsumption(data);
          generateSuggestions(data);
        });
    }, 5000); // Refresh every 5 seconds
  
    return () => clearInterval(interval);
  }, []);
  

  const generateSuggestions = (data) => {
    const tips = [];
    if (data["AC"] > 3) tips.push("⚡ AC usage is high. Try reducing AC run time during day.");
    if (data["Fan"] > 1) tips.push("🔄 Fan speed setting can be optimized.");
    if (data["Light"] > 0.8) tips.push("💡 Use natural sunlight instead of electric light during day.");
    if (Object.keys(data).length === 0) tips.push("✅ Great job! Very low energy usage.");
    setSuggestions(tips);
  };

  const calculateTotalConsumption = (data) => {
    const total = Object.values(data).reduce((acc, curr) => acc + curr, 0);
    setTotalConsumption(total.toFixed(2));
  };

  const findHighestDevice = (devices) => {
    let maxDevice = "";
    let maxUsage = 0;
    for (let device in devices) {
      if (devices[device] > maxUsage) {
        maxUsage = devices[device];
        maxDevice = device;
      }
    }
    return maxDevice || "None";
  };

  if (loading) return <div style={{ padding: '20px', textAlign: 'center', fontSize: '1.2rem' }}>Loading Dashboard...</div>;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '20px' }}>⚡ Smart Energy Usage Dashboard</h1>

      {/* Total Consumption Card */}
      <div style={{
        background: '#d4fc79',
        backgroundImage: 'linear-gradient(0deg, #d4fc79 0%, #96e6a1 100%)',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
        marginBottom: '30px'
      }}>
        <h2 style={{ margin: 0, fontSize: '2rem' }}>Total Consumption</h2>
        <p style={{ fontSize: '1.5rem', marginTop: '10px' }}>{totalConsumption} kWh</p>
      </div>

      {/* Device Usage Cards */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginBottom: '40px' }}>
        {Object.entries(usage).map(([device, kwh]) => (
          <DeviceCard key={device} device={device} usage={kwh} />
        ))}
      </div>

      {/* AI Suggestions Box */}
      <div style={{
        background: '#f0f8ff',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '40px'
      }}>
        <SuggestionBox suggestions={suggestions} />
      </div>

      {/* Weekly Energy Chart */}
      <div style={{ marginBottom: '40px' }}>
        <EnergyChart data={weeklyData} />
      </div>

      {/* Daily Summary */}
      <div style={{
        marginTop: '20px',
        background: '#ffe0e0',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center'
      }}>
        <h2>📝 Daily Summary</h2>
        <ul style={{ listStyleType: 'none', padding: 0, fontSize: '1.2rem', color: '#444' }}>
          <li><strong>Total Usage Today:</strong> {weeklyData[6]?.usage || 0} kWh</li>
          <li><strong>Highest Consuming Device:</strong> <span style={{ color: 'red' }}>{findHighestDevice(usage)}</span></li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
