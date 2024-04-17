import React, { useState, useEffect } from 'react';
import { useFavorites } from '../Favourite/FavoritesContext';
import ProductCard from '../ProductCard/ProductCard';
import SearchBar from '../SearchBar/SearchBar'; // Import the SearchBar component
import './cart.css';

const Cart = () => {
    const { favorites } = useFavorites();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredFavorites, setFilteredFavorites] = useState(favorites);

    useEffect(() => {
        // Filter favorites based on the search term
        if (searchTerm) {
            const filtered = favorites.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
            setFilteredFavorites(filtered);
        } else {
            setFilteredFavorites(favorites);
        }
    }, [favorites, searchTerm]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleReset = () => {
        setSearchTerm('');
    };

    return (
        <div className="cart-container">
            <h2>Cart</h2>
            <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} onReset={handleReset} />
            {filteredFavorites.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="cart-items">
                    {filteredFavorites.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
