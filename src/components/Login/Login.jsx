import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Importing the CSS file

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();

        // Placeholder for authentication logic (e.g., API call)
        if (username === 'admin' && password === 'password') {
            onLogin(true);
            navigate('/home'); // Navigate to home page after successful login
        } else {
            setErrorMessage('Invalid username or password');
        }
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
                        className="form-control" // CSS class for styling
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="form-control" // CSS class for styling
                    />
                </div>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}

export default Login;
