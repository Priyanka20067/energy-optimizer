import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div style={{ padding: '20px' }}>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>🏠 Home</Link>
        <Link to="/dashboard" style={{ marginRight: '10px' }}>⚡ Dashboard</Link>
        <Link to="/login">🔐 Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <p style={{ padding: '20px' }}>❌ Please login to access Dashboard!</p>}
        />
      </Routes>
    </div>
  );
}

export default App;
