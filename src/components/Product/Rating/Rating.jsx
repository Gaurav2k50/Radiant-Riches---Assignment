import React from "react";

const Rating = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>⭐️</span>);
    }
    return stars;
  };

  return (
    <div>
      <p> {renderStars()}</p>
    </div>
  );
};

export default Rating;
