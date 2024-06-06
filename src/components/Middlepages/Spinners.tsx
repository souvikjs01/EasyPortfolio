"use client";
import { useState, CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader";

const override: CSSProperties = {
  borderColor: "red",
};

function App() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("white");

  return (
    <div className="relative min-h-screen flex justify-center items-center">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button> */}
      {/* <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" /> */}

      <HashLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default App;
