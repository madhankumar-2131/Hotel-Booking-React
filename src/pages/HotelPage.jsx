import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import Reviews from '../components/Reviews';
import { fetchHotelById } from '../api/hotels';
import './HotelPage.css';

const HotelPage = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const getHotel = async () => {
      const hotelData = await fetchHotelById(id);
      setHotel(hotelData);
    };
    getHotel();
  }, [id]);

  if (!hotel) return <div className="loading">Loading...</div>;

  return (
    <div className="hotel-page">
      <div 
        className="hotel-header" 
        style={{ backgroundImage: `url(${hotel.image})` }}
      >
        <div className="hotel-header-overlay">
          <h1 className="hotel-title">{hotel.name}</h1>
          <p className="hotel-price">${hotel.price} per night</p>
          <p className="hotel-rating">Rating: {hotel.rating} ★</p>
        </div>
      </div>
      <div className="hotel-content">
        <div className="hotel-info">
          <h2>Description</h2>
          <p>{hotel.description}</p>
        </div>
        <BookingForm hotel={hotel} />
        <Reviews hotelId={hotel.id} />
      </div>
    </div>
  );
};

export default HotelPage;
