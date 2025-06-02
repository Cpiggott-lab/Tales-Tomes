import React, { useState } from "react";

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

 
  const [wasJustAddedToCart, setWasJustAddedToCart] = useState(false);
  const [wasJustAddedToWishlist, setWasJustAddedToWishlist] = useState(false);

 
  const isInCart =
    wasJustAddedToCart || (cart && cart.some((item) => item.key === bookKey));

  const isInWishlist =
    wasJustAddedToWishlist ||
    (wishlist && wishlist.some((item) => item.key === bookKey));

 
  const handleAddToCart = async () => {
    await addToCart(book);
    setWasJustAddedToCart(true);
  };

 
  const handleAddToWishlist = async () => {
    await addToWishlist(book);
    setWasJustAddedToWishlist(true);
  };

  return (
    <div className="button-group">
      {}
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

      {}
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
