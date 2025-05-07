import React, { useEffect, useState } from 'react';
import DeviceCard from '../components/DeviceCard';
import SuggestionBox from '../components/SuggestionBox';
import EnergyChart from '../components/EnergyChart';
import '../styles/Dashboard.css'; 

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

  if (loading) return <div className="loading-container">Loading Dashboard...</div>;

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">⚡ Smart Energy Usage Dashboard</h1>

      {/* Total Consumption Card */}
      <div className="consumption-card">
        <h2 className="consumption-title">Total Consumption</h2>
        <p className="consumption-value">{totalConsumption} kWh</p>
      </div>

      {/* Device Usage Cards */}
      <div className="device-grid">
        {Object.entries(usage).map(([device, kwh]) => (
          <DeviceCard key={device} device={device} usage={kwh} />
        ))}
      </div>

      {/* AI Suggestions Box */}
      <div className="suggestions-container">
        <SuggestionBox suggestions={suggestions} />
      </div>

      {/* Weekly Energy Chart */}
      <div className="chart-container">
        <EnergyChart data={weeklyData} />
      </div>

      {/* Daily Summary */}
      <div className="summary-container">
        <h2 className="summary-title">📝 Daily Summary</h2>
        <ul className="summary-list">
          <li><strong>Total Usage Today:</strong> {weeklyData[6]?.usage || 0} kWh</li>
          <li><strong>Highest Consuming Device:</strong> <span className="highlight-device">{findHighestDevice(usage)}</span></li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;