import { useEffect, useState } from "react";
import "./Homepage.style.css";
import { useBookActions } from "../../hooks/useBookActions";
import BookList from "../../components/BookList";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BookCardInfo from "../../components/BookCardInfo";
import SkeletonBookCard from "../../components/SkeletonCard";
import { Link } from "react-router-dom";
import Search from "../../components/Search";

function HomePage() {
  const [carouselBooks, setCarouselBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const {
    wishlist,
    cart,
    addToWishlist,
    removeFromWishlist,
    addToCart,
    removeFromCart,
  } = useBookActions();

 
  useEffect(() => {
    async function fetchExternalBooks() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://openlibrary.org/subjects/fantasy.json?limit=50"
        );
        const json = await response.json();
        const allBooks = json.works;

        const shuffled = allBooks.sort(() => 0.5 - Math.random());
        const randomBooks = shuffled.slice(0, 20);

        setCarouselBooks(randomBooks);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchExternalBooks();
  }, []);

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

  return (
    <div className="homepage">
      <div>
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={!loading}
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
          {loading
            ? Array.from({ length: 10 }).map((_, i) => (
                <SkeletonBookCard key={`skeleton-${i}`} />
              ))
            : carouselBooks.map((book) => (
                <BookCardInfo key={book.key} book={book} />
              ))}
        </Carousel>
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
          <Search setBooks={setSearchResults} />
        </div>

        {searchResults.length > 0 && (
          <div className="search-results">
            <BookList
              books={searchResults}
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
