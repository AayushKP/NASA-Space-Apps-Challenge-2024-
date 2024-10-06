import React, { useState } from "react";
import Background from "../components/Background";

function Home() {
  const [activeTab, setActiveTab] = useState(null);
  const [activeTab1, setActiveTab1] = useState(null);

  return (
    <div className="bg-[#121212] font-sans overflow-hidden">
      <div>
        <Background
          heroText={
            "As the Sundarbans face severe flooding, women bear the brunt,losing livelihoods and access to resources."
          }
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="h-24 w-11/12 mt-3 mb-16 ml-9 mr-9 bg-[#D9D9D9]/50 rounded-full flex flex-row justify-center items-center">
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
      <div className="flex flex-col ml-9 text-white text-3xl font-sans ">
        <div>Recent</div>
        <div>Climate Disruption</div>
      </div>

      <div className="flex justify-start m-9 gap-16">
        <div className="w-5/12 h-96 relative">
          <img
            src="src/assets/images/homeImg.png"
            alt="Home Image"
            className="w-full rounded-xl h-96 relative"
          />
          {/* Vignette effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent via-transparent to-[#121212] opacity-30 pointer-events-none"></div>
        </div>
        <div className="w-1/2 h-96  ">
          <Article
            title={"IMPACT"}
            text={
              "Climate change in the Sundarbans exacerbates gender inequality, with rising sea levels and frequent storms disproportionately affecting women. As livelihoods tied to natural resources vanish, women face increased poverty, limited access to healthcare, and fewer opportunities for education and leadership, deepening existing social and economic disparities in the region."
            }
            data1={"395K"}
            dataTitle1={"Acres Land Degradation"}
            data2={"70%"}
            dataTitle2={"Male Migration"}
            data3={"$129M"}
            dataTitle3={"Annual Economic Loss"}
          />

          <div className="flex justify-center items-center mt-9">
            <div className="h-16 w-11/12 bg-[#363636] rounded-full flex flex-row justify-center items-center">
              <div
                className={`flex flex-col items-center justify-center cursor-pointer transition-all duration-300 w-full h-full ${
                  activeTab1 === 0
                    ? "bg-[#CDDC6E] text-black rounded-full"
                    : "text-white"
                }`}
                onClick={() => setActiveTab1(0)}
              >
                <div className="text-3xl font-sans">WOMEN</div>
              </div>

              {/* Country Tab */}
              <div
                className={`flex flex-col items-center justify-center cursor-pointer transition-all duration-300 w-full h-full ${
                  activeTab1 === 1
                    ? "bg-[#CDDC6E] text-black rounded-full"
                    : "text-white"
                }`}
                onClick={() => setActiveTab1(1)}
              >
                <div className="text-3xl font-sans">MEN</div>
              </div>

              {/* State Tab */}
            </div>
          </div>
        </div>
      </div>
      <div className="m-9 mb-">
        <img src="src/assets/images/footerImg.png" alt="" className="" />
      </div>
    </div>
  );
}

export default Home;

function Article({
  title,
  data1,
  data2,
  data3,
  dataTitle1,
  dataTitle2,
  dataTitle3,
  text,
}) {
  return (
    <div>
      <div className="flex flex-col gap-4 ">
        <div className="text-4xl text-[#CDDC6E] font-bold font-sans">
          {title}
        </div>
        <div className="text-md font-sans text-white">{text}</div>
      </div>

      <div className="flex flex-row gap-16 mt-10 w-11/12">
        {/* Data 1 */}
        <div className="flex flex-col items-start">
          <div className="text-5xl font-bold text-[#CDDC6E] text-left">
            {data1}
          </div>
          <div className="text-sm font-sans text-white text-left">
            {dataTitle1}
          </div>
        </div>
        {/* Data 2 */}
        <div className="flex flex-col items-start">
          <div className="text-5xl font-bold text-[#CDDC6E] text-left">
            {data2}
          </div>
          <div className="text-sm font-sans text-white text-left">
            {dataTitle2}
          </div>
        </div>
        {/* Data 3 */}
        <div className="flex flex-col items-start">
          <div className="text-5xl font-bold text-[#CDDC6E] text-left">
            {data3}
          </div>
          <div className="text-sm font-sans text-white text-left">
            {dataTitle3}
          </div>
        </div>
      </div>
    </div>
  );
}
