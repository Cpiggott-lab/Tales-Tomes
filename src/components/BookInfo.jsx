
function BookInfo({ title, author }) {
  return (
    <>
      <h2 className="book-title">{title}</h2>
      <p className="book-author">{author}</p>
    </>
  );
}

export default BookInfo;
