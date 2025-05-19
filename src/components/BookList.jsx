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
  hideButtons = false,
  showRemoveFromCart = false,
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
            <div className="book-info-block">
              {showDetails && imageUrl && (
                <div className="book-image-container">
                  <Link
                    to={`/product/${normalizedKey}`}
                    state={{ book }}
                    className="book-image-link-container"
                  >
                    <img
                      src={imageUrl}
                      alt={book.title}
                      className="book-cover"
                    />
                  </Link>
                </div>
              )}

              <div className="book-info">
                <h2 className="book-title">{truncatedTitle}</h2>
                <p className="book-author">by {truncatedAuthor}</p>
              </div>

              {(!hideButtons || showRemoveFromCart) && (
                <div className="book-actions">
                  <BookCardButtons
                    book={{ ...book, key: normalizedKey }}
                    wishlist={wishlist}
                    cart={cart}
                    addToWishlist={hideButtons ? undefined : addToWishlist}
                    removeFromWishlist={
                      hideButtons ? undefined : removeFromWishlist
                    }
                    addToCart={hideButtons ? undefined : addToCart}
                    removeFromCart={
                      showRemoveFromCart ? removeFromCart : undefined
                    }
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BookList;
