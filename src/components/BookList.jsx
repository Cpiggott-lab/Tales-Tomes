import { Link } from "react-router-dom";
import BookCardButtons from "./BookCardButtons";
import { truncateText, truncateAuthor } from "./truncateText";
import { normalizeKey } from "./NormalizedKey";
import SkeletonBookCard from "./SkeletonCard";

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
  loading = false,
}) {
  // Show skeleton cards if loading and no books loaded yet
  const shouldShowSkeletons = loading && books.length === 0;

  if (shouldShowSkeletons) {
    const skeletons = Array.from({ length: 20 }).map((_, i) => {
      return <SkeletonBookCard key={i} />;
    });

    return <div className="book-list">{skeletons}</div>;
  }

  // Show actual book cards if books are available
  const bookCards = books.map((book, index) => {
    const normalizedKey = normalizeKey(book.key);
    const truncatedTitle = truncateText(book.title);
    const truncatedAuthor = truncateAuthor(book.author_name);

    const hasCover = !!book.cover_i;
    const imageUrl = hasCover
      ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
      : "";

    return (
      <div key={`${normalizedKey}-${index}`} className="book-item">
        <div className="book-info-block">
          {/* Book image + link */}
          {showDetails && imageUrl && (
            <div className="book-image-container">
              <Link
                to={`/product/${normalizedKey}`}
                state={{ book }}
                className="book-image-link-container"
              >
                <img
                  loading="lazy"
                  src={imageUrl}
                  alt={book.title}
                  className="book-cover"
                />
              </Link>
            </div>
          )}

          {/* Book title + author */}
          <div className="book-info">
            <h2 className="book-title">{truncatedTitle}</h2>
            <p className="book-author">by {truncatedAuthor}</p>
          </div>

          {/* Action buttons (if enabled) */}
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
                removeFromCart={showRemoveFromCart ? removeFromCart : undefined}
              />
            </div>
          )}
        </div>
      </div>
    );
  });

  return <div className="book-list">{bookCards}</div>;
}

export default BookList;
