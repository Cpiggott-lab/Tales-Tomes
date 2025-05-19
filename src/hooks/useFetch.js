import axios from "axios";
import { useCallback, useState } from "react";

export default function useFetch(baseURL) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const axiosInstance = axios.create({ baseURL });

  const fetcher = useCallback(
    async ({
      method = "GET",
      endPoint = "/",
      reqBody = null,
      headers = {},
      timeout = 0,
    }) => {
      setLoading(true);
      const source = axios.CancelToken.source();
      try {
        const response = await axiosInstance({
          method,
          url: endPoint,
          data: reqBody,
          headers,
          timeout,
          cancelToken: source.token,
        });
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.response ? err.response.data : err.message);
      } finally {
        setLoading(false);
      }
    },
    [axiosInstance]
  );

  return { data, error, loading, fetcher };
}
