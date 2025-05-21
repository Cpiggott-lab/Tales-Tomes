import React from "react";

// Renders buttons to add/remove a book from wishlist or cart
function BookCardButtons(props) {
  const {
    book,
    wishlist,
    cart,
    addToWishlist,
    removeFromWishlist,
    addToCart,
    removeFromCart,
  } = props;

  // Check if book is already in wishlist
  let isInWishlist = false;
  if (wishlist && Array.isArray(wishlist)) {
    for (let i = 0; i < wishlist.length; i++) {
      const item = wishlist[i];
      if (item.key === book.key) {
        isInWishlist = true;
        break;
      }
    }
  }

  // Check if book is already in cart
  let isInCart = false;
  if (cart && Array.isArray(cart)) {
    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];
      if (item.key === book.key) {
        isInCart = true;
        break;
      }
    }
  }

  // Render action buttons
  return (
    <div className="button-group">
      {/* Show if book not in wishlist */}
      {addToWishlist && isInWishlist === false && (
        <button className="cart-button" onClick={() => addToWishlist(book)}>
          Add to Wishlist
        </button>
      )}

      {/* Show if book is already in wishlist */}
      {removeFromWishlist && isInWishlist === true && (
        <button
          className="cart-button"
          onClick={() => removeFromWishlist(book)}
        >
          Remove from Wishlist
        </button>
      )}

      {/* Show if book not in cart */}
      {addToCart && isInCart === false && (
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

// Optimization: only rerenders if props actually change
export default React.memo(BookCardButtons);
