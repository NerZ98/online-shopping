import React, { useState } from 'react';
import './login.css'; // Importing the CSS file

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        // Placeholder for authentication logic
        if (username === 'admin' && password === 'password') {
            onLogin(true);
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div className="login-page"> {/* Wrapper div with centering styles */}
            <form className="login-form" onSubmit={handleSubmit}>
                <div>
                    <label>
                        Username:
                        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </label>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
