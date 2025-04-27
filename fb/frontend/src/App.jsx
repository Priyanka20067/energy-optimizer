import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>🏠 Home</Link>
        <Link to="/dashboard">⚡ Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
