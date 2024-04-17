import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import ProductCard from '../components/ProductCard/ProductCard';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import './mainPage.css';
// import keyboard1 from './imgs/1.jpg'

function MainPage() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [originalProducts, setOriginalProducts] = useState([]);

  useEffect(() => {
    const fetchedProducts = [
      {
        id: 1,
        name: 'Wireless Mouse',
        description: 'A nice wireless mouse',
        price: '20$',
        imageUrl: require('../imgs/1.jpg')
      },
      {
        id: 2,
        name: 'Keyboard',
        description: 'Mechanical keyboard',
        price: '50$',
        imageUrl: require('../imgs/1.jpg')
      },
      {
        id: 3,
        name: 'Keyboard',
        description: 'Mechanical keyboard',
        price: '50$',
        imageUrl: require('../imgs/1.jpg')
      },
      {
        id: 4,
        name: 'Keyboard',
        description: 'Mechanical keyboard',
        price: '50$',
        imageUrl: '/imgs/keyboard3.jpg'
      },
      {
        id: 5,
        name: 'Keyboard',
        description: 'Mechanical keyboard',
        price: '50$',
        imageUrl: '/imgs/keyboard4.jpg'
      },
      {
        id: 6,
        name: 'Keyboard',
        description: 'Mechanical keyboard',
        price: '50$',
        imageUrl: '/imgs/keyboard5.jpg'
      },
      
    ];
    setProducts(fetchedProducts);
    setOriginalProducts(fetchedProducts);
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filtered = originalProducts.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setProducts(filtered);
  };

  const handleReset = () => {
    setSearchTerm('');
    setProducts(originalProducts);
  };

  return (
    <div className="main-page">
      <div className="search-bar">
        <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} onReset={handleReset} />
      </div>
      {selectedProduct ? (
        <ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => setSelectedProduct(product)}  // Make sure this handler is correctly used
            />
          ))}
        </div>
      )}
    </div>
  );
  
}

export default MainPage;