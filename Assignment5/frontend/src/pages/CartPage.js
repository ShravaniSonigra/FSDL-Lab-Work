import { useEffect, useState } from "react";
import axios from "axios";

function CartPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await axios.get("http://localhost:5000/api/cart");
    setItems(res.data);
  };

  const removeItem = async (id) => {
    await axios.delete(`http://localhost:5000/api/cart/${id}`);
    fetchItems();
  };

  return (
    <div className="cart-container">
      <h2>🛒 Your Bookings</h2>
      {items.map((item) => (
        <div className="cart-item" key={item._id}>
          <div>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>
          <button onClick={() => removeItem(item._id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default CartPage;