import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import MainPage from './containers/MainPage';
import './styles/main.css';

function App() {
    return (
        <div className="app">
            <div className="content-wrapper">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="main-content">
                    <MainPage />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
