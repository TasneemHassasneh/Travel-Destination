import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Tour.css'

function Tour({ tour }) {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const description = showMore ? tour.description: `${tour.info.substring(0, 50)}...`;

  return (
    <div>
        <div id='container'>
        <h2>{tour.name}</h2>
      <img src={tour.image} alt={tour.name} />
      <p>{description}</p>
      <button onClick={handleShowMore}>
        {showMore ? 'See more' : 'See less'}
      </button>
      <Link to={`/city/${tour.id}`}>View Details</Link>
        </div>
      
    </div>
  );
}

export default Tour;
