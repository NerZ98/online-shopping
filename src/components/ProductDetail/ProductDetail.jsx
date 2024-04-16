import React from 'react';
import './productDetail.css';

function ProductDetail({ product, onClose }) {
  return (
    <>
      <div className="product-detail-backdrop" onClick={onClose}></div>
      <div className="product-detail">
        
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </>
  );
}

export default ProductDetail;
