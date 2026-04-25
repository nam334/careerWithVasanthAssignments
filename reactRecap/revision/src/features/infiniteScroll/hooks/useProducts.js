import { useEffect, useState } from "react";
import { fetchProducts } from "../api/fetchProducts";
const cache = new Map();
export const useProducts = (search) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const CACHE_KEY = `${search} - ${page}`;
  useEffect(() => {
    let fetchedData = [];
    const fetchData = async () => {
      try {
        setLoading(true);
        if (cache.has(CACHE_KEY)) {
          fetchedData = cache.get(CACHE_KEY);
        } else {
          fetchedData = await fetchProducts({ page, search });
          console.log("fetchedData:", fetchedData);
          cache.set(CACHE_KEY, fetchedData);
        }

        if (fetchedData?.length) setHasMore(true);
        else setHasMore(false);
        if (page === 1) setData(fetchedData);
        else {
          setData((olddata) => [...olddata, ...fetchedData]);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, search]);

  useEffect(() => {
    setPage(1);
    setData([]);
  }, [search]);
  const increasePage = () => {
    if (!hasMore) return;
    if (!loading) setPage((page) => page + 1);
  };

  return { data, loading, error, increasePage };
};
