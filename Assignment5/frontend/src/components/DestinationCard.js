import axios from "axios";

function DestinationCard({ place }) {
  const addToCart = async () => {
    await axios.post("http://localhost:5000/api/cart", place);
    alert("Added to Cart ✅");
  };

  return (
    <div className="card">
      <img src={place.image} alt={place.name} />
      <div className="card-content">
        <p className="location">📍 {place.location} • ⏱ {place.days}</p>
        <h3>{place.name}</h3>
        <p className="desc">{place.desc}</p>

        <div className="card-footer">
          <span className="price">₹{place.price}</span>
          <button onClick={addToCart}>Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;