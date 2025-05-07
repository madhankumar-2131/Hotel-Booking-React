// src/components/Carousel.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Carousel.css';

const Carousel = ({ hotels }) => {
  return (
    <div className="carousel">
      {hotels.map(hotel => (
        <div className="carousel-item" key={hotel.id}>
          <img src={hotel.image} alt={hotel.name} />
          <h3>{hotel.name}</h3>
          <p>{hotel.description}</p>
          <Link to={`/hotels/${hotel.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
