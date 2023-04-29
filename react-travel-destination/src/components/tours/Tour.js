import React from "react";
import data from '../../data/db.json'

function Tours(props){
        const tours = data.map((tour) => (
            <div key={tour.id}>
              <h2>{tour.name}</h2>
              <img src={tour.image} alt={tour.name} />
            </div>
          ));
        
          return <div>{tours}</div>;
}

export default Tours;