// https://dev.to/surajondev/building-an-infinite-scroll-component-in-react-1ljb

import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useBooksService } from "../services/useBooksService";
import { normalizeKey } from "../components/NormalizedKey";

export function useInfiniteBooks({ subject = "fiction", pause = false }) {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // fetch books from OpenLibrary API by subject & page
  const fetchBooks = async () => {
    if (pause || loading) return; // don't load more if we're searching or already loading
    setLoading(true); // mark loading before API call starts
    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=subject:${subject}&page=${page}&limit=1`
      );
      const cartItems = await axios.get(
        "https://tales-tomes-production.up.railway.app/cart"
      );
      const newData = response.data.docs.map((doc) => {
        doc.key = normalizeKey(doc.key);
        for (const item of cartItems.data) {
          if (item.key === doc.key) {
            return {
              ...doc,
              isInCart: true,
              cartId: item.id,
            };
          }
        }
        return {
          ...doc,
          isInCart: false,
        };
      });
      setBooks((prevBooks) => [...newData]); // append books to current list
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false); // always stop loading after fetch attempt
    }
  };

  // run every time page changes (triggered by scroll)
  useEffect(() => {
    fetchBooks();
  }, [page]);

  // fetch static data from our backend
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       await getBooks("/library");
  //     } catch (error) {
  //       console.error("Error fetching books from library:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // infinite scroll logic: detect when near bottom of page
  const handleScroll = () => {
    if (
      document.body.scrollHeight - 300 < window.scrollY + window.innerHeight &&
      !loading // prevent triggering while still loading
    ) {
      setPage((prevPage) => prevPage + 1); // increase page to trigger new API fetch
    }
  };

  // debounce reduces the rate of scroll checks; stops the function from being called constantly
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

  // attach debounced scroll event listener on mount
  useEffect(() => {
    const debouncedScroll = debounce(handleScroll, 500);
    window.addEventListener("scroll", debouncedScroll);
    return () => window.removeEventListener("scroll", debouncedScroll);
  }, [loading]); // re-attach if loading state changes

  return {
    books,
    setBooks,
    loading,
    setLoading,
    page,
    setPage,
    fetchBooks,
  };
}
