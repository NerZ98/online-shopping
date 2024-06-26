import React from 'react';
import { useFavorites } from '../../components/Favourite/FavoritesContext';
import { Link } from 'react-router-dom';
import './sidebar.css';


// Import the logo image
import logo from 'C:/Users/mithil.kashid/Desktop/Traning/frontend/online-shopping/src/imgs/Logo.png';

function Sidebar({ onLogout }) {
    const { favorites } = useFavorites();

    return (
        <div className="sidebar">
            {/* Add the logo at the top of the sidebar */}
            <div className="sidebar-logo">
                <img src={logo} alt="Logo" />
            </div>
            <ul>
                <li>
                    <Link to="/home">Home</Link> {/* Link to home */}
                </li>
                <li>
                    <Link to="/about">About</Link> {/* Link to about */}
                </li>
                <li>
                    <Link to="/cart">Favorite ({favorites.length})</Link> {/* Link to cart */}
                </li>
                <li>
                    {/* Link to handle logout */}
                    <Link to="/" onClick={onLogout}>Logout</Link>
                </li>
            </ul>

            {/* {favorites.length > 0 && (
                <div className="favorites">
                    <h3>Favorite Products</h3>
                    <ul>
                        {favorites.map((product) => (
                            <li key={product.id}>{product.name}</li>
                        ))}
                    </ul>
                </div>
            )} */}
        </div>
    );
}

export default Sidebar;
