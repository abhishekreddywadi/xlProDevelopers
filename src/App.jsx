import "./App.css";
import Canvas from "./components/Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);
  return (
    <>
      <div className="w-full relative min-h-screen  ">
        {data[0].map((details, index) => (
          <Canvas key={index} details={details} />
        ))}
      </div>
      <div className="w-full relative min-h-screen  ">
        {data[1].map((details, index) => (
          <Canvas key={index} details={details} />
        ))}
      </div>
      <div className="w-full relative min-h-screen  ">
        {data[2].map((details, index) => (
          <Canvas key={index} details={details} />
        ))}
      </div>
    </>
  );
}

export default App;
