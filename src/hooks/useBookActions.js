import { useState, useEffect } from "react";
import axios from "axios";
import { useBooksService } from "../services/useBooksService";

// Custom hook to handle wishlist/cart logic
export function useBookActions() {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  // Pull API functions from service
  const { postBooks, deleteBooks } = useBooksService();

  // Strips unwanted path from book key
  const normalizeKey = (key) =>
    typeof key === "string" ? key.replace("/works/", "") : "";

  // Add book to wishlist if not already there
  const addToWishlist = async (book) => {
    const key = normalizeKey(book.key);
    if (wishlist.some((item) => item.key === key)) return;

    try {
      const response = await postBooks("/wishlist", book);
      const added = response?.data;
      if (!added?.id) return;

      // Add to local state
      setWishlist((prev) => [
        ...prev,
        { key: normalizeKey(book.key), id: added.id },
      ]);
    } catch (error) {
      console.error("Error adding book to wishlist:", error);
    }
  };

  // Remove book from wishlist
  const removeFromWishlist = async (book) => {
    try {
      const normalizedKey = normalizeKey(book.key);
      const item = wishlist.find((item) => item.key === normalizedKey);
      if (!item) return;

      await deleteBooks(`/wishlist/${item.id}`);
      setWishlist((prev) => prev.filter((item) => item.key !== normalizedKey));
    } catch (error) {
      console.error("Error removing book from wishlist:", error);
    }
  };

  // Add book to cart if not already there
  const addToCart = async (book) => {
    const key = normalizeKey(book.key);
    if (cart.some((item) => item.key === key)) return;

    try {
      const response = await postBooks("/cart", book);
      const added = response?.data;
      if (!added?.id) return;

      // Add to local state
      setCart((prev) => [
        ...prev,
        { key: normalizeKey(book.key), id: added.id },
      ]);
    } catch (error) {
      console.error("Error adding book to cart:", error);
    }
  };

  // Remove book from cart
  const removeFromCart = async (book) => {
    try {
      const normalizedKey = normalizeKey(book.key);
      const item = cart.find((item) => item.key === normalizedKey);
      if (!item) return;

      await deleteBooks(`/cart/${item.id}`);
      setCart((prev) => prev.filter((item) => item.key !== normalizedKey));
    } catch (error) {
      console.error("Error removing book from cart:", error);
    }
  };

  // On load, fetch wishlist and cart from backend
  useEffect(() => {
    const fetchLists = async () => {
      try {
        const wishRes = await axios.get(
          "https://tales-tomes-production.up.railway.app/wishlist"
        );
        setWishlist(
          wishRes.data
            .filter((book) => typeof book.key === "string")
            .map((book) => ({
              key: normalizeKey(book.key),
              id: book.id,
            }))
        );

        const cartRes = await axios.get(
          "https://tales-tomes-production.up.railway.app/cart"
        );
        setCart(
          cartRes.data
            .filter((book) => typeof book.key === "string")
            .map((book) => ({
              key: normalizeKey(book.key),
              id: book.id,
            }))
        );
      } catch (err) {
        console.error("Error loading wishlist/cart:", err);
      }
    };

    fetchLists();
  }, []);

  // show all actions and data to components
  return {
    wishlist,
    cart,
    addToWishlist,
    removeFromWishlist,
    addToCart,
    removeFromCart,
  };
}
