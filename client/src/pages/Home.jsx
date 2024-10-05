import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

function Home() {
  // Array of background images
  const backgrounds = [
    "src/assets/images/background1.png",
    "src/assets/images/background2.png",
    "src/assets/images/background3.png",
  ];

  // State to track the current active background index
  const [activeBackground, setActiveBackground] = useState(0);

  // Automatically change the background every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBackground(
        (prevBackground) => (prevBackground + 1) % backgrounds.length
      );
    }, 4000); // Change every 4 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <div className="h-screen w-screen bg-[#1E1E1E] relative">
      <div className="h-screen w-screen">
        {/* Smooth transition for background image */}
        <img
          src={backgrounds[activeBackground]} // Set the active background
          className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out" // 1-second soft transition
          alt="background"
        />
        <div className="absolute inset-0 z-10 ml-9">
          <Navbar />
          <div className="mt-28 p-2">
            <div className="text-7xl text-white font-sans font-bold">
              Rising Tides,
            </div>
            <div className="text-7xl font-sans font-bold text-white">
              Rising{" "}
              <span className="text-7xl text-[#CDDC6E] font-sans font-bold">
                Inequality
              </span>
            </div>
          </div>
          <div className="mt-6 rounded-full flex justify-around items-center bg-[#D9D9D9]/25 w-44 cursor-pointer text-white text-md font-sans p-1">
            Get in Touch <Arrow />
          </div>
          <div className="flex justify-between items-center">
            <div className="mt-28 flex flex-row gap-2">
              {/* Horizontal lines with soft transition */}
              <div
                className={`w-32 h-0.5 transition-all duration-500 ${
                  activeBackground === 0 ? "bg-[#CDDC6E]" : "bg-[#CDCDCD]/25"
                }`}
              ></div>
              <div
                className={`w-32 h-0.5 transition-all duration-500 ${
                  activeBackground === 1 ? "bg-[#CDDC6E]" : "bg-[#CDCDCD]/25"
                }`}
              ></div>
              <div
                className={`w-32 h-0.5 transition-all duration-500 ${
                  activeBackground === 2 ? "bg-[#CDDC6E]" : "bg-[#CDCDCD]/25"
                }`}
              ></div>
            </div>
            <div className="font-sans text-md w-2/5 mt-28 text-white">
              As the Sundarbans face severe flooding, women bear the brunt,
              losing livelihoods and access to resources.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

function Arrow() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#CDDC6E"
        width="40"
        height="40"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
        />
      </svg>
    </div>
  );
}
