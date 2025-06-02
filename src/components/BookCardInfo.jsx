import { Link } from "react-router-dom";
import { normalizeKey } from "./NormalizedKey";
import { truncateAuthor, truncateText } from "./truncateText";

function BookCardInfo({
  book,
  hideButtons = false,
  showRemoveFromCart = false,
}) {
  console.log("boooook!!", book);
  const normalizedKey = normalizeKey(book.key);
  const truncatedTitle = truncateText(book.title);
  const truncatedAuthor = truncateAuthor(book.author_name);
  const coverId = book.cover_i || book.cover_id;
  const imageUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : null;
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
              loading="lazy"
              src={imageUrl}
              alt={book.title}
              className="book-cover"
            />
          </Link>
        </div>
        {}
        <div className="book-info">
          <h2 className="book-title">{truncatedTitle}</h2>
          <p className="book-author">by {truncatedAuthor}</p>
        </div>
        {}
        {(!hideButtons || showRemoveFromCart) && (
          <div className="book-actions"></div>
        )}
      </div>
    </div>
  );
}
export default BookCardInfo;
