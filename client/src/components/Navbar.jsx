import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();
  const location = useLocation(); // To keep track of the current route

  useEffect(() => {
    // Set active button based on current path
    const path = location.pathname.substring(1); // Get current path without leading '/'
    setActiveButton(path || "home"); // Default to 'home' if path is empty
  }, [location]);

  const handleButtonClick = (button) => {
    navigate(button === "home" ? "/" : `/${button}`); // Navigate based on the button clicked
  };

  const buttons = [
    { label: "Home", icon: "src/assets/images/icon-nav-1.png", key: "home" },
    { label: "News", icon: "src/assets/images/icon-nav-2.png", key: "news" },
    {
      label: "Analysis",
      icon: "src/assets/images/icon-nav-3.png",
      key: "analysis",
    },
  ];

  return (
    <div className="mb-9 mt-9 mr-9 p-2 flex items-center h-20 justify-between relative">
      <div className="h-16 w-32">
        <img
          src="src/assets/images/Logo.png"
          alt="Logo"
          className="object-cover"
        />
      </div>

      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-6">
        {buttons.map(({ label, icon, key }) => (
          <div
            key={key}
            onClick={() => handleButtonClick(key)}
            className={`w-32 h-10 rounded-full cursor-pointer flex items-center gap-3 p-1 transition-all duration-200 ${
              activeButton === key
                ? "bg-[#c9b230] text-black"
                : "bg-[#D9D9D9]/50 text-black"
            } hover:bg-[#c9b230] hover:text-black`}
          >
            <img
              src={icon}
              alt={`${label} icon`}
              className="rounded-full h-7 w-auto ml-1"
            />
            <div className="text-md font-sans">{label}</div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="w-32 h-10 font-sans rounded-full cursor-pointer bg-[#D9D9D9] text-black flex justify-center items-center text-sm transition-all duration-200 hover:bg-[#c9b230]">
          Learn More
        </div>
        <div
          className="w-32 h-10 font-sans rounded-full cursor-pointer text-white border border-[#D9D9D9] flex justify-center items-center transition-all duration-200 hover:bg-[#c9b230]"
          onClick={() => navigate("/community")}
        >
          Community
        </div>
      </div>
    </div>
  );
}

export default Navbar;
