// src/components/Modal.js
import React from "react";
import { AiOutlineClose } from "react-icons/ai"; // Import the close icon from react-icons

const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null; // Don't render anything if modal is not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-slate-600/70 w-1/2 h-2/3 rounded-lg p-6 relative">
        {/* Title with proper gap */}
        <h2 className="text-3xl font-semibold text-[#CDDC6E] mb-4">{title}</h2>

        {/* Close button as X sign */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-white rounded-full p-2 flex items-center justify-center"
          style={{ width: "40px", height: "40px" }} // Set a fixed size for the button
        >
          <AiOutlineClose className="text-black" />
        </button>

        {/* Scrollable content area */}
        <div className="mt-2 max-h-[70%] overflow-y-auto">
          <p className="text-white whitespace-pre-line">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
