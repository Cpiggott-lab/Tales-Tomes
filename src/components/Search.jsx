import { useEffect, useState } from "react";
import axios from "axios";

// Search bar that fetches books from Open Library as you type
function Search({ setBooks }) {
  const [search, setSearch] = useState(""); // input state

  useEffect(() => {
    const fetchData = async () => {
      // don’t search if empty or too short
      if (!search || search.length < 2) return;

      try {
        const response = await axios.get(
          "https://openlibrary.org/search.json?q=" + encodeURIComponent(search)
        );
        setBooks(response.data.docs); // send results up to parent
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, [search]); // run when search text changes

  // update input state
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        className="search-input"
        placeholder="Search for a book..."
        value={search}
        onChange={handleSearch}
      />
    </form>
  );
}

export default Search;
