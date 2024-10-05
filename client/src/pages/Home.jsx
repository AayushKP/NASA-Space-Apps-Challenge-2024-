import React, { useState } from "react";
import Navbar from "../components/Navbar";

function Home() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="h-screen w-screen bg-[#1E1E1E] relative">
      <div className="h-screen w-screen ">
        <img
          src="src/assets/images/background.png"
          className="w-full h-full object-cover"
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
            <div className=" mt-28 flex flex-row gap-2">
              <div className="w-32 h-0.5 bg-[#CDDC6E]"></div>
              <div className="w-32 h-0.5 bg-[#CDCDCD]/25"></div>
              <div className="w-32 h-0.5 bg-[#CDCDCD]/25"></div>
            </div>
            <div className="font-sans text-md w-2/5 mt-28 mr-9 text-white">
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
        stroke="#CDDC6E" // Set the stroke color here
        width="40" // Set the width to 20
        height="40" // Set height to maintain aspect ratio
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
