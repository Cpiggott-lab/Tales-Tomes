import "./Navbar.style.css";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/MyLibraryPage">My Books</Link>
        <Link to="/wishlist">Wishlist</Link>
      </nav>
      <div>
        <Link to="/cart">
          <button>
            <img
              src="public/shopping-cart.png"
              alt="shopping cart image"
              className="cart-image"
            />
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
