import React from 'react';
import styles from './productCard.module.css'; // Using CSS modules for better scope management

function ProductCard({ product, onClick }) {
  return (
    <div className={styles.productCard} onClick={onClick}>
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <p className={styles.price}>{product.price}</p>
    </div>
  );
}

export default ProductCard;
