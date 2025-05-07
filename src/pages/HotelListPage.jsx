// src/pages/HotelListPage.jsx
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import HotelList from '../components/HotelList';
import { fetchHotels } from '../api/hotels';

const HotelListPage = () => {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

  useEffect(() => {
    const getHotels = async () => {
      const hotelData = await fetchHotels();
      setHotels(hotelData);
    };
    getHotels();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      setFilteredHotels(
        hotels.filter(hotel =>
          hotel.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredHotels(hotels);
    }
  }, [searchQuery, hotels]);

  return (
    <div>
      <h1>Hotel Listings</h1>
      {filteredHotels.length > 0 ? (
        <HotelList hotels={filteredHotels} />
      ) : (
        <p>No hotels found matching "{searchQuery}"</p>
      )}
    </div>
  );
};

export default HotelListPage;
