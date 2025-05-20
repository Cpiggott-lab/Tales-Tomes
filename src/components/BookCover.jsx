// Renders a book cover image if coverId is available
function BookCover({ coverId, title, className = "book-cover" }) {
  if (!coverId) return null;

  return (
    <img
      loading="lazy" //lazy loading for images
      src={`https://covers.openlibrary.org/b/id/${coverId}-M.jpg`}
      alt={title}
      className={className}
    />
  );
}

export default BookCover;
