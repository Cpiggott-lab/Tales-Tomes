import { useParams, useLocation } from "react-router-dom";
import { useBookActions } from "../../hooks/useBookActions";
import "./Product.style.css";

export default function ProductPage() {
  const { bookId } = useParams();
  const { state } = useLocation();
  const book = state?.book;

  const {
    wishlist,
    cart,
    addToCart,
    removeFromCart,
    addToWishlist,
    removeFromWishlist,
  } = useBookActions();

  if (!book) return <p>Book not found.</p>;

  const isInCart = cart.some((b) => b.key === book.key);
  const isInWishlist = wishlist.some((b) => b.key === book.key);

  const coverId = book.cover_i || book.covers?.[0];
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
    : "https://via.placeholder.com/150x220?text=No+Cover";

  return (
    <div className="product-page">
      <h1 className="product-page-title">Book Detail Page</h1>
      <div className="book-details-container">
        <div className="book-cover-container">
          <img
            src={coverUrl}
            alt={`${book.title} Cover`}
            className="product-page-book-cover"
          />
        </div>
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
          <div className="product-page-buttons-container">
            {!isInCart && (
              <button
                className="product-page-button"
                onClick={() => addToCart(book)}
              >
                Add to Cart
              </button>
            )}
            {isInCart && (
              <button
                className="product-page-button"
                onClick={() => removeFromCart(book)}
              >
                Remove from Cart
              </button>
            )}
            {!isInWishlist && (
              <button
                className="product-page-button"
                onClick={() => addToWishlist(book)}
              >
                Add to Wishlist
              </button>
            )}
            {isInWishlist && (
              <button
                className="product-page-button"
                onClick={() => removeFromWishlist(book)}
              >
                Remove from Wishlist
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
