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
  console.log("BUTTON", book);
  return (
    <div className="button-group">
      <button
        className="cart-button"
        onClick={() => (book.isInCart ? removeFromCart(book) : addToCart(book))}
      >
        {book.isInCart ? "remove from cart" : "add to cart"}
      </button>
      {/* Show if book not in wishlist */}
    </div>
  );
}

// Optimization: only rerenders if props actually change
export default BookCardButtons;
// export default React.memo(BookCardButtons);
