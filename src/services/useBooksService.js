import useFetch from "../hooks/useFetch";

// Custom hook to manage all book-related API calls
export function useBooksService() {
  const baseURL = "https://tales-tomes-production.up.railway.app";

  // Get fetcher + state from useFetch
  const { fetcher, data, error, loading } = useFetch(baseURL);

  // GET request to fetch books
  const getBooks = async (endPoint) => {
    await fetcher({
      method: "GET",
      endPoint,
    });
  };

  // POST request to add a book
  const postBooks = async (endPoint, reqBody) => {
    await fetcher({
      method: "POST",
      endPoint,
      reqBody,
    });
    return { data, error, loading };
  };

  // DELETE request to remove a book
  const deleteBooks = async (endPoint) => {
    return await fetcher({
      method: "DELETE",
      endPoint,
    });
  };

  // Expose everything needed to use this service
  return {
    data,
    error,
    loading,
    getBooks,
    postBooks,
    deleteBooks,
  };
}
