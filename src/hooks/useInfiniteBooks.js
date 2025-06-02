

import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useBooksService } from "../services/useBooksService";

export function useInfiniteBooks({ subject = "fiction", pause = false }) {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const { getBooks } = useBooksService();

 
  const fetchBooks = async () => {
    if (pause || loading) return;
    setLoading(true);
    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=subject:${subject}&page=${page}`
      );
      setBooks((prevBooks) => [...prevBooks, ...response.data.docs]);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

 
  useEffect(() => {
    fetchBooks();
  }, [page]);

 
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
      document.body.scrollHeight - 300 < window.scrollY + window.innerHeight &&
      !loading
    ) {
      setPage((prevPage) => prevPage + 1);
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
    const debouncedScroll = debounce(handleScroll, 500);
    window.addEventListener("scroll", debouncedScroll);
    return () => window.removeEventListener("scroll", debouncedScroll);
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
