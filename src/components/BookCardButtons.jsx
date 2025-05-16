import { normalizeKey } from "./NormalizedKey";

export default function BookCardButtons({
  book,
  wishlist,
  cart,
  addToWishlist,
  removeFromWishlist,
  addToCart,
  removeFromCart,
}) {
  // Normalize the key here to ensure matching across cart/wishlist. Without this the buttons dont work.
  const normalizedKey = normalizeKey(book.key);

  const isInWishlist = wishlist.some((item) => item.key === normalizedKey);
  const isInCart = cart.some((item) => item.key === normalizedKey);

  return (
    <div className="book-card-button-container">
      {isInWishlist ? (
        <button
          onClick={() => removeFromWishlist(book)}
          className="book-card-button"
        >
          REMOVE FROM WISHLIST
        </button>
      ) : (
        <button
          onClick={() => addToWishlist(book)}
          className="book-card-button"
        >
          WISHLIST
        </button>
      )}

      {isInCart ? (
        <button
          onClick={() => removeFromCart(book)}
          className="book-card-button"
        >
          REMOVE FROM CART
        </button>
      ) : (
        <button onClick={() => addToCart(book)} className="book-card-button">
          ADD TO CART
        </button>
      )}
    </div>
  );
}
