import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
  
    axios.post('http://localhost:9090/auth/login', {
      email: username,
      password: password
    })
    .then(response => {
      // Assuming the backend sends a specific status code or structure for a successful login
      if (response.status === 200 && response.data.token) {
        const token = response.data.token;
        localStorage.setItem('token', token); // Store the token in localStorage
        onLogin(true);
        navigate('/home');
      } else {
        // If the response does not meet the expected conditions, handle as an error
        setErrorMessage('Login failed, please try again.');
      }
    })
    .catch(error => {
      // Clear any previously stored tokens
      localStorage.removeItem('token'); // Ensure no invalid token is stored
      // Handle login error more precisely based on the backend response
      if (error.response && error.response.data) {
        if (error.response.data === 'Credentials Invalid !!') {
          setErrorMessage('Invalid username or password');
        } else {
          setErrorMessage('An error occurred. Please try again.');
        }
      } else {
        setErrorMessage('Network error. Please check your connection and try again.');
      }
    });
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="form-control"
          />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;