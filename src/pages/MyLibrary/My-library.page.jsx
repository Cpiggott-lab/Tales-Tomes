// https://tales-tomes-production.up.railway.app/library
import "./My-library.style.css";
function MyLibraryPage() {
  return (
    <div className="library-catalog">
      <h1 className="my-library-title">My Library</h1>
      <div className="library-catalog-container">
        <div className="owned-container">
          <h1 className="owned-title">Owned</h1>
          <div className="owned-list">list</div>
        </div>
        <div className="reading-container">
          <h1 className="reading-title">Reading</h1>
          <div className="reading-list">list</div>
        </div>
        <div className="finished-container">
          <h1 className="finished-title">Finished</h1>
          <div className="finished-list">list</div>
        </div>
      </div>
    </div>
  );
}
export default MyLibraryPage;

// tasks to do still
// add 3 main containers, in a row where each will be a spanning list
// container 1 will be owned books,
// container 2 will be current books reading,
// container 3 will be books read
// need to be able to drag and drop books between the containers
// each container needs an additional API section. Books Read, Books Owned and Books finished.
// when purchased the books will be moved to the owned books container
