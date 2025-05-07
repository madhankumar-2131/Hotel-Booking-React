// src/components/Testimonials.jsx

import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    { id: 1, content: "Great service, loved the hotel!", author: "John Doe" },
    { id: 2, content: "Amazing experience, will book again!", author: "Jane Smith" },
    { id: 3, content: "Highly recommend this app for booking hotels.", author: "Alice Brown" },
  ];

  return (
    <div className="testimonials-container">
      {testimonials.map(testimonial => (
        <div key={testimonial.id} className="testimonial">
          <p>"{testimonial.content}"</p>
          <span>- {testimonial.author}</span>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
