import { useEffect, useState } from "react";
import { fetchApi } from "../api/fetchApi";
const cache = new Map();

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        if (cache.has(url)) {
          let cachedData = cache.get(url);
          let currentTime = Date.now() - cachedData.timestamp;
          if (currentTime < 2 * 60 * 1000) {
            setData(cachedData.result);
            return;
          }
        }
        const result = await fetchApi(url);
        cache.set(url, {
          result,
          timestamp: Date.now(),
        });
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [url]);
  return { data, loading, error };
};
