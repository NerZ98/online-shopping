import React from 'react';
import { useFavorites } from '../Favourite/FavoritesContext';
import ProductCard from '../ProductCard/ProductCard';
import './cart.css';

const Cart = () => {
  const { favorites } = useFavorites();

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {favorites.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {favorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;