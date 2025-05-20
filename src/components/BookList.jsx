import { Link } from "react-router-dom";
// Reusable buttons (add/remove cart/wishlist)
import BookCardButtons from "./BookCardButtons";
// Functions to shorten long text
import { truncateText, truncateAuthor } from "./truncateText";
// Makes book keys cleaner
import { normalizeKey } from "./NormalizedKey";
// Skeleton loader
import SkeletonBookCard from "./SkeletonCard";

//added to increase performance of my list. https://www.npmjs.com/package/react-window
// import { FixedSizeList as List } from "react-window";

// BookList renders a list of books with optional buttons and image links
function BookList({
  books,
  wishlist,
  cart,
  addToWishlist,
  removeFromWishlist,
  addToCart,
  removeFromCart,
  showDetails = false, // whether to show image + link
  hideButtons = false, // hide action buttons completely
  showRemoveFromCart = false, // show only remove from cart
  loading = false, // pass this in from parent using useInfiniteBooks
}) {
  return (
    <div className="book-list">
      {/* Show skeletons if loading and no books loaded yet */}
      {loading && books.length === 0
        ? Array.from({ length: 20 }).map((_, i) => <SkeletonBookCard key={i} />)
        : books.map((book, index) => {
            const normalizedKey = normalizeKey(book.key);
            const truncatedTitle = truncateText(book.title);
            const truncatedAuthor = truncateAuthor(book.author_name);

            // Build image URL if cover exists
            const imageUrl = book.cover_i
              ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
              : "";

            return (
              <div key={`${normalizedKey}-${index}`} className="book-item">
                <div className="book-info-block">
                  {/* Show image + link to product page if enabled */}
                  {showDetails && imageUrl && (
                    <div className="book-image-container">
                      <Link
                        to={`/product/${normalizedKey}`}
                        state={{ book }}
                        className="book-image-link-container"
                      >
                        <img
                          loading="lazy" //loading optimization
                          src={imageUrl}
                          alt={book.title}
                          className="book-cover"
                        />
                      </Link>
                    </div>
                  )}

                  {/* Show title + author */}
                  <div className="book-info">
                    <h2 className="book-title">{truncatedTitle}</h2>
                    <p className="book-author">by {truncatedAuthor}</p>
                  </div>

                  {/* Only show buttons if allowed */}
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
