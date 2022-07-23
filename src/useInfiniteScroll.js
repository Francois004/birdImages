import { useState, useRef, useCallback, useEffect } from "react";

function useInfiniteScroll() {
  const [start, setStart] = useState(0);
  const loadMoreRef = useRef(null);

  const handleObserver = useCallback((entries) => {
    const [target] = entries;
    if (target.isIntersecting) {
      setStart((prev) => prev + 9);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleObserver, option);

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
  }, [handleObserver]);

  return { loadMoreRef, start };
}

export default useInfiniteScroll;
