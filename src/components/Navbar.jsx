import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/library">Library</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
}

export default Navbar;
