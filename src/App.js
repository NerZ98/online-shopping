import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import MainPage from './containers/MainPage';
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart';
import { FavoritesProvider } from './components/Favourite/FavoritesContext';
import './styles/main.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const savedLoginState = localStorage.getItem('isLoggedIn');
        return savedLoginState ? JSON.parse(savedLoginState) : false;
    });

    useEffect(() => {
        localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
    }, [isLoggedIn]);

    const handleLogin = (status) => {
        setIsLoggedIn(status);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
    };

    return (
        <FavoritesProvider>
            <Router>
                <div className="app">
                    {isLoggedIn ? (
                        <div className="content-wrapper">
                            <div className="sidebar">
                                <Sidebar onLogout={handleLogout} />
                            </div>
                            <div className="main-content">
                                <Routes>
                                    <Route path="/home" element={<MainPage />} />
                                    <Route path="/cart" element={<Cart />} />
                                </Routes>
                            </div>
                        </div>
                    ) : (
                        <Login onLogin={handleLogin} />
                    )}
                    <Footer />
                </div>
            </Router>
        </FavoritesProvider>
    );
}

export default App;
