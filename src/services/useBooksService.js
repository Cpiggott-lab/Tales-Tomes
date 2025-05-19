import useFetch from "../hooks/useFetch";

export function useBooksService() {
  const baseURL = "https://tales-tomes-production.up.railway.app";
  const { fetcher, data, error, loading } = useFetch(baseURL);

  const getBooks = async (endPoint) => {
    await fetcher({
      method: "GET",
      endPoint,
    });
  };

  const postBooks = async (endPoint, reqBody) => {
    await fetcher({
      method: "POST",
      endPoint,
      reqBody,
    });
    return { data, error, loading };
  };

  const deleteBooks = async (endPoint) => {
    return await fetcher({
      method: "DELETE",
      endPoint,
    });
  };

  return {
    data,
    error,
    loading,
    getBooks,
    postBooks,
    deleteBooks,
  };
}
