// import React, { useState } from 'react';
// import { ArrowRight, X } from 'lucide-react';

// export default function ScheduleSession() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="relative w-full max-w-10xl mx-auto">
//       <div className="p-12 h-[400px] rounded-lg bg-gradient-to-r from-[rgba(213,213,213,0)] via-[rgba(18,18,18,0.5)] via-[rgba(185,185,185,0.07)] to-[rgba(185,185,185,0.2)] relative">
//         <button
//           onClick={() => setIsOpen(true)}
//           className="absolute top-8 right-8 flex items-center gap-2 px-6 py-3 text-white rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
//         >
//           Let's Go
//           <ArrowRight className="w-5 h-5 text-[#CDDC6E]" />
//         </button>
        
//         <div className="flex justify-center items-center h-full">
//           <h2 className="text-6xl md:text-8xl text-white text-center">
//             <span className="font-bold">Schedule</span>{' '}
//             <span className="font-light text-[#CDDC6E]">a</span>{' '}
//             <span className="font-bold">Sessions</span>
//           </h2>
//         </div>
//       </div>

//       {/* Modal */}
//       {isOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 max-w-[425px] w-full m-4 relative">
//             <button
//               onClick={() => setIsOpen(false)}
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//             >
//               <X className="w-5 h-5" />
//             </button>
//             <div className="mb-4">
//               <h3 className="text-xl font-semibold">Schedule Your Session</h3>
//             </div>
//             <div className="text-gray-600">
//               <p>This is where your scheduling content would go.</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import SessionCreator from './SessionCreator';

export default function ScheduleSession() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full mx-9">
      <div
        className="p-4 sm:p-6 lg:p-12 h-32 sm:h-40 lg:h-44 rounded-lg relative max-w-full"
        style={{
          background: "linear-gradient(90deg, rgba(213, 213, 213, 0) -35.12%, rgba(18, 18, 18, 0.5) 27.04%, rgba(185, 185, 185, 0.07) 55.41%, rgba(185, 185, 185, 0.07) 81.08%, rgba(185, 185, 185, 0.2) 100%)",
        }}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-white rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
        >
          Let's Go
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#CDDC6E]" />
        </button>
        <div className="flex justify-center items-center h-full">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl text-white text-center">
            <span className="font-bold">Schedule</span>{' '}
            <span className="font-light text-[#CDDC6E]">a</span>{' '}
            <span className="font-bold">Sessions</span>
          </h2>
        </div>
      </div>
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#1E1E1E] rounded-lg w-full max-w-[425px] relative text-white">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <X className="w-5 h-5" />
            </button>
            <SessionCreator onClose={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}