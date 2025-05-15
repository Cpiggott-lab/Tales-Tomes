import "./Navbar.style.css";
import { Link } from "react-router-dom";

const navLikns = [
  { name: "HOME", path: "/" },
  { name: "MY BOOKS", path: "/my-library" },
  { name: "WISHLIST", path: "/wishlist" },
];

function Navbar() {
  return (
    <header className="navbar">
      <nav className="nav-links">
        {navLikns.map((link) => (
          <Link to={link.path} key={link.name}>
            {link.name}
          </Link>
        ))}
      </nav>
      {/* <nav className="nav-links">
        <Link to="/">HOME</Link>
        <Link to="/my-library-page">MY BOOKS</Link>
        <Link to="/wishlist">WISHLIST</Link>
      </nav> */}
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
