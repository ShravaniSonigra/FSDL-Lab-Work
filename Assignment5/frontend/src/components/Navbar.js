import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>🌍 Travel Explorer</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
}

export default Navbar;