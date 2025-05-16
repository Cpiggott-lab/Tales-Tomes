function BookCover({ coverId, title, className = "book-cover" }) {
  if (!coverId) return null;

  return (
    <img
      src={`https://covers.openlibrary.org/b/id/${coverId}-M.jpg`}
      alt={title}
      className={className}
    />
  );
}

export default BookCover;
