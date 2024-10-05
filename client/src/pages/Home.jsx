import React, { useState } from "react";
import Background from "../components/Background";

function Home() {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <div className="bg-[#121212] overflow-hidden">
      <div>
        <Background />
      </div>
      <div className="flex justify-center items-center">
        <div className="h-24 w-11/12 mt-3 ml-9 mr-9 bg-[#D9D9D9]/50 rounded-full flex flex-row justify-center items-center">
          {/* Continent Tab */}
          <div
            className={`flex flex-col items-center justify-center cursor-pointer transition-all duration-300 w-full h-full ${
              activeTab === 0
                ? "bg-white text-black rounded-full"
                : "text-white"
            }`}
            onClick={() => setActiveTab(0)}
          >
            <div className="text-lg font-sans font-semibold">Continent</div>
            <div className="text-sm font-sans">Choose Continent</div>
          </div>

          {/* Country Tab */}
          <div
            className={`flex flex-col items-center justify-center cursor-pointer transition-all duration-300 w-full h-full ${
              activeTab === 1
                ? "bg-white text-black rounded-full"
                : "text-white"
            }`}
            onClick={() => setActiveTab(1)}
          >
            <div className="text-lg font-sans font-semibold">Country</div>
            <div className="text-sm font-sans">Choose Country</div>
          </div>

          {/* State Tab */}
          <div
            className={`flex flex-col items-center justify-center cursor-pointer transition-all duration-300 w-full h-full ${
              activeTab === 2
                ? "bg-white text-black rounded-full"
                : "text-white"
            }`}
            onClick={() => setActiveTab(2)}
          >
            <div className="text-lg font-sans font-semibold">State</div>
            <div className="text-sm font-sans">Choose State</div>
          </div>

          {/* Province Tab */}
          <div
            className={`flex flex-col items-center justify-center cursor-pointer transition-all duration-300 w-full h-full ${
              activeTab === 3
                ? "bg-white text-black rounded-full"
                : "text-white"
            }`}
            onClick={() => setActiveTab(3)}
          >
            <div className="text-lg font-sans font-semibold">Province</div>
            <div className="text-sm font-sans">Choose Province</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
