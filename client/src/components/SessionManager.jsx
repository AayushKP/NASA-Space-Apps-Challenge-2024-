"use client";

import React, { useState } from "react";
import { ArrowRight, X } from "lucide-react";

export default function SessionManager() {
  const [isOpen, setIsOpen] = useState(false);
  const [sessions, setSessions] = useState([]); // Initialize an empty array for sessions
  const [sessionName, setSessionName] = useState("");
  const [sessionDescription, setSessionDescription] = useState("");
  const [sessionLink, setSessionLink] = useState("");
  const [file, setFile] = useState(null); // Store the file object

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (
      selectedFile &&
      (selectedFile.type === "image/jpeg" || selectedFile.type === "image/png")
    ) {
      setFile(selectedFile); // Save the file object
    } else {
      alert("Please select a JPEG or PNG file.");
      e.target.value = "";
    }
  };

  const handleSubmit = () => {
    if (sessionName && sessionDescription && sessionLink && file) {
      const newSession = {
        id: Date.now(),
        name: sessionName,
        description: sessionDescription,
        link: sessionLink,
        image: URL.createObjectURL(file), // Use the actual file object to create a URL
      };
      setSessions((prevSessions) => [newSession, ...prevSessions]); // Update sessions array
      setIsOpen(false);
      setSessionName("");
      setSessionDescription("");
      setSessionLink("");
      setFile(null); // Reset the file state
    } else {
      alert("Please fill in all the fields, including an image!");
    }
  };

  return (
    <div className="relative w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        className="p-4 sm:p-6 lg:p-12 h-32 sm:h-40 lg:h-44 rounded-lg relative"
        style={{
          background:
            "linear-gradient(90deg, rgba(213, 213, 213, 0) -35.12%, rgba(18, 18, 18, 0.5) 27.04%, rgba(185, 185, 185, 0.07) 55.41%, rgba(185, 185, 185, 0.07) 81.08%, rgba(185, 185, 185, 0.2) 100%)",
        }}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full flex items-center"
        >
          Let's Go
          <ArrowRight className="ml-2 h-4 w-4 text-[#CDDC6E]" />
        </button>
        <div className="flex justify-center items-center h-full">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl text-white text-center">
            <span className="font-bold">Schedule</span>{" "}
            <span className="font-light text-[#CDDC6E]">a</span>{" "}
            <span className="font-bold">Session</span>
          </h2>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="w-full max-w-[425px] bg-[#1E1E1E] text-white rounded-lg p-6 relative">
            <h3 className="text-xl font-bold mb-4">Create New Session</h3>
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </button>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="sessionName" className="text-sm font-medium">
                  Name of Session:
                </label>
                <input
                  id="sessionName"
                  value={sessionName}
                  onChange={(e) => setSessionName(e.target.value)}
                  className="w-full bg-[#2C2C2C] text-white rounded-md p-2"
                  placeholder="Name of Session"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="sessionDescription"
                  className="text-sm font-medium"
                >
                  Description of Session:
                </label>
                <textarea
                  id="sessionDescription"
                  value={sessionDescription}
                  onChange={(e) => setSessionDescription(e.target.value)}
                  className="w-full bg-[#2C2C2C] text-white rounded-md p-2 h-32"
                  placeholder="Description of Session"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="sessionLink" className="text-sm font-medium">
                  Event Link:
                </label>
                <input
                  id="sessionLink"
                  value={sessionLink}
                  onChange={(e) => setSessionLink(e.target.value)}
                  className="w-full bg-[#2C2C2C] text-white rounded-md p-2"
                  placeholder="Paste event link here"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="fileUpload" className="text-sm font-medium">
                  Upload Image:
                </label>
                <input
                  id="fileUpload"
                  type="file"
                  onChange={handleFileChange}
                  accept=".jpg,.jpeg,.png"
                  className="w-full bg-[#2C2C2C] text-white rounded-md p-2"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-[#CDDC6E] text-black hover:bg-[#B8C75A] py-2 rounded-md transition-colors"
              >
                Schedule It
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full text-gray-400 hover:text-white py-2 rounded-md transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sessions.map((session) => (
          <div
            key={session.id}
            className="relative overflow-hidden rounded-lg shadow-lg h-64" // Increased height
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${session.image})` }}
            />
            <div className="relative bg-black bg-opacity-50 p-4 h-full flex flex-col justify-between">
              <div>
                <button
                  onClick={() => window.open(session.link, "_blank")}
                  className="mb-4 bg-gray-200 bg-opacity-80 text-black hover:bg-opacity-100 transition-all duration-200 ease-in-out px-4 py-2 rounded-full flex items-center"
                >
                  Join Now <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {session.name}
                </h3>
                <p className="text-sm text-gray-200">{session.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
