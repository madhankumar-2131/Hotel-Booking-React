import React from 'react';
import { Link } from 'react-router-dom';
import './HotelCard.css';

const HotelCard = ({ hotel }) => {
  return (
    <div className="hotel-card">
      <img src={hotel.image} alt={hotel.name} />
      <div className="hotel-card-content">
        <h2>{hotel.name}</h2>
        <p>{hotel.description}</p>
        <p className="price">Price: ${hotel.price}</p>
        <p className="rating">Rating: {hotel.rating}</p>
        <Link to={`/hotels/${hotel.id}`}>View Details</Link>
      </div>
    </div>
  );
};

export default HotelCard;
