import axios from "axios";
import { useCallback, useState } from "react";

// Custom hook to fetch data with Axios
export default function useFetch(baseURL) {
  const [data, setData] = useState(null); // holds response data
  const [error, setError] = useState(null); // holds error message
  const [loading, setLoading] = useState(false); // loading state

  // Create Axios instance with base URL
  const axiosInstance = axios.create({ baseURL });

  // Fetcher runs the request — customizable for any method or endpoint
  const fetcher = useCallback(
    async ({
      method = "GET",
      endPoint = "/",
      reqBody = null,
      headers = {},
      timeout = 0,
    }) => {
      setLoading(true); // start loading

      const source = axios.CancelToken.source(); // allows request cancellation

      try {
        const response = await axiosInstance({
          method,
          url: endPoint,
          data: reqBody,
          headers,
          timeout,
          cancelToken: source.token,
        });

        setData(response.data); // save result
        setError(null); // clear old errors
      } catch (err) {
        // set error message or response error
        setError(err.response ? err.response.data : err.message);
      } finally {
        setLoading(false); // done loading no matter what
      }
    },
    [axiosInstance] // don't recreate unless instance changes
  );

  // Return states and fetcher function
  return { data, error, loading, fetcher };
}
