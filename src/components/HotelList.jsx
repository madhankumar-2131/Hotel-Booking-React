import React from 'react';
import HotelCard from './HotelCard';
import './HotelList.css';

const HotelList = ({ hotels }) => {
  if (!hotels.length) {
    return <p>No hotels found</p>;
  }

  return (
    <div className="hotel-list">
      {hotels.map(hotel => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelList;
