import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/login.css';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(form.username, form.password);
    if (success) {
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Try admin/1234');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-header">
          <h2><span className="emoji">🔐</span> Energy Portal Login</h2>
          <p>Access your energy dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input 
              id="username"
              name="username" 
              placeholder="Enter your username" 
              onChange={handleChange} 
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              id="password"
              name="password" 
              placeholder="Enter your password" 
              type="password" 
              onChange={handleChange} 
              required
            />
          </div>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <button type="submit" className="submit-btn">
            Sign In
          </button>

          <div className="footer-note">
            <p>Part of the Energy Optimization Project</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
