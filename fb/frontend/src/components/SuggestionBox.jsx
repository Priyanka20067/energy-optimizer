import React from 'react';

function SuggestionBox({ suggestions }) {
  return (
    <div style={{ marginTop: '20px', background: '#eee', padding: '15px', borderRadius: '8px' }}>
      <h4>AI Suggestions</h4>
      <ul>
        {suggestions.map((s, index) => (
          <li key={index}>{s}</li>
        ))}
      </ul>
    </div>
  );
}

export default SuggestionBox;
