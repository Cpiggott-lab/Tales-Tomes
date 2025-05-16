import { useEffect, useState } from "react";
import { booksService } from "../../services/books.service";
import "./Wish-list.style.css";
import BookList from "../../components/BookList";

function WishlistPage() {
  const [wishlistBooks, setWishlistBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getBooks, deleteBooks, postBooks } = booksService();

  const fetchWishlist = async () => {
    try {
      await getBooks("/wishlist");
      const response = await fetch(
        "https://tales-tomes-production.up.railway.app/wishlist"
      );
      const data = await response.json();
      setWishlistBooks(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  const handleRemoveFromWishlist = async (book) => {
    try {
      await deleteBooks(`/wishlist/${book.id}`);
      setWishlistBooks((prev) => prev.filter((b) => b.id !== book.id));
    } catch (error) {
      console.error("Error removing from wishlist:", error);
    }
  };

  const handleAddToCart = async (book) => {
    try {
      await postBooks("/cart", book);
      await deleteBooks(`/wishlist/${book.id}`);
      setWishlistBooks((prev) => prev.filter((b) => b.id !== book.id));
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  if (loading) {
    return <p className="loading-list">Loading wishlist...</p>;
  }

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
      <BookList
        books={wishlistBooks}
        wishlist={wishlistBooks}
        cart={[]}
        addToWishlist={() => {}}
        removeFromWishlist={handleRemoveFromWishlist}
        addToCart={handleAddToCart}
        removeFromCart={() => {}}
        showDetails={true}
      />
    </div>
  );
}

export default WishlistPage;
