import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  return (
    <div className="mb-9 mt-9 mr-9 p-2 flex items-center h-20  justify-between relative">
      <div className="h-16 w-32 ">
        <img
          src="src/assets/images/Logo.png"
          alt="Logo"
          className="object-cover"
        />
      </div>

      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-6">
        <div
          onClick={() => {
            handleButtonClick("home");
            navigate("/");
          }}
          className={`w-32 h-10 rounded-full cursor-pointer text-black border-none flex items-center gap-3 p-1 ${
            activeButton === "home" ? "bg-[#c9b230]" : "bg-[#D9D9D9]/50"
          }`}
        >
          <div>
            <img
              src="src/assets/images/icon-nav-1.png"
              alt=""
              className="rounded-full h-7 w-auto ml-1"
            />
          </div>
          <div className="text-md font-sans">Home</div>
        </div>

        <div
          onClick={() => {
            handleButtonClick("news");
            navigate("/news");
          }}
          className={`w-32 h-10 rounded-full cursor-pointer text-black border-none flex items-center gap-3 p-1 ${
            activeButton === "news" ? "bg-[#c9b230]" : "bg-[#D9D9D9]/50"
          }`}
        >
          <div>
            <img
              src="src/assets/images/icon-nav-2.png"
              alt=""
              className="rounded-full h-7 w-auto ml-1"
            />
          </div>
          <div className="text-md font-sans">News</div>
        </div>

        <div
          onClick={() => {
            handleButtonClick("ananlysis");
            navigate("/analysis");
          }}
          className={`w-32 h-10 rounded-full cursor-pointer text-black border-none flex items-center gap-3 p-1 ${
            activeButton === "analysis" ? "bg-[#c9b230]" : "bg-[#D9D9D9]/50"
          }`}
        >
          <div>
            <img
              src="src/assets/images/icon-nav-3.png"
              alt=""
              className="rounded-full h-7 w-auto ml-1"
            />
          </div>
          <div className="text-md font-sans">Analysis</div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-32 h-10 font-sans rounded-full cursor-pointer text-white border border-[#D9D9D9] flex justify-center items-center text-sm">
          Learn More
        </div>
        <div className="text-sm font-sans w-32 h-10 rounded-full cursor-pointer text-white border border-[#D9D9D9] flex justify-center items-center">
          Contact Us
        </div>
      </div>
    </div>
  );
}
export default Navbar;
