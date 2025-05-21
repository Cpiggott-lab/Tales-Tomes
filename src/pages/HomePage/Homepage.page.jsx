import { useEffect, useState } from "react";
import "./Homepage.style.css";
import { useBookActions } from "../../hooks/useBookActions";
import BookList from "../../components/BookList";
import Carousel from "react-multi-carousel";
import { useBooksService } from "../../services/useBooksService";
import "react-multi-carousel/lib/styles.css";
import BookCardInfo from "../../components/BookCardInfo";
import { Link } from "react-router-dom";
import Search from "../../components/Search";
// import BookCardInfo from "../../components/BookCardInfo";

function HomePage() {
  const [books, setBooks] = useState([]);
  const {
    wishlist,
    cart,
    addToWishlist,
    removeFromWishlist,
    addToCart,
    removeFromCart,
  } = useBookActions();

  const { data, error, loading, getBooks } = useBooksService();

  useEffect(() => {
    getBooks("/wishlist");
  }, []);

  //from carousel library.
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  console.log("dataaaaa", data);

  return (
    <div className="homepage">
      <div>
        {data && data.length > 0 && (
          <Carousel
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="transform 300ms ease-in-out"
            transitionDuration={1500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            rewindWithAnimation={true}
          >
            {data.map((book) => (
              <BookCardInfo book={book} />
            ))}
          </Carousel>
        )}
      </div>
      <div className="lower-main-page">
        <h1 className="homepage-title">Welcome Travelers of Epic Tomes!</h1>
        <p className="homepage-subtitle">
          Discover new worlds, track your reading journey, and find your next
          favorite book.
        </p>
        <Link to="/library-catalog" className="homepage-button">
          Browse Library
        </Link>
        <div className="search-bar-wrapper">
          <Search setBooks={setBooks} />
        </div>
        {books.length > 0 && (
          <div className="search-results">
            <BookList
              books={books}
              wishlist={wishlist}
              cart={cart}
              addToWishlist={addToWishlist}
              removeFromWishlist={removeFromWishlist}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              showDetails={true}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
