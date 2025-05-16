import "./About.style.css";

function AboutMePage() {
  return (
    <div className="about-page">
      <h1 className="about-title">About This App</h1>
      <div className="about-content">
        <p>
          <strong>Tales & Tomes</strong> is a full-stack book catalog and
          wishlist management application, built to practice modern web
          development concepts including frontend frameworks, REST APIs, and
          dynamic data handling.
        </p>
        <p>
          The frontend is developed using <strong>React</strong> with{" "}
          <strong>Vite</strong> for fast development and build processes.
          Styling is handled through <strong>custom CSS</strong> to create
          clean, responsive layouts for different sections like the library,
          wishlist, and cart.
        </p>
        <p>
          The app fetches real book data from the{" "}
          <strong>OpenLibrary API</strong>, using <strong>Axios</strong> for API
          calls. A mock backend server built with <strong>JSON Server</strong>{" "}
          is used to simulate a database, handling wishlist and cart
          functionality with real POST and DELETE operations.
        </p>
        <p>
          State management is handled through <strong>React hooks</strong> like{" "}
          <code>useState</code> and <code>useEffect</code>. The application uses{" "}
          <strong>infinite scroll</strong> to dynamically load more books as the
          user navigates, improving performance and user experience.
        </p>
        <p>
          Overall, Tales & Tomes is a hands-on project designed to practice API
          integration, backend communication, state updates, conditional
          rendering, user actions (like adding and removing items), and building
          a scalable, component-based application.
        </p>
      </div>
    </div>
  );
}

export default AboutMePage;
