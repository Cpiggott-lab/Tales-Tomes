import { useEffect, useState } from "react";
import axios from "axios";

function Search({ setBooks }) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
     
      if (!search || search.length < 2) return;

      try {
        const response = await axios.get(
          "https://openlibrary.org/search.json?q=" + encodeURIComponent(search)
        );
        setBooks(response.data.docs);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, [search]);

 
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
