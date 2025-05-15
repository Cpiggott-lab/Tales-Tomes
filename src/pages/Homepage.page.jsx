import "./Homepage.style.css";

function HomePage() {
  return (
    <>
      <div className="homepage">
        <section className="logo-search-section">
          <img
            src="./public/ChatGPT Image May 14, 2025, 10_40_02 PM.png"
            alt="Tales & Tomes Logo"
            className="logo-image"
          />
          <form className="search-form">
            <input
              type="text"
              className="search-input"
              placeholder="Search for a book..."
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
        </section>
        <h1 className="homepage-title">Welcome Travelers of Epic Tomes!</h1>
        <p className="homepage-subtitle">
          Discover new worlds, track your reading journey, and find your next
          favorite book.
        </p>
        <a href="/library-catalog" className="homepage-button">
          Browse Library
        </a>
      </div>
    </>
  );
}

export default HomePage;
