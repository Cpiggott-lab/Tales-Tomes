import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { bookId } = useParams();

  return (
    <div>
      <h1>Book Detail Page</h1>
      <p>Book ID: {bookId}</p>
    </div>
  );
}
//Make a product page that will display the book details
// The book details will be fetched from the API using the book ID
// The book ID will be passed as a URL parameter
// The book details will be displayed in a card format
// The card will include the book title, author, description, and cover image
// The card will also include buttons to add the book to the cart and wishlist
