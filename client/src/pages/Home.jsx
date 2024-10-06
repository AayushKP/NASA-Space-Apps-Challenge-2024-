import React, { useState } from "react";
import Background from "../components/Background";

function Home() {
  const [activeTab, setActiveTab] = useState(null);
  const [activeTab1, setActiveTab1] = useState(null);

  return (
    <div className="bg-[#121212] font-sans overflow-hidden overflow-x-hidden min-h-screen">
      <div>
        <Background
          heroText={
            "As the Sundarbans face severe flooding, women bear the brunt,losing livelihoods and access to resources."
          }
        />
      </div>

      {/* Tabs Section */}
      <div className="flex justify-center items-center">
        <div className="h-24 w-11/12 mt-3 mb-16 bg-[#D9D9D9]/50 rounded-full flex justify-center items-center">
          {/* Continent Tab */}
          <div
            className={`flex flex-col items-center justify-center cursor-pointer transition-all duration-300 w-full h-full ${
              activeTab === 0
                ? "bg-white text-black rounded-full"
                : "text-white"
            }`}
            onClick={() => setActiveTab(0)}
          >
            <div className="text-lg font-semibold">Continent</div>
            <div className="text-sm">Choose Continent</div>
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
            <div className="text-lg font-semibold">Country</div>
            <div className="text-sm">Choose Country</div>
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
            <div className="text-lg font-semibold">State</div>
            <div className="text-sm">Choose State</div>
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
            <div className="text-lg font-semibold">Province</div>
            <div className="text-sm">Choose Province</div>
          </div>
        </div>
      </div>

      {/* Recent Section */}
      <div className="flex flex-col ml-9 text-white text-3xl">
        <div>Recent</div>
        <div>Climate Disruption</div>
      </div>

      {/* Article Section */}
      <div className="flex flex-col md:flex-row justify-start m-9 gap-16">
        <div className="w-full md:w-5/12 h-96 relative overflow-hidden">
          <img
            src="src/assets/images/homeImg.png"
            alt="Home Image"
            className="w-full h-full object-cover rounded-xl"
          />
          {/* Vignette effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent via-transparent to-[#121212] opacity-30 pointer-events-none"></div>
        </div>
        <div className="w-full md:w-1/2 h-96">
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

          {/* Gender Tab */}
          <div className="flex justify-center items-center mt-9">
            <div className="h-16 w-11/12 bg-[#363636] rounded-full flex justify-center items-center">
              <div
                className={`flex flex-col items-center justify-center cursor-pointer transition-all duration-300 w-full h-full ${
                  activeTab1 === 0
                    ? "bg-[#CDDC6E] text-black rounded-full"
                    : "text-white"
                }`}
                onClick={() => setActiveTab1(0)}
              >
                <div className="text-3xl">WOMEN</div>
              </div>

              <div
                className={`flex flex-col items-center justify-center cursor-pointer transition-all duration-300 w-full h-full ${
                  activeTab1 === 1
                    ? "bg-[#CDDC6E] text-black rounded-full"
                    : "text-white"
                }`}
                onClick={() => setActiveTab1(1)}
              >
                <div className="text-3xl">MEN</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="m-9">
        <img
          src="src/assets/images/footerImg.png"
          alt="Footer Image"
          className="w-full h-auto object-cover"
        />
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
      <div className="flex flex-col gap-4">
        <div className="text-4xl text-[#CDDC6E] font-bold">{title}</div>
        <div className="text-md text-white">{text}</div>
      </div>

      <div className="flex flex-col md:flex-row gap-16 mt-10 w-full">
        {/* Data 1 */}
        <div className="flex flex-col items-start">
          <div className="text-5xl font-bold text-[#CDDC6E]">{data1}</div>
          <div className="text-sm text-white">{dataTitle1}</div>
        </div>
        {/* Data 2 */}
        <div className="flex flex-col items-start">
          <div className="text-5xl font-bold text-[#CDDC6E]">{data2}</div>
          <div className="text-sm text-white">{dataTitle2}</div>
        </div>
        {/* Data 3 */}
        <div className="flex flex-col items-start">
          <div className="text-5xl font-bold text-[#CDDC6E]">{data3}</div>
          <div className="text-sm text-white">{dataTitle3}</div>
        </div>
      </div>
    </div>
  );
}
