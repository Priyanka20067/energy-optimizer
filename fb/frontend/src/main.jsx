import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// Optional: Check if AuthContext file really exists
import { AuthProvider } from './context/AuthContext'; // ✅ This must be real

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider> {/* ✅ If you are using login/auth */}
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
