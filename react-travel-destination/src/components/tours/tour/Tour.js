import './Tour.css'

function Tour({ tour }) {
  
  
  return (
    <div>
        <div id='container'>
        <h2>{tour.name}</h2>
      <img id="tour-img" src={tour.image} alt={tour.name} />
      <a id='details-a' href={`/city/${tour.id}`}>View Details</a>
        </div>
    </div>
  );
}

export default Tour;
