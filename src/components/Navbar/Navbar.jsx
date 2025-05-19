import "./Navbar.style.css";
import { Link } from "react-router-dom";

const navLikns = [
  { name: "HOME", path: "/" },
  { name: "MY BOOKS", path: "/my-library" },
  { name: "WISHLIST", path: "/wishlist" },
  { name: "LIBRARY", path: "/library-catalog" },
];

function Navbar() {
  return (
    <header className="navbar">
      {/* {navLikns.map((link) => (
        <Link to={link.path} key={link.name} className="nav-link">
          {link.name}
        </Link>
      ))} */}
      <nav className="nav-links">
        <Link to="/">HOME</Link>
        <Link to="/my-library">MY BOOKS</Link>
        <Link to="/wishlist">WISHLIST</Link>
        <Link to="/library-catalog">LIBRARY</Link>
        <Link to="/cart">
          <button className="navbar-cart-button">
            <img
              src="public/shopping-cart.png"
              alt="shopping cart image"
              className="cart-image"
            />
          </button>
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
