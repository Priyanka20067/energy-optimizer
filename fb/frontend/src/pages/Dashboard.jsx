import React, { useEffect, useState } from 'react';
import DeviceCard from '../components/DeviceCard';
import SuggestionBox from '../components/SuggestionBox';
import EnergyChart from '../components/EnergyChart';

function Dashboard() {
  const [usage, setUsage] = useState({});
  const [weeklyData, setWeeklyData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('http://127.0.0.1:5000/api/usage').then(res => res.json()),
      fetch('http://127.0.0.1:5000/api/weekly').then(res => res.json())
    ]).then(([usageData, weeklyData]) => {
      setUsage(usageData);
      setWeeklyData(weeklyData);
      generateSuggestions(usageData);
      setLoading(false);
    });
  }, []);

  const generateSuggestions = (data) => {
    const tips = [];
    if (data["AC"] > 3) tips.push("⚡ AC usage is high. Try reducing AC time.");
    if (data["Fan"] > 1) tips.push("🔄 Fan is consuming more, check settings.");
    if (data["Light"] > 0.8) tips.push("💡 Use natural light during day.");
    if (Object.keys(data).length === 0) tips.push("✅ Great job! Very low energy usage.");
    setSuggestions(tips);
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

  if (loading) return <div style={{ padding: '20px' }}>Loading dashboard...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>⚡ Smart Energy Usage Dashboard</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '20px' }}>
        {Object.entries(usage).map(([device, kwh]) => (
          <DeviceCard key={device} device={device} usage={kwh} />
        ))}
      </div>

      <SuggestionBox suggestions={suggestions} />

      <EnergyChart data={weeklyData} />

      <div style={{ marginTop: '30px', background: '#f0f0f0', padding: '20px', borderRadius: '10px' }}>
        <h2>📝 Daily Summary</h2>
        <ul>
          <li>Total Usage Today: {weeklyData[6]?.usage || 0} kWh</li>
          <li>Highest Consuming Device: {findHighestDevice(usage)}</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
