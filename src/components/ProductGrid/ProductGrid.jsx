import React from 'react';
import ProductCard from './ProductCard';
import './productGrid.css'; // Importing the grid CSS

const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} onClick={() => console.log('Product clicked:', product.name)} />
      ))}
    </div>
  );
};

export default ProductGrid;
