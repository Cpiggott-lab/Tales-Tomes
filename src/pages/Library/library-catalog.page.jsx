import "./library-catalog.style.css";
import Search from "../../components/Search";
import BookList from "../../components/BookList";
import { useBookActions } from "../../hooks/useBookActions";
import { useInfiniteBooks } from "../../hooks/useInfiniteBooks";
import { useState } from "react";
import { useBooksService } from "../../services/useBooksService";

function LibraryCatalog() {
  // Track whether we're in search mode — stops infinite scroll when true
  const [searching, setSearching] = useState(false);
  const [updateSate, setUpdateState] = useState(false);
  // Get wishlist/cart state and handlers
  const {
    wishlist,
    cart,
    addToWishlist,
    removeFromWishlist,
    addToCart,
    removeFromCart,
  } = useBookActions();

  // Load books with infinite scroll — paused if searching
  const { books, setBooks, fetchBooks, loading, error } = useInfiniteBooks({
    subject: "fiction",
    pause: searching,
  });

  const handleAdd = (book) => {
    addToCart(book);
    fetchBooks();
  };

  const handleRemove = (book) => {
    removeFromCart(book);
    fetchBooks();
  };

  // Show error if the fetch failed
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="library-catalog">
      <div className="library-catalog-header">
        <h1 className="library-catalog-title">Books</h1>
        <p className="library-catalog-subtitle">
          Discover our wide selection of books online: novels, mysteries,
          nonfiction, and more. Here you'll find the perfect book for every
          occasion. Be inspired and find your new favorite book now!
        </p>

        {/* Search bar replaces books and pauses scroll */}
        <div className="search-bar-wrapper">
          <Search
            setBooks={(books) => {
              setSearching(true); // once search runs, pause infinite scroll
              setBooks(books); // overwrite book list with search results
            }}
          />
        </div>
      </div>

      {/* Show books using reusable BookList */}
      <BookList
        books={books}
        wishlist={wishlist}
        cart={cart}
        addToWishlist={addToWishlist}
        removeFromWishlist={removeFromWishlist}
        addToCart={handleAdd}
        removeFromCart={handleRemove}
        showDetails={true}
        loading={loading}
        showRemoveFromCart={removeFromCart}
      />
    </div>
  );
}

export default LibraryCatalog;
