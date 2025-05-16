import { Link } from "react-router-dom";
import BookCardButtons from "./BookCardButtons";
import { truncateText, truncateAuthor } from "./truncateText";
import { normalizeKey } from "./NormalizedKey";

function BookList({
  books,
  wishlist,
  cart,
  addToWishlist,
  removeFromWishlist,
  addToCart,
  removeFromCart,
  showDetails = false,
}) {
  return (
    <div className="book-list">
      {books.map((book, index) => {
        const normalizedKey = normalizeKey(book.key);
        const truncatedTitle = truncateText(book.title);
        const truncatedAuthor = truncateAuthor(book.author_name);
        const imageUrl = book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
          : "";

        return (
          <div key={`${normalizedKey}-${index}`} className="book-item">
            {imageUrl && (
              <img src={imageUrl} alt={book.title} className="book-cover" />
            )}

            <div className="book-info-block">
              <div className="book-info">
                <h2 className="book-title">{truncatedTitle}</h2>
                <p className="book-author">by {truncatedAuthor}</p>
              </div>

              <div className="book-actions">
                {showDetails && (
                  <Link
                    to={`/product/${normalizedKey}`}
                    className="book-card-button"
                  >
                    View Details
                  </Link>
                )}

                <BookCardButtons
                  book={{ ...book, key: normalizedKey }}
                  wishlist={wishlist}
                  cart={cart}
                  addToWishlist={addToWishlist}
                  removeFromWishlist={removeFromWishlist}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BookList;
