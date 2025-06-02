import { useState, useEffect } from "react";
import axios from "axios";
import { useBooksService } from "../services/useBooksService";

export function useBookActions() {
 
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

 
  const { postBooks, deleteBooks } = useBooksService();

 
  const normalizeKey = (key) => {
    if (typeof key === "string") {
      return key.replace("/works/", "");
    }
    return "";
  };

 
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

 
  return {
    wishlist,
    cart,
    addToWishlist,
    removeFromWishlist,
    addToCart,
    removeFromCart,
  };
}
