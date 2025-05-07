import React, { createContext, useState } from 'react';

export const BookingContext = createContext();

const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;
