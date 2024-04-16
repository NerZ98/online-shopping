import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import MainPage from './containers/MainPage';
import Login from './components/Login/Login';
import './styles/main.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (status) => {
        setIsLoggedIn(status);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div className="app">
            {isLoggedIn ? (
                <div className="content-wrapper">
                    <div className="sidebar">
                        <Sidebar />
                    </div>
                    <div className="main-content">
                        <MainPage />
                    </div>
                </div>
            ) : (
                <Login onLogin={handleLogin} />
            )}
            <Footer />
        </div>
    );
}

export default App;
