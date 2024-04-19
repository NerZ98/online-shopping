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
        imageUrl: require('../imgs/mouse1.jpg'),
        views: 150,
        purchases: 25,
        favorites: 45
    },
    {
        id: 11,
        name: 'Tablet',
        description: '10-inch tablet with fast performance',
        price: '200$',
        imageUrl: require('../imgs/tablet1.jpg'),
        views: 300,
        purchases: 80,
        favorites: 110
    },
    {
        id: 12,
        name: 'Smartwatch',
        description: 'Feature-rich smartwatch for fitness tracking',
        price: '120$',
        imageUrl: require('../imgs/smartwatch1.jpg'),
        views: 220,
        purchases: 40,
        favorites: 70
    },
    {
        id: 13,
        name: 'Keyboard',
        description: 'Mechanical Keyboard for gaming or typing',
        price: '100$',
        imageUrl: require('../imgs/keyboard1.jpg'),
        views: 250,
        purchases: 30,
        favorites: 60
    },
    {
        id: 14,
        name: 'External Hard Drive',
        description: '2TB external hard drive for data storage',
        price: '100$',
        imageUrl: require('../imgs/harddrive1.jfif'),
        views: 180,
        purchases: 45,
        favorites: 75
    },
    {
        id: 15,
        name: 'Printer',
        description: 'All-in-one wireless printer',
        price: '150$',
        imageUrl: require('../imgs/printer1.jfif'),
        views: 120,
        purchases: 20,
        favorites: 30
    }
      
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