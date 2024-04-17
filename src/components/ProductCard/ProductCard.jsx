import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useFavorites } from '../Favourite/FavoritesContext';
import styles from './productCard.module.css';

function ProductCard({ product }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(product);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    if (favorite) {
      removeFavorite(product);
    } else {
      addFavorite(product);
    }
  };

  return (
    <div className={styles.productCard} onClick={() => console.log('Product clicked')}>
      <div className={styles.topSection}>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
      </div>
      <div className={styles.bottomSection}>
        <img src={product.imageUrl} className={styles.productImage} alt={product.name} />
        <div className={styles.priceAndStar}>
          <p className={styles.price}>{product.price}</p>
          <FaStar
            className={`${styles.star} ${favorite ? styles.favorite : ''}`}
            onClick={toggleFavorite}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;