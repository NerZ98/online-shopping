import React, { useState } from 'react';
import './Login.css'; // Assuming you have some basic styles

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        // Simple validation
        if (!username || !password) {
            setErrorMessage("Username and password are required");
            return;
        }
        // Implement your authentication logic here
        console.log("Login attempted with", username, password);
        setErrorMessage(""); // clear error message on successful login attempt
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
                <div className="input-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {errorMessage && <div className="error">{errorMessage}</div>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
