import { useState } from "react";
import Search from "../../components/Search";
import "./Homepage.style.css";
import { useBookActions } from "../../hooks/useBookActions";
import BookList from "../../components/BookList";
import { Link } from "react-router-dom";

function HomePage() {
  const [books, setBooks] = useState([]);
  const {
    wishlist,
    cart,
    addToWishlist,
    removeFromWishlist,
    addToCart,
    removeFromCart,
  } = useBookActions();

  return (
    <div className="homepage">
      <section className="logo-search-section">
        <img
          src="./public/ChatGPT Image May 14, 2025, 10_40_02 PM.png"
          alt="Tales & Tomes Logo"
          className="logo-image"
        />
      </section>

      <h1 className="homepage-title">Welcome Travelers of Epic Tomes!</h1>
      <p className="homepage-subtitle">
        Discover new worlds, track your reading journey, and find your next
        favorite book.
      </p>
      <Link to="/library-catalog" className="homepage-button">
        Browse Library
      </Link>

      <div className="search-bar-wrapper">
        <Search setBooks={setBooks} />
      </div>

      {books.length > 0 && (
        <div className="search-results">
          <BookList
            books={books}
            wishlist={wishlist}
            cart={cart}
            addToWishlist={addToWishlist}
            removeFromWishlist={removeFromWishlist}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            showDetails={true}
          />
        </div>
      )}
    </div>
  );
}

export default HomePage;
