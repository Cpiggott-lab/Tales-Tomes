import useFetch from "../hooks/useFetch";

export const booksService = () => {
  const baseURL = "https://tales-tomes-production.up.railway.app";
  const { fetcher, data, error, loading } = useFetch(baseURL);

  return {
    data,
    error,
    loading,
    getBooks: async (endPoint) => {
      await fetcher({
        method: "GET",
        endPoint,
      });
    },
    postBooks: async (endPoint, reqBody) => {
      await fetcher({
        method: "POST",
        endPoint,
        reqBody,
      });
      return { data, error, loading };
    },
    deleteBooks: async (endPoint) => {
      return await fetcher({
        method: "DELETE",
        endPoint,
      });
    },
  };
};
