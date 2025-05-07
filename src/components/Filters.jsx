import React, { useState } from 'react';
import './Filters.css';

const Filters = ({ onFilter }) => {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [rating, setRating] = useState(0);

  const handleFilter = () => {
    onFilter({ priceRange, rating });
  };

  return (
    <div className="filters-container">
      <h3>Filters</h3>
      <div>
        <label>Price Range: </label>
        <input 
          type="range" 
          min="0" 
          max="500" 
          value={priceRange[1]} 
          onChange={(e) => setPriceRange([0, parseInt(e.target.value)])} 
        />
        <span>{priceRange[1]}</span>
      </div>
      <div>
        <label>Rating: </label>
        <input 
          type="number" 
          min="0" 
          max="5" 
          value={rating} 
          onChange={(e) => setRating(parseInt(e.target.value))} 
        />
      </div>
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default Filters;
