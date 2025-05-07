import React from 'react';
import '../styles/Dashboard.css'; 

function EnergyChart({ data }) {
  // Find the maximum usage value for scaling the chart
  const maxUsage = Math.max(...data.map(day => day.usage), 5); // Minimum of 5 for scale

  return (
    <div className="energy-chart">
      <h2 className="chart-title">📊 Weekly Energy Consumption</h2>
      
      <div className="chart-container">
        <div className="chart-y-axis">
          <div className="y-axis-label">{maxUsage} kWh</div>
          <div className="y-axis-label">{(maxUsage * 0.75).toFixed(1)} kWh</div>
          <div className="y-axis-label">{(maxUsage * 0.5).toFixed(1)} kWh</div>
          <div className="y-axis-label">{(maxUsage * 0.25).toFixed(1)} kWh</div>
          <div className="y-axis-label">0 kWh</div>
        </div>
        
        <div className="chart-bars">
          {data.map((day, index) => (
            <div key={index} className="chart-bar-container">
              <div 
                className={`chart-bar ${day.usage > (maxUsage * 0.7) ? 'high-usage' : day.usage > (maxUsage * 0.4) ? 'medium-usage' : 'low-usage'}`}
                style={{ height: `${(day.usage / maxUsage) * 100}%` }}
              >
                <span className="usage-value">{day.usage}</span>
              </div>
              <div className="day-label">{day.day}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="chart-legend">
        <div className="legend-item">
          <span className="legend-color low-usage"></span>
          <span>Low Usage</span>
        </div>
        <div className="legend-item">
          <span className="legend-color medium-usage"></span>
          <span>Medium Usage</span>
        </div>
        <div className="legend-item">
          <span className="legend-color high-usage"></span>
          <span>High Usage</span>
        </div>
      </div>
    </div>
  );
}

export default EnergyChart;