import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const chartData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Item Approvals",
      data: [35, 40, 25, 55, 60, 20, 15, 75, 45, 65, 20, 35], // Replace with your actual data
      backgroundColor: "#CDDC6E",
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false, // Hide the legend
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 90, // Set max Y-axis value
      ticks: {
        stepSize: 10, // Set tick interval
      },
    },
  },
};

const Data1 = () => {
  const [activeTab1, setActiveTab1] = useState(null);
  const [co2Level, setCO2Level] = useState(426); // Initial CO2 level

  return (
    <div className="bg-[#121212] w-full h-[50%] font-sans rounded-lg p-4 flex flex-col justify-between">
      <div className="container mx-auto p-6">
        <h1 className="text-5xl font-bold mb-4 text-white">
          Carbon-<span className="text-[#cddc6e]">Dioxide</span>
        </h1>
        <div className="flex flex-col md:flex-row gap-8 justify-between">
          <div className="bg-none  rounded-lg w-full md:w-1/2 flex flex-col">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Latest Measurement: July 2024
            </h2>
            <p className="text-5xl font-bold text-[#CDDC6E] mb-6">
              {co2Level} ppm
            </p>
            <div className="bg-[#D9D9D9]/40 p-4 rounded-lg flex-grow">
              <h3 className="text-2xl font-bold mb-8 text-white">
                Key Takeaway:
              </h3>
              <p className="text-lg text-white">
                Rising CO2 levels are intensifying climate disasters in the
                Sundarbans, degrading land and livelihoods, especially for
                women, increasing their vulnerability and gender inequality.
                Effective climate action requires gender-inclusive policies and
                mangrove restoration to enhance resilience. Empowering women
                through education and resources is vital to reducing inequality
                and improving climate adaptation.
              </p>
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
                    <div className="text-3xl">DOS</div>
                  </div>

                  <div
                    className={`flex flex-col items-center justify-center cursor-pointer transition-all duration-300 w-full h-full ${
                      activeTab1 === 1
                        ? "bg-[#CDDC6E] text-black rounded-full"
                        : "text-white"
                    }`}
                    onClick={() => setActiveTab1(1)}
                  >
                    <div className="text-3xl">DONTS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#272727] p-6 rounded-lg shadow-lg w-full md:w-1/2 flex flex-col h-full">
            <h2 className="text-2xl font-bold mb-4">
              Item approvals in{" "}
              <span className="text-gray-400 text-base">Last year</span>
            </h2>
            <div className="flex-grow h-96">
              {" "}
              {/* Fixed height for the chart */}
              <Bar data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>
        {/* Explanation Section */}
        <div className="mt-12">
          <p className="text-lg text-white leading-relaxed">
            The Sundarbans, a UNESCO World Heritage site, is facing severe
            climatic hazards due to the global increase in carbon dioxide
            emissions. Rising atmospheric CO2 has accelerated climate change,
            resulting in higher temperatures, melting polar ice caps, and rising
            sea levels, all of which threaten the fragile mangrove ecosystem of
            the Sundarbans. Increased frequency of cyclones, unpredictable
            monsoons, and severe flooding have led to loss of biodiversity,
            habitat destruction, and displacement of local communities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Data1;
