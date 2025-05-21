import { useState, useEffect } from "react";
import axios from "axios";
import { useBooksService } from "../services/useBooksService";

// Custom hook to handle wishlist/cart logic
export function useBookActions() {
  // Local state for wishlist and cart
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  // Pull API functions from service
  const { postBooks, deleteBooks } = useBooksService();

  // Strips unwanted path from book key
  const normalizeKey = (key) => {
    if (typeof key === "string") {
      return key.replace("/works/", "");
    }
    return "";
  };

  // Add book to wishlist if not already there
  const addToWishlist = async (book) => {
    const key = normalizeKey(book.key);

    const alreadyInWishlist = wishlist.some((item) => {
      return item.key === key;
    });

    if (alreadyInWishlist) {
      return;
    }

    try {
      const response = await postBooks("/wishlist", book);

      const added = response?.data;
      if (!added || !added.id) {
        return;
      }

      // Add to local state
      setWishlist((previousList) => {
        return [
          ...previousList,
          {
            key: key,
            id: added.id,
          },
        ];
      });
    } catch (error) {
      console.error("Error adding book to wishlist:", error);
    }
  };

  // Remove book from wishlist
  const removeFromWishlist = async (book) => {
    try {
      const key = normalizeKey(book.key);

      const item = wishlist.find((entry) => {
        return entry.key === key;
      });

      if (!item) {
        return;
      }

      await deleteBooks(`/wishlist/${item.id}`);

      setWishlist((previousList) => {
        const updatedList = previousList.filter((entry) => {
          return entry.key !== key;
        });
        return updatedList;
      });
    } catch (error) {
      console.error("Error removing book from wishlist:", error);
    }
  };

  // Add book to cart if not already there
  const addToCart = async (book) => {
    const key = normalizeKey(book.key);

    const alreadyInCart = cart.some((item) => {
      return item.key === key;
    });

    if (alreadyInCart) {
      return;
    }

    try {
      const response = await postBooks("/cart", book);

      const added = response?.data;
      if (!added || !added.id) {
        return;
      }

      // Add to local state
      setCart((previousList) => {
        return [
          ...previousList,
          {
            key: key,
            id: added.id,
          },
        ];
      });
    } catch (error) {
      console.error("Error adding book to cart:", error);
    }
  };

  // Remove book from cart
  const removeFromCart = async (book) => {
    try {
      const key = normalizeKey(book.key);

      const item = cart.find((entry) => {
        return entry.key === key;
      });

      if (!item) {
        return;
      }

      await deleteBooks(`/cart/${item.id}`);

      setCart((previousList) => {
        const updatedList = previousList.filter((entry) => {
          return entry.key !== key;
        });
        return updatedList;
      });
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

        const wishlistData = wishRes.data.filter((book) => {
          return typeof book.key === "string";
        });

        const formattedWishlist = wishlistData.map((book) => {
          return {
            key: normalizeKey(book.key),
            id: book.id,
          };
        });

        setWishlist(formattedWishlist);

        const cartRes = await axios.get(
          "https://tales-tomes-production.up.railway.app/cart"
        );

        const cartData = cartRes.data.filter((book) => {
          return typeof book.key === "string";
        });

        const formattedCart = cartData.map((book) => {
          return {
            key: normalizeKey(book.key),
            id: book.id,
          };
        });

        setCart(formattedCart);
      } catch (err) {
        console.error("Error loading wishlist/cart:", err);
      }
    };

    fetchLists();
  }, []);

  // Show all actions and data to components
  return {
    wishlist,
    cart,
    addToWishlist,
    removeFromWishlist,
    addToCart,
    removeFromCart,
  };
}
