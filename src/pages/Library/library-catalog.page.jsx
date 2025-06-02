import "./library-catalog.style.css";
import Search from "../../components/Search";
import BookList from "../../components/BookList";
import { useBookActions } from "../../hooks/useBookActions";
import { useInfiniteBooks } from "../../hooks/useInfiniteBooks";
import { useState } from "react";

function LibraryCatalog() {
 
  const [searching, setSearching] = useState(false);

 
  const {
    wishlist,
    cart,
    addToWishlist,
    removeFromWishlist,
    addToCart,
    removeFromCart,
  } = useBookActions();

 
  const { books, setBooks, loading, error } = useInfiniteBooks({
    subject: "fiction",
    pause: searching,
  });

 
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

        {}
        <div className="search-bar-wrapper">
          <Search
            setBooks={(books) => {
              setSearching(true);
              setBooks(books);
            }}
          />
        </div>
      </div>

      {}
      <BookList
        books={books}
        wishlist={wishlist}
        cart={cart}
        addToWishlist={addToWishlist}
        removeFromWishlist={removeFromWishlist}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        showDetails={true}
        loading={loading}
      />
    </div>
  );
}

export default LibraryCatalog;
