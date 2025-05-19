export default function BookCardButtons({
  book,
  wishlist,
  cart,
  addToWishlist,
  removeFromWishlist,
  addToCart,
  removeFromCart,
}) {
  let isInWishlist = false;
  let isInCart = false;

  if (wishlist && Array.isArray(wishlist)) {
    isInWishlist = wishlist.some((b) => b.key === book.key);
  }

  if (cart && Array.isArray(cart)) {
    isInCart = cart.some((b) => b.key === book.key);
  }

  return (
    <div className="button-group">
      {addToWishlist && !isInWishlist && (
        <button className="cart-button" onClick={() => addToWishlist(book)}>
          Add to Wishlist
        </button>
      )}

      {removeFromWishlist && isInWishlist && (
        <button
          className="cart-button"
          onClick={() => removeFromWishlist(book)}
        >
          Remove from Wishlist
        </button>
      )}

      {addToCart && !isInCart && (
        <button className="cart-button" onClick={() => addToCart(book)}>
          Add to Cart
        </button>
      )}

      {removeFromCart && (
        <button className="cart-button" onClick={() => removeFromCart(book.id)}>
          Remove from Cart
        </button>
      )}
    </div>
  );
}
