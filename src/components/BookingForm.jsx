import React, { useState, useContext } from 'react';
// import {Link,Route} from 'react-router-dom'
import { BookingContext } from '../context/BookingContext';
import './BookingForm.css';
// import { Routes } from 'react-router-dom';
// import Pay from './Pay';

const BookingForm = ({ hotel }) => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const { addBooking } = useContext(BookingContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const booking = {
      hotelId: hotel.id,
      hotelName: hotel.name,
      checkInDate,
      checkOutDate,
    };
    addBooking(booking);
    prompt("Please pay to confirm booking ..")
    alert('Booking Confirmed!');
    alert('Thanks..!')
    
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Book your stay at {hotel.name}</h2>
      <input 
        type="date" 
        value={checkInDate} 
        onChange={(e) => setCheckInDate(e.target.value)} 
        required 
      />
      <input 
        type="date" 
        value={checkOutDate} 
        onChange={(e) => setCheckOutDate(e.target.value)} 
        required 
      />
      <button type="submit">Confirm Booking</button>

      <button type="submit">Pay</button>
    </form>
    
  );
};

export default BookingForm;
