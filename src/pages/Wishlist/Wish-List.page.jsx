import { useEffect, useState } from "react";
import "./Wish-list.style.css";
import BookList from "../../components/BookList";
import { useBooksService } from "../../services/useBooksService";

function WishlistPage() {
  const [wishlistBooks, setWishlistBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { deleteBooks, postBooks } = useBooksService(); //bringing iin Services

  // Load wishlist from backend
  const fetchWishlist = async () => {
    try {
      const res = await fetch(
        "https://tales-tomes-production.up.railway.app/wishlist"
      );
      const data = await res.json();
      setWishlistBooks(data);
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    } finally {
      setLoading(false);
    }
  };

  // Run once on mount
  useEffect(() => {
    fetchWishlist();
  }, []);

  // Remove book from wishlist
  const handleRemoveFromWishlist = async (book) => {
    try {
      await deleteBooks(`/wishlist/${book.id}`);

      setWishlistBooks((previousBooks) => {
        const filteredBooks = previousBooks.filter((b) => {
          return b.id !== book.id;
        });

        return filteredBooks;
      });
    } catch (error) {
      console.error("Error removing from wishlist:", error);
    }
  };

  // Move book to cart and remove from wishlist
  const handleAddToCart = async (book) => {
    try {
      await postBooks("/cart", book);

      await deleteBooks(`/wishlist/${book.id}`);

      setWishlistBooks((previousBooks) => {
        const filteredBooks = previousBooks.filter((b) => {
          return b.id !== book.id;
        });

        return filteredBooks;
      });
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  if (loading) return <p className="loading-list">Loading wishlist...</p>;

  if (wishlistBooks.length === 0) {
    return <h1 className="wishlist-empty">Wishlist is empty!</h1>;
  }

  return (
    <div className="wishlist-catalog">
      <div className="wishlist-header">
        <h1 className="wishlist-title">Your Wishlist</h1>
        <p className="wishlist-subtitle">
          Every great tale begins with a single step - start your journey by
          choosing your next read.
        </p>
      </div>

      {/* Reuse BookList with wishlist props */}
      <BookList
        books={wishlistBooks}
        wishlist={wishlistBooks}
        cart={[]}
        addToWishlist={() => {}} // disable add button
        removeFromWishlist={handleRemoveFromWishlist}
        addToCart={handleAddToCart}
        removeFromCart={() => {}} // disable remove from cart
        showDetails={true}
      />
    </div>
  );
}

export default WishlistPage;
