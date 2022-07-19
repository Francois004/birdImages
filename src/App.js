import { useState, useEffect } from "react";
import "./App.css";
import { birds } from "./mockData";

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
  return (
    <div>
      {birds.map((birdImage, index) => (
        <BackgroundImg
          src={`https://neoos.s3.eu-west-1.amazonaws.com/img/birds/${birdImage}`}
          name={birdImage}
          key={index}
        />
      ))}
    </div>
  );
}

export default App;
