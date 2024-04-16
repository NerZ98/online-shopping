import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import styles from './productCard.module.css';
import productImage from '../../imgs/1.png';

function ProductCard({ product, onClick }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e) => {
    e.stopPropagation(); // Prevent onClick of the card when toggling the star
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.productCard} onClick={onClick}>
      <div className={styles.topSection}>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
      </div>
      <div className={styles.bottomSection}>
        <img src={productImage} className={styles.productImage} alt={product.name} />
        <div className={styles.priceAndStar}>
            <p className={styles.price}>{product.price}</p>
            <FaStar
                className={`${styles.star} ${isFavorite ? styles.favorite : ''}`}
                onClick={toggleFavorite}
            />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;