import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";

function Background({ heroText }) {
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
        <div className="w-full h-full">
          <img
            src={backgrounds[activeBackground]} // Set the active background
            className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out" // 1-second soft transition
            alt="background"
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent via-transparent to-[#121212] opacity-30 pointer-events-none"></div>
        </div>

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
          <div className="flex justify-between items-center mt-44">
            <div className="flex flex-row gap-2 relative">
              {/* Horizontal lines with soft transition */}
              <div className="relative">
                <div
                  className={`w-32 h-0.5 transition-all duration-500 ${
                    activeBackground === 0 ? "bg-[#CDDC6E]" : "bg-[#CDCDCD]/25"
                  }`}
                ></div>
                <span
                  className={`absolute left-0 top-2 text-xl transition-opacity ${
                    activeBackground === 0 ? "text-[#CDDC6E]" : "opacity-0"
                  }`}
                >
                  01
                </span>
              </div>
              <div className="relative">
                <div
                  className={`w-32 h-0.5 transition-all duration-500 ${
                    activeBackground === 1 ? "bg-[#CDDC6E]" : "bg-[#CDCDCD]/25"
                  }`}
                ></div>
                <span
                  className={`absolute left-0 top-2 text-xl transition-opacity ${
                    activeBackground === 1 ? "text-[#CDDC6E]" : "opacity-0"
                  }`}
                >
                  02
                </span>
              </div>
              <div className="relative">
                <div
                  className={`w-32 h-0.5 transition-all duration-500 ${
                    activeBackground === 2 ? "bg-[#CDDC6E]" : "bg-[#CDCDCD]/25"
                  }`}
                ></div>
                <span
                  className={`absolute left-0 top-2 text-xl transition-opacity ${
                    activeBackground === 2 ? "text-[#CDDC6E]" : "opacity-0"
                  }`}
                >
                  03
                </span>
              </div>
            </div>
            <div className="font-sans text-md w-2/5 flex items-center text-white">
              {heroText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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

export default Background;
