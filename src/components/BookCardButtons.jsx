// Renders buttons to add/remove a book from wishlist or cart
import React from "react";
function BookCardButtons({
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

  // Check if book is in wishlist
  if (wishlist && Array.isArray(wishlist)) {
    isInWishlist = wishlist.some((b) => b.key === book.key);
  }

  // Check if book is in cart
  if (cart && Array.isArray(cart)) {
    isInCart = cart.some((b) => b.key === book.key);
  }

  return (
    <div className="button-group">
      {/* Show if book not in wishlist */}
      {addToWishlist && !isInWishlist && (
        <button className="cart-button" onClick={() => addToWishlist(book)}>
          Add to Wishlist
        </button>
      )}

      {/* Show if book already in wishlist */}
      {removeFromWishlist && isInWishlist && (
        <button
          className="cart-button"
          onClick={() => removeFromWishlist(book)}
        >
          Remove from Wishlist
        </button>
      )}

      {/* Show if book not in cart */}
      {addToCart && !isInCart && (
        <button className="cart-button" onClick={() => addToCart(book)}>
          Add to Cart
        </button>
      )}

      {/* Always show if removeFromCart is passed */}
      {removeFromCart && (
        <button className="cart-button" onClick={() => removeFromCart(book.id)}>
          Remove from Cart
        </button>
      )}
    </div>
  );
}

// only renders again if the props change. Attempt at optimization.
export default React.memo(BookCardButtons);
