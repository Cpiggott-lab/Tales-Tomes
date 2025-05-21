import { Link } from "react-router-dom";
import { normalizeKey } from "./NormalizedKey";
import { truncateAuthor, truncateText } from "./truncateText";

function BookCardInfo({
  book,
  hideButtons = false, // hide action buttons completely
  showRemoveFromCart = false, // show only remove from cart
}) {
  console.log("boooook!!", book);
  const normalizedKey = normalizeKey(book.key);
  const truncatedTitle = truncateText(book.title);
  const truncatedAuthor = truncateAuthor(book.author_name);
  const imageUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "";
  return (
    <div key={`${normalizedKey}-${book.key}`} className="book-item">
      <div className="book-info-block">
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
        {/* Show title + author */}
        <div className="book-info">
          <h2 className="book-title">{truncatedTitle}</h2>
          <p className="book-author">by {truncatedAuthor}</p>
        </div>
        {/* Only show buttons if allowed */}
        {(!hideButtons || showRemoveFromCart) && (
          <div className="book-actions"></div>
        )}
      </div>
    </div>
  );
}
export default BookCardInfo;
