import "./About.style.css";

function AboutMePage() {
  return (
    <div className="about-page">
      <h1 className="about-title">About This App</h1>
      <div className="about-content">
        <p>
          <strong>Tales & Tomes</strong> is a full-stack book catalog and
          personal library management app, built as a hands-on project to
          explore real-world web development from frontend to backend.
        </p>

        <p>
          The frontend is built with <strong>React</strong> and uses{" "}
          <strong>Vite</strong> for lightning-fast development. Styling is done
          with <strong>custom CSS</strong> for clean, responsive layouts across
          pages like the catalog, wishlist, cart, and personal library.
        </p>

        <p>
          Book data comes from the <strong>OpenLibrary API</strong>, while
          features like wishlisting, shopping cart, and owned book tracking are
          powered by a <strong>mock backend</strong> built using{" "}
          <strong>JSON Server</strong>. The app supports full CRUD operations
          via <strong>Axios</strong> with a structured service layer.
        </p>

        <p>
          Users can search for books with live queries and a dynamic{" "}
          <strong>infinite scroll</strong> system that pauses when searching is
          active. State is managed using <code>useState</code>,{" "}
          <code>useEffect</code>, and custom hooks like{" "}
          <code>useBookActions</code> and <code>useInfiniteBooks</code> to keep
          logic modular and maintainable.
        </p>

        <p>
          A major feature is the personalized library with drag-and-drop
          support, built using <strong>@dnd-kit/core</strong>. Users can move
          books between "Owned", "Reading", and "Finished" columns, and changes
          are reflected both in the UI and backend instantly.
        </p>

        <p>
          The entire app is built with reusable components like{" "}
          <code>BookList</code>, <code>BookCardButtons</code>, and{" "}
          <code>Search</code> to ensure a scalable and consistent UI.
        </p>

        <p>
          This project was created to practice real-world skills like component
          structure, RESTful API integration, conditional rendering, state
          transitions, and building a clean, user-friendly experience from
          scratch.
        </p>
      </div>
    </div>
  );
}

export default AboutMePage;
