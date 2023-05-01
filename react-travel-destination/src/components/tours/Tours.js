import React from 'react';
import Tour from './tour/Tour';
import toursData from '../../data/db.json';

function Tours() {
  const tours = toursData.map((tour) => (
    <Tour key={tour.id} tour={tour} />
  ));

  return <div>{tours}</div>;
}

export default Tours;
