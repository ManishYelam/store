import React from 'react';
import '../assets/styles/Rating.css';

const Rating = ({ rating }) => {
  return (
    <div className="rating">
      <p>User: {rating.user.name}</p>
      <p>Rating: {rating.rating}</p>
    </div>
  );
};

export default Rating;
