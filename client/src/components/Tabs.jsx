function Tabs() {
  return (
    <div className="flex justify-center items-center">
      <div className="h-24 w-11/12 mt-3 mb-16 bg-[#D9D9D9]/50 rounded-full flex justify-center items-center">
        {/* Continent Tab */}
        <div
          className={`flex flex-col items-center justify-center cursor-pointer transition-all duration-300 w-full h-full ${
            activeTab === 0 ? "bg-white text-black rounded-full" : "text-white"
          }`}
          onClick={() => setActiveTab(0)}
        >
          <div className="text-lg font-semibold">Continent</div>
          <div className="text-sm">Choose Continent</div>
        </div>

        {/* Country Tab */}
        <div
          className={`flex flex-col items-center justify-center cursor-pointer transition-all duration-300 w-full h-full ${
            activeTab === 1 ? "bg-white text-black rounded-full" : "text-white"
          }`}
          onClick={() => setActiveTab(1)}
        >
          <div className="text-lg font-semibold">Country</div>
          <div className="text-sm">Choose Country</div>
        </div>

        {/* State Tab */}
        <div
          className={`flex flex-col items-center justify-center cursor-pointer transition-all duration-300 w-full h-full ${
            activeTab === 2 ? "bg-white text-black rounded-full" : "text-white"
          }`}
          onClick={() => setActiveTab(2)}
        >
          <div className="text-lg font-semibold">State</div>
          <div className="text-sm">Choose State</div>
        </div>

        {/* Province Tab */}
        <div
          className={`flex flex-col items-center justify-center cursor-pointer transition-all duration-300 w-full h-full ${
            activeTab === 3 ? "bg-white text-black rounded-full" : "text-white"
          }`}
          onClick={() => setActiveTab(3)}
        >
          <div className="text-lg font-semibold">Province</div>
          <div className="text-sm">Choose Province</div>
        </div>
      </div>
    </div>
  );
}
export default Tabs;
