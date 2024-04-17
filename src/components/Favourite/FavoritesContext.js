// FavoritesContext.js
import React, { createContext, useState, useContext } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (product) => {
    setFavorites([...favorites, product]);
  };

  const removeFavorite = (product) => {
    setFavorites(favorites.filter((p) => p.id !== product.id));
  };

  const isFavorite = (product) => {
    return favorites.some((p) => p.id === product.id);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);