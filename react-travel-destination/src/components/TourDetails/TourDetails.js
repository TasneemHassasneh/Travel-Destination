import React from 'react';
import toursData from '../../data/db.json';
import { useParams } from 'react-router-dom';


function TourDetails() {
  const { id } = useParams();
  const tour = toursData.filter((tour) => tour.id === parseInt(id))[0];

  return (
    <div>
        <h2>{tour.name}</h2>
        <img src={tour.image} alt={tour.name} /> 
        <p>{tour.description}</p>
    </div>
  );
}

export default TourDetails;
 