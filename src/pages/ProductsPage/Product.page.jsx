import { useParams } from "react-router-dom";
import "./Product.style.css";

export default function ProductPage() {
  const { bookId } = useParams();

  return (
    <>
      <div className="product-page">
        <h1 className="product-page-title">Book Detail Page</h1>
        <div className="book-details-container">
          <div className="book-cover-container">
            <img
              src={"#"}
              alt="Book Cover"
              className="product-page-book-cover"
            />
          </div>
          <div className="product-book-info-container">
            <h1 className="product-page-book-title">Title: </h1>
            <h3 className="product-page-book-id">Book ID: {bookId}</h3>
            <h3 className="product-page-book-author">Author: </h3>
            <p className="product-page-book-description">
              Description: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="product-page-buttons-container">
              <button className="product-page-button">Add to Cart</button>
              <button className="product-page-button">Add to Wishlist</button>
              <button className="product-page-button">Remove from Cart</button>
              <button className="product-page-button">
                Remove from Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//Make a product page that will display the book details
// The book details will be fetched from the API using the book ID
// The book ID will be passed as a URL parameter
// The book details will be displayed in a card format
// The card will include the book title, author, description, and cover image
// The card will also include buttons to add the book to the cart and wishlist
