import { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import Background from "../components/Background";

function Analysis() {
  const [activeTab, setActiveTab] = useState("Community");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const getTitle = () => {
    switch (activeTab) {
      case "Community":
        return { first: "THE", second: "Community" };
      case "LiveSessions":
        return { first: "LIVE", second: "Sessions" };
      case "Policies":
        return { first: "The", second: "Policies" };
      default:
        return { first: "", second: "" };
    }
  };

  return (
    <div className="bg-[#121212]">
      <General
        title={getTitle()}
        activeTab={activeTab}
        handleTabClick={handleTabClick}
      />
      <div className="p-8">
        {/* Conditionally rendering components based on the active tab */}
        {activeTab === "Community" && <CommunityContent />}
        {activeTab === "LiveSessions" && <LiveSessions />}
        {activeTab === "Policies" && <Policies />}
      </div>
    </div>
  );
}

export default Analysis;

function General({ title, activeTab, handleTabClick }) {
  return (
    <div className="bg-[#121212] font-sans overflow-hidden">
      <div>
        <Background
          heroText={
            "Welcome to the Sundarban Community! Join us to organize, discuss, and address climate changes and gender inequality."
          }
        />
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center justify-start">
          <div className="w-60 h-44 bg-[#D9D9D9]/50 rounded-r-xl flex justify-center items-center">
            <div className="h-40 w-52">
              {/* Community Tab */}
              <div
                onClick={() => handleTabClick("Community")}
                className={`h-1/3 w-10/12 flex justify-start gap-5 items-center cursor-pointer`}
              >
                <div
                  className={`w-8 h-8 rounded-full ${
                    activeTab === "Community" ? "bg-[#CDDC6E]" : "bg-white"
                  } flex items-center justify-center`}
                >
                  <IoHomeOutline />
                </div>
                <div className="text-xl">Community</div>
              </div>

              {/* Live Sessions Tab */}
              <div
                onClick={() => handleTabClick("LiveSessions")}
                className={`h-1/3 w-10/12 flex justify-start gap-5 items-center cursor-pointer`}
              >
                <div
                  className={`w-8 h-8 rounded-full ${
                    activeTab === "LiveSessions" ? "bg-[#CDDC6E]" : "bg-white"
                  } flex items-center justify-center`}
                >
                  <IoHomeOutline />
                </div>
                <div className="text-xl">Live Sessions</div>
              </div>

              {/* Policies Tab */}
              <div
                onClick={() => handleTabClick("Policies")}
                className={`h-1/3 w-10/12 flex justify-start gap-5 items-center cursor-pointer`}
              >
                <div
                  className={`w-8 h-8 rounded-full ${
                    activeTab === "Policies" ? "bg-[#CDDC6E]" : "bg-white"
                  } flex items-center justify-center`}
                >
                  <IoHomeOutline />
                </div>
                <div className="text-xl">Policies</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end mr-9 w-auto p-3 h-auto">
          <div className="text-9xl font-semibold text-white">
            <span className="text-[#CDDC6E]">{title.first}</span> {title.second}
          </div>
        </div>
      </div>

      <div className="m-9 mb-10">
        <img src="src/assets/images/sessionImg.png" alt="" className="" />
      </div>
    </div>
  );
}

// Placeholder content for Community tab
function CommunityContent() {
  return <div>Welcome to the Community section!</div>;
}

// Placeholder content for Live Sessions tab
function LiveSessions() {
  return (
    <div className="bg-[#121212] font-sans m-9 ">
      <div className=" h-96 w-full border border-red-800">
        <SessionCards />
      </div>
    </div>
  );
}

// Placeholder content for Policies tab
function Policies() {
  return <div>Welcome to the Policies section!</div>;
}

function SessionCards({ img, title, text }) {
  return (
    <div className="w-1/3 h-full rounded-xl">
      <img
        src="src/assets/images/session1.img"
        alt=""
        className="absolute object-fit"
      />
      <div className="flex flex-col nset-0 z-10"></div>
    </div>
  );
}
