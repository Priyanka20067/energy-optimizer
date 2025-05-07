import React from 'react';
import '../styles/Dashboard.css'; 

function SuggestionBox({ suggestions }) {
  return (
    <div className="suggestion-box">
      <h2 className="suggestion-title">
        <span className="suggestion-icon">💡</span> Energy Saving Tips
      </h2>
      {suggestions.length > 0 ? (
        <ul className="suggestion-list">
          {suggestions.map((tip, index) => (
            <li key={index} className="suggestion-item">{tip}</li>
          ))}
        </ul>
      ) : (
        <p className="no-suggestions">No energy saving tips at the moment.</p>
      )}
    </div>
  );
}

export default SuggestionBox;