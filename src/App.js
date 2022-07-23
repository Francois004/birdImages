import { useState, useEffect } from "react";
import "./App.css";
import useInfiniteScroll from "./useInfiniteScroll";
import useFetch from "./useFetch";

function BackgroundImg({ src, name }) {
  const [source, setSource] = useState("");

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setSource(src);
  }, [src]);

  return (
    <div
      className="pos"
      style={{
        backgroundImage: `url(${source})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {name}
    </div>
  );
}

function App() {
  const { loadMoreRef, start } = useInfiniteScroll();
  const { loading, photos } = useFetch(start);
  return (
    <div>
      {photos?.map((birdImage, index) => (
        <BackgroundImg
          src={`https://neoos.s3.eu-west-1.amazonaws.com/img/birds/${birdImage}`}
          name={birdImage}
          key={index}
        />
      ))}
      <div ref={loadMoreRef}>{loading ? <span>Loading...</span> : ""}</div>
    </div>
  );
}

export default App;
