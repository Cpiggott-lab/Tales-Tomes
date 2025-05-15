import "./Navbar.style.css";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <nav className="nav-links">
        <Link to="/">HOME</Link>
        <Link to="/MyLibraryPage">MY BOOKS</Link>
        <Link to="/wishlist">WISHLIST</Link>
      </nav>
      <div className="nav-right">
        <div className="nav-links">
          <Link to="#">MY ACCOUNT </Link>
        </div>
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
