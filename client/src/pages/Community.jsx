import { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import Background from "../components/Background";
import Policiescard from "../components/Policiescard";
import Sessionscheduler from "../components/Sessionscheduler";
import Discussion from "../components/Discussion";

function Community() {
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

  const policiesDataArray = [
    {
      title: "Addressing Climate Impact on Gender Inequality in the Sundarbans",
      organization: "SCGAN",
      ministry: "MoEFCC",
      policyFramework: [
        {
          heading: "Inclusive Climate Adaptation Planning",
          points: [
            "Ensure the active participation of women in local decision-making bodies related to climate adaptation and disaster management.",
            "Provide gender-balanced representation in environmental councils and community planning committees to ensure diverse perspectives in tackling climate change impacts.",
          ],
        },
        {
          heading: "Empowerment Through Education and Training",
          points: [
            "Implement training programs specifically designed for women in the Sundarbans, focusing on sustainable agriculture, eco-friendly livelihoods, and disaster preparedness.",
            "Encourage skill development in alternative income-generating activities like sustainable fishing, handicrafts, or eco-tourism for women affected by climate hazards.",
          ],
        },
        {
          heading: "Resource Accessibility and Ownership Rights",
          points: [
            "Promote policies ensuring women have equal access to natural resources (e.g., land, water) and property rights to enhance their resilience to climate change impacts.",
            "Facilitate women's participation in community-based natural resource management initiatives.",
          ],
        },
      ],
    },
    {
      title: "Addressing Climate Impact on Gender Inequality in the Sundarbans",
      organization: "GENDREC",
      ministry: "MoEFCC",
      policyFramework: [
        {
          heading: "Economic Empowerment",
          points: [
            "Promote women-led cooperatives in sustainable farming and agro-processing industries.",
            "Provide subsidies and low-interest loans to women entrepreneurs in climate-sensitive sectors.",
          ],
        },
        {
          heading: "Education and Training",
          points: [
            "Offer specialized training programs in climate-resilient farming techniques and renewable energy.",
            "Focus on improving women’s access to climate change education and participation in environmental advocacy.",
          ],
        },
      ],
    },
  ];

  return (
    <div className="bg-[#121212] overflow-hidden">
      <General
        title={getTitle()}
        activeTab={activeTab}
        handleTabClick={handleTabClick}
      />
      <div className="p-8">
        {/* Conditionally rendering components based on the active tab */}
        {activeTab === "Community" && <CommunityContent />}
        {activeTab === "LiveSessions" && <LiveSessions />}
        {activeTab === "Policies" && (
          <>
            {policiesDataArray.map((policyData, index) => (
              <Policiescard
                key={index}
                title={policyData.title}
                organization={policyData.organization}
                ministry={policyData.ministry}
                policyFramework={policyData.policyFramework}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Community;

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

        <div className="flex items-center justify-end mr-9 w-auto p-3 h-auto overflow-hidden">
          <div className="text-9xl font-semibold text-white">
            <span className="text-[#CDDC6E]">{title.first}</span> {title.second}
          </div>
        </div>
      </div>

      <div className="m-9 mb-10 overflow-hidden">
        <img
          src="src/assets/images/sessionImg.png"
          alt=""
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}

// Placeholder content for Community tab
function CommunityContent() {
  return (
    <div>
      <Discussion />
    </div>
  );
}

// Placeholder content for Live Sessions tab
function LiveSessions() {
  return (
    <div className="bg-[#121212] font-sans m-9 overflow-hidden">
      <Sessionscheduler />
    </div>
  );
}

// Placeholder content for Policies tab
function Policies() {
  return (
    <div>
      <Policiescard />
    </div>
  );
}

function SessionCards({ img, title, text }) {
  return (
    <div className="w-1/3 h-full rounded-xl overflow-hidden">
      <img
        src="src/assets/images/session1.img"
        alt=""
        className="w-full h-auto object-cover"
      />
      <div className="flex flex-col inset-0 z-10"></div>
    </div>
  );
}
