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
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="product-image"
                />
                <button className="close-button" onClick={onClose}>
                    Close
                </button>
            </div>
        </>
    );
}

export default ProductDetail;
