import React, { useState } from 'react';

function DeviceCard({ device, usage }) {
  const [isOn, setIsOn] = useState(true);

  const toggleDevice = () => {
    setIsOn(prev => !prev);
  };

  

  return (
    <div style={{ border: '1px solid gray', padding: '15px', borderRadius: '10px', width: '180px', background: isOn ? '#d1ffd6' : '#ffd1d1' }}>
      <h3>{device}</h3>
      <p>Usage: {isOn ? usage : 0} kWh</p>
      <button onClick={toggleDevice} style={{ marginTop: '10px', padding: '5px 10px' }}>
        {isOn ? 'Turn OFF' : 'Turn ON'}
      </button>
    </div>
  );
}

export default DeviceCard;
