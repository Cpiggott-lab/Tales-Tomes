import DarkModeToggle from "../DarkModeToggle";
import "./Navbar.style.css";
import { Link } from "react-router-dom";
import cartImage from "../../Assets/shopping-cart.png";
import talesLogo from "../../Assets/ChatGPT Image May 14, 2025, 10_40_02 PM.png";
const navLikns = [
  { name: "HOME", path: "/" },
  { name: "MY BOOKS", path: "/my-library" },
  { name: "WISHLIST", path: "/wishlist" },
  { name: "LIBRARY", path: "/library-catalog" },
];

function Navbar() {
  return (
    <header className="navbar">
      {}
      <nav className="nav-links">
        <Link to="/" className="home-link-container">
          <img src={talesLogo} alt="logo" className="tales-tomes-logo-navbar" />
        </Link>
        <Link to="/my-library">MY BOOKS</Link>
        <Link to="/wishlist">WISHLIST</Link>
        <Link to="/library-catalog">LIBRARY</Link>
        <Link to="/about">ABOUT APP</Link>
        <DarkModeToggle />

        <Link to="/cart">
          <button className="navbar-cart-button">
            <img src={cartImage} alt="cart" className="cart-image" />
          </button>
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
