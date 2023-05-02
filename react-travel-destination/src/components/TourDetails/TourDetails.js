import { useParams } from 'react-router-dom';
import toursData from '../../data/db.json';
import './TourDetails.css'
import React, { useState } from 'react';



function TourDetails() {
  const { id } = useParams();
  const tour = toursData.filter(tour => tour.id === id)[0];
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const description = showMore
    ? `${tour.info} price: ${tour.price} $`
    : `${tour.info.substring(0, 50)}...`;

  // ...render the tour details using the `tour` object
  return (
    <div>
      <header><h2>{tour.name}</h2>
      <a id='home-a' href="/">Home</a>
      </header>
     
        <img id="Details-img" src={tour.image} alt={tour.name} /> 
        <p id='description-p'>{description}</p>
        <button onClick={handleShowMore}>
        {showMore ? 'See less' : 'See more'}
      </button>
    </div>
  );
}





export default TourDetails;
 