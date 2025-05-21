import React, { useState } from "react";

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

  const bookKey = book?.key;

  // fix for instant render onclick.
  const [wasJustAddedToCart, setWasJustAddedToCart] = useState(false);
  const [wasJustAddedToWishlist, setWasJustAddedToWishlist] = useState(false);

  // Check against state and local flags
  const isInCart =
    wasJustAddedToCart || (cart && cart.some((item) => item.key === bookKey));

  const isInWishlist =
    wasJustAddedToWishlist ||
    (wishlist && wishlist.some((item) => item.key === bookKey));

  // Trigger cart and local UI switch
  const handleAddToCart = async () => {
    await addToCart(book);
    setWasJustAddedToCart(true);
  };

  // Trigger wishlist add local UI switch
  const handleAddToWishlist = async () => {
    await addToWishlist(book);
    setWasJustAddedToWishlist(true);
  };

  return (
    <div className="button-group">
      {/* Wishlist Buttons */}
      {!isInWishlist && addToWishlist && (
        <button className="cart-button" onClick={handleAddToWishlist}>
          Add to Wishlist
        </button>
      )}

      {isInWishlist && removeFromWishlist && (
        <button
          className="cart-button"
          onClick={() => removeFromWishlist(book)}
        >
          Remove from Wishlist
        </button>
      )}

      {/* Cart Buttons */}
      {!isInCart && addToCart && (
        <button className="cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      )}

      {isInCart && removeFromCart && (
        <button className="cart-button" onClick={() => removeFromCart(book)}>
          Remove from Cart
        </button>
      )}
    </div>
  );
}

export default BookCardButtons;
