// https://dev.to/surajondev/building-an-infinite-scroll-component-in-react-1ljb

import { useEffect, useState } from "react";
import axios from "axios";
import { booksService } from "../services/books.service";

export function useInfiniteBooks({ subject = "fiction", pause = false }) {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const { getBooks } = booksService();

  // infinite scroll logic
  const fetchBooks = async () => {
    if (pause) return; // don't load more if we're searching
    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=subject:${subject}&page=${page}`
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

  // fetch static data from our backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        await getBooks("/library");
      } catch (error) {
        console.error("Error fetching books from library:", error);
      }
    };
    fetchData();
  }, []);

  const handleScroll = () => {
    if (
      document.body.scrollHeight - 300 <
      window.scrollY + window.innerHeight
    ) {
      setLoading(true); // will trigger next page
    }
  };

  // debounce reduced the rate of the scroll. stops the function from being called constantly.
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
    const debouncedScroll = debounce(handleScroll, 500);
    window.addEventListener("scroll", debouncedScroll);
    return () => window.removeEventListener("scroll", debouncedScroll);
  }, []);

  useEffect(() => {
    if (loading) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [loading]);

  return {
    books,
    setBooks,
    loading,
    setLoading,
    page,
    setPage,
  };
}
