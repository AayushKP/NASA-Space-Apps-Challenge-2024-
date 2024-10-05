import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  

  return (
    <div className="h-screen w-screen bg-[#1E1E1E] relative">
      <div className="h-screen w-screen">
        <img
          src="src/assets/images/background.png"
          className="w-full h-full object-cover"
          alt="background"
        />
        <div className="absolute inset-0 z-10">
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default Home;
