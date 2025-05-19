import { useState, useEffect } from "react";
import { useBooksService } from "../../services/useBooksService";
import BookList from "../../components/BookList";
import "./cart.style.css";

function CartPage() {
  const { getBooks, deleteBooks, postBooks } = useBooksService();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCart = async () => {
    try {
      await getBooks("/cart");
      const response = await fetch(
        "https://tales-tomes-production.up.railway.app/cart"
      );
      const data = await response.json();
      setCartItems(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const totalPrice = cartItems.reduce(
    (acc, book) => acc + (book.price || 0),
    0
  );

  const clearCart = async () => {
    try {
      for (const book of cartItems) {
        await deleteBooks(`/cart/${book.id}`);
      }
      setCartItems([]);
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  const removeItem = async (bookId) => {
    try {
      await deleteBooks(`/cart/${bookId}`);
      setCartItems((prev) => prev.filter((b) => b.id !== bookId));
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const handlePayClick = async (e) => {
    e.preventDefault();
    try {
      for (const book of cartItems) {
        await postBooks("/owned", book);
        await deleteBooks(`/cart/${book.id}`);
      }
      setCartItems([]);
    } catch (error) {
      console.error("Error moving books to owned:", error);
    }
  };

  if (loading) return <p>Loading cart...</p>;

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h1>Your cart is empty!</h1>
        <p>Add books to your cart from the library catalog or wishlist.</p>
      </div>
    );
  }

  return (
    <div className="cart-page-container">
      <h1 className="cart-title">Cart</h1>
      <div className="cart-page">
        <div className="cart-items-container">
          <BookList
            books={cartItems}
            cart={cartItems}
            showDetails={true}
            hideButtons={true}
            showRemoveFromCart={true}
            removeFromCart={removeItem}
          />
          <button className="cart-button-clear" onClick={clearCart}>
            Clear Cart
          </button>
        </div>

        <div className="checkout-container">
          <div className="details-form">
            <h1>Checkout</h1>
            <h2>Total: €{totalPrice.toFixed(2)}</h2>
            <h2 className="items-in-cart">Items in Cart: {cartItems.length}</h2>
            <form
              className="checkout-form-details"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="full-name">Full Name</label>
              <input type="text" id="full-name" name="full-name" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" required />

              <label htmlFor="address">Street Address</label>
              <input type="text" id="address" name="address" required />

              <label htmlFor="address2">Address Line 2</label>
              <input type="text" id="address2" name="address2" />

              <label htmlFor="city">City</label>
              <input type="text" id="city" name="city" required />

              <label htmlFor="state">State/Province</label>
              <input type="text" id="state" name="state" required />

              <label htmlFor="zip">Zip / Postal Code</label>
              <input type="text" id="zip" name="zip" required />

              <label htmlFor="country">Country</label>
              <input type="text" id="country" name="country" required />
            </form>
          </div>

          <div className="payment-form">
            <h1>Payment</h1>

            <div className="payment-method-buttons">
              <button type="button" className="payment-method selected">
                Credit Card
              </button>
              <button type="button" className="payment-method">
                PayPal
              </button>
              <button type="button" className="payment-method">
                Apple Pay
              </button>
            </div>

            <form className="payment-form-details" onSubmit={handlePayClick}>
              <label htmlFor="card-number">Card Number</label>
              <input type="text" id="card-number" name="card-number" />

              <label htmlFor="expiry-date">Expiry Date</label>
              <input type="text" id="expiry-date" name="expiry-date" />

              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" name="cvv" />

              <button type="submit" className="cart-button">
                Pay
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;

// Need to render cart items as a list, need to add in price values to books in the library
// add total for the books in the cart
// add a checkout button
// add a clear cart button
// add a remove item button
// add a remove all button
// add payment options/form for payment options. Do not take information or offer to take info.
// no functionality for the payment options
