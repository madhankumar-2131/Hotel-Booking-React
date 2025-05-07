import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [success, setSuccess] = useState(false); // State for success message
  const [error, setError] = useState(null); // State for error message
  const navigate = useNavigate(); // For navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name }),
      });

      const data = await response.json();

      if (response.ok) {
        // Set success to true on successful registration
        setSuccess(true);
        setError(null); // Clear any previous errors
      } else {
        // Handle errors from the backend
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="register-page">
      <h2>Register</h2>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit">Register</button>
        </form>
      ) : (
        <div>
          <p style={{ color: 'green' }}>Registration successful!</p>
          <button onClick={() => navigate('/')}>Go to Home</button>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;
