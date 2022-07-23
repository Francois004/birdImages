import { useState, useEffect, useCallback } from "react";
import { birds } from "./mockData";

function useFetch(start) {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  const getPhotos = useCallback(async () => {
    try {
      setLoading(true);
      const data = birds.slice(start, start + 10);
      setPhotos((prev) => [...prev, ...data]);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  }, [start]);

  useEffect(() => {
    getPhotos();
  }, [getPhotos]);

  return { loading, photos };
}

export default useFetch;
