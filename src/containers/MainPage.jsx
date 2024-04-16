import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import ProductCard from '../components/ProductCard/ProductCard';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import './mainPage.css';

function MainPage() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [originalProducts, setOriginalProducts] = useState([]);

  useEffect(() => {
    const fetchedProducts = [
      { id: 1, name: 'Wireless Mouse', description: 'A nice wireless mouse', price: '20$' },
      { id: 2, name: 'Keyboard', description: 'Mechanical keyboard', price: '50$' },
      { id: 3, name: 'Keyboard', description: 'Mechanical keyboard', price: '50$' },
      { id: 4, name: 'Keyboard', description: 'Mechanical keyboard', price: '50$' },
      { id: 5, name: 'Keyboard', description: 'Mechanical keyboard', price: '50$' },
      { id: 6, name: 'Keyboard', description: 'Mechanical keyboard', price: '50$' },
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
        <div  className="search-bar" >
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} onReset={handleReset}/>
      </div>
      {selectedProduct ? (
        <ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onClick={() => setSelectedProduct(product)} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MainPage;