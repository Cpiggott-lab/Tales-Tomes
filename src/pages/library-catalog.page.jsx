import axios from "axios";
import { useEffect, useState } from "react";
import "./library-catalog.style.css";
// https://tales-tomes-production.up.railway.app/library

function LibraryCatalog() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  //infinite scroll https://dev.to/surajondev/building-an-infinite-scroll-component-in-react-1ljb
  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=subject:fiction&page=${page}`
      );
      setBooks((prevBooks) => [...prevBooks, ...response.data.docs]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [page]);

  const handleScroll = () => {
    if (
      document.body.scrollHeight - 300 <
      window.scrollY + window.innerHeight
    ) {
      setLoading(true);
    }
  };

  function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }

  useEffect(() => {
    window.addEventListener("scroll", debounce(handleScroll, 500));

    return () =>
      window.removeEventListener("scroll", debounce(handleScroll, 500));
  }, []);

  useEffect(() => {
    if (loading) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [loading]);

  return (
    <div className="library-catalog">
      <h1 className="library-catalog-title">Library Catalog</h1>
      <div className="book-list">
        {books.map((book, index) => (
          <div key={`${book.key}`} className="book-item">
            {book.cover_i && (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={book.title}
              />
            )}
            <h2 className="book-title">{book.title}</h2>
            <p className="book-author">{book.author_name}</p>
          </div>
        ))}
      </div>
      {loading && <p>Loading...</p>}
    </div>
  );
}
export default LibraryCatalog;
