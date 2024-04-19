import React from 'react';
import './productDetail.css';
import { useFavorites } from '../Favourite/FavoritesContext';

function ProductDetail({ product, onClose }) {
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();
    const favorite = isFavorite(product);

    const handleFavoriteClick = () => {
        if (favorite) {
            removeFavorite(product);
        } else {
            addFavorite(product);
        }
    };

    return (
        <>
            <div className="product-detail-backdrop" onClick={onClose}></div>
            <div className="product-detail">
                <button className="close-button" onClick={onClose}></button>
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="product-image"
                />
                <div className="text-container">
                    <h2>{product.name}</h2>
                    <p className="price">{product.price}</p>
                    <p>{product.description}</p>
                    <div className="product-stats">
                        <span>Views: {product.views}</span>
                        <span>Purchases: {product.purchases}</span>
                        <span>Favorites: {product.favorites}</span>
                    </div>
                    <button
                        className={`favorite-button ${favorite ? 'highlighted' : ''}`}
                        onClick={handleFavoriteClick}
                    >
                        {favorite ? 'Remove from Favorites' : 'Add to Favorites'}
                    </button>
                </div>
            </div>
        </>
    );
}

export default ProductDetail;