import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext'; // Ensure you have the correct path
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { login } = useContext(UserContext); // Access the login function from UserContext
  const navigate = useNavigate();

  // The handleLogin function as defined earlier
  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        
      });
  
      const data = await response.text();
      const parsedData = data ? JSON.parse(data) : {};
      if (response.ok) {
        login(parsedData.user); // Pass user data to context
        navigate('/profile'); // Redirect to profile page
      } else {
        setError(parsedData.message || 'Login failed');
      }
    } catch (error) {
      setError('An error occurred during login. Please try again.');
      console.error('Login error:', error);
    }
  };
  
  
  

  return (
    <div className="login-page">
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
