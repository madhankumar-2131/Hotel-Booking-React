import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Carousel from '../components/Carousel';
import HotelList from '../components/HotelList';
import Testimonials from '../components/Testimonials';
import { fetchHotels } from '../api/hotels';
import './HomePage.css';

const HomePage = () => {
  const [hotels, setHotels] = useState([]);
  const [featuredHotels, setFeaturedHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);

  useEffect(() => {
    const getHotels = async () => {
      const hotelsData = await fetchHotels();
      setHotels(hotelsData);
      setFeaturedHotels(hotelsData.slice(0, 5)); // First 5 hotels as featured
      setFilteredHotels(hotelsData);
    };
    getHotels();
  }, []);

  const handleSearch = (query) => {
    if (query) {
      const results = hotels.filter(hotel =>
        hotel.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredHotels(results);
    } else {
      setFilteredHotels(hotels);
    }
  };

  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to HotelBooking</h1>
          <p>Find your perfect stay anywhere in the world</p>
          <SearchBar onSearch={handleSearch} />
        </div>
      </section>

      <section className="featured-hotels">
        <h2>Featured Hotels</h2>
        <Carousel hotels={featuredHotels} />
      </section>

      <section className="popular-destinations">
        <h2>Popular Destinations</h2>
        <div className="destination-cards">
          <Link to="/hotels?destination=paris">Paris</Link>
          <Link to="/hotels?destination=new-york">New York</Link>
          <Link to="/hotels?destination=tokyo">Tokyo</Link>
          <Link to="/hotels?destination=london">London</Link>
        </div>
      </section>

      <section className="hotel-list-section">
        <h2>Explore Hotels</h2>
        <HotelList hotels={filteredHotels} />
      </section>

      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <Testimonials />
      </section>
    </div>
  );
};

export default HomePage;
