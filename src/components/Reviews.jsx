import React, { useState } from 'react';
import './Reviews.css';

const Reviews = ({ hotelId }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');

  const handleAddReview = () => {
    const review = {
      id: Date.now(),
      content: newReview,
    };
    setReviews([...reviews, review]);
    setNewReview('');
  };

  return (
    <div className="reviews-container">
      <h3>Reviews</h3>
      {reviews.map(review => (
        <div key={review.id } className="review">
          <p>{review.content}</p>
        </div>
      ))}
      <textarea 
        value={newReview} 
        onChange={(e) => setNewReview(e.target.value)} 
        placeholder="Add a review..." 
      />
      <button onClick={handleAddReview}>Submit Review</button>
    </div>
  );
};

export default Reviews;
