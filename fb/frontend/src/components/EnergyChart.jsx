import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

function EnergyChart({ data }) {
  return (
    <div style={{ marginTop: '30px' }}>
      <h2>Weekly Energy Usage</h2>
      <Line
        data={{
          labels: data.map(d => d.day),
          datasets: [{
            label: 'kWh Usage',
            data: data.map(d => d.usage),
            fill: false,
            borderColor: 'blue'
          }]
        }}
      />
    </div>
  );
}

export default EnergyChart;
