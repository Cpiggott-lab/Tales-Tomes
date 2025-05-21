import { useParams, useLocation } from "react-router-dom";
import { useBookActions } from "../../hooks/useBookActions";
import "./Product.style.css";

export default function ProductPage() {
  // Get book ID from URL and book data from route state
  const { bookId } = useParams();
  const { state } = useLocation();
  const book = state?.book;

  // Use custom hook to get wishlist/cart + related actions
  const {
    wishlist,
    cart,
    addToCart,
    removeFromCart,
    addToWishlist,
    removeFromWishlist,
  } = useBookActions();

  // If book wasn’t passed via route state, show fallback
  if (!book) return <p>Book not found.</p>;

  // Check if book is already in cart or wishlist
  let isInCart = false;
  for (let i = 0; i < cart.length; i++) {
    const currentBook = cart[i];
    if (currentBook.key === book.key) {
      isInCart = true;
      break;
    }
  }

  let isInWishlist = false;
  for (let i = 0; i < wishlist.length; i++) {
    const currentBook = wishlist[i];
    if (currentBook.key === book.key) {
      isInWishlist = true;
      break;
    }
  }

  // Get book cover image
  const coverId = book.cover_i || book.covers?.[0];
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
    : "https://via.placeholder.com/150x220?text=No+Cover";

  return (
    <div className="product-page">
      <h1 className="product-page-title">Book Detail Page</h1>

      <div className="book-details-container">
        {/* Cover Image */}
        <div className="book-cover-container">
          <img
            src={coverUrl}
            alt={`${book.title} Cover`}
            className="product-page-book-cover"
          />
        </div>

        {/* Book Info */}
        <div className="product-book-info-container">
          <h1 className="product-page-book-title">Title: {book.title}</h1>
          <h3 className="product-page-book-id">Book ID: {bookId}</h3>
          <h3 className="product-page-book-author">
            Author: {book.author_name?.join(", ") || "Unknown"}
          </h3>
          <p className="product-page-book-description">
            Description:{" "}
            {book.description?.value ||
              book.description ||
              "No description available."}
          </p>

          {/* Action Buttons */}
          <div className="product-page-buttons-container">
            {/* Cart Buttons */}
            {isInCart ? (
              <button
                className="product-page-button"
                onClick={() => removeFromCart(book)}
              >
                Remove from Cart
              </button>
            ) : (
              <button
                className="product-page-button"
                onClick={() => addToCart(book)}
              >
                Add to Cart
              </button>
            )}

            {/* Wishlist Buttons */}
            {isInWishlist ? (
              <button
                className="product-page-button"
                onClick={() => removeFromWishlist(book)}
              >
                Remove from Wishlist
              </button>
            ) : (
              <button
                className="product-page-button"
                onClick={() => addToWishlist(book)}
              >
                Add to Wishlist
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
