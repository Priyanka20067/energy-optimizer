import React from 'react';

function DeviceCard({ device, usage }) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', borderRadius: '8px' }}>
      <h3>{device}</h3>
      <p>Usage: {usage} kWh</p>
    </div>
  );
}

export default DeviceCard;
