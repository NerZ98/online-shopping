import React, { useState, useEffect } from 'react';
import './searchBar.css';

function SearchBar({ searchTerm: initialSearchTerm, handleSearch, onReset }) {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  useEffect(() => {
    setSearchTerm(initialSearchTerm);
  }, [initialSearchTerm]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    handleSearch(event); // Pass the event object directly
  };

  const handleReset = () => {
    setSearchTerm('');
    onReset();
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleInputChange}
        className="search-bar"
      />
    </div>
  );
}

export default SearchBar;