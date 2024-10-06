import React, { useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const SessionCreator = ({ onClose }) => {
  const [sessions, setSessions] = useState([]);
  const [sessionName, setSessionName] = useState('');
  const [sessionDescription, setSessionDescription] = useState('');
  const [sessionLink, setSessionLink] = useState('');
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setFileName(file.name);
    } else {
      alert("Please select a JPEG or PNG file.");
      e.target.value = null;
    }
  };

  const handleSubmit = () => {
    if (sessionName && sessionDescription && sessionLink && fileName) {
      // Create a new session object
      const newSession = {
        id: sessions.length + 1,
        name: sessionName,
        description: sessionDescription,
        link: sessionLink,
        image: URL.createObjectURL(fileInputRef.current.files[0]), // Use the uploaded image
      };

      // Log for debugging to ensure submission works
      console.log("New session created:", newSession);

      // Add new session at the beginning
      setSessions([newSession, ...sessions]);

      // Reset form fields
      setSessionName('');
      setSessionDescription('');
      setSessionLink('');
      setFileName('');

      // Log the current session list
      console.log("Current session list:", sessions);
    } else {
      alert("Please fill in all the fields, including an image!");
    }
  };

  return (
    <div className="p-6">
      {/* Input Fields */}
      <h3 className="text-xl font-semibold mb-6">Name of Session:</h3>
      <input
        type="text"
        value={sessionName}
        onChange={(e) => setSessionName(e.target.value)}
        className="w-full bg-[#2C2C2C] rounded-md p-3 mb-4"
        placeholder="Name of Session"
      />
      <h3 className="text-xl font-semibold mb-6">Description of Session</h3>
      <textarea
        value={sessionDescription}
        onChange={(e) => setSessionDescription(e.target.value)}
        className="w-full bg-[#2C2C2C] rounded-md p-3 mb-4 h-32"
        placeholder="Description of Session"
      />
      <h3 className="text-xl font-semibold mb-6">Event Link</h3>
      <input
        type="text"
        value={sessionLink}
        onChange={(e) => setSessionLink(e.target.value)}
        className="w-full bg-[#2C2C2C] rounded-md p-3 mb-4"
        placeholder="Paste event link here"
      />
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".jpg,.jpeg,.png"
        className="hidden"
      />
      <button 
        onClick={() => fileInputRef.current.click()}
        className="w-full bg-[#2C2C2C] text-white rounded-md p-3 flex items-center justify-center gap-2 mb-4"
      >
        {fileName || 'Upload Image'} <ArrowRight className="w-4 h-4 text-[#CDDC6E]" />
      </button>

      {/* Submit Button */}
      <button 
        onClick={handleSubmit}
        className="w-full bg-[#CDDC6E] text-black font-semibold rounded-md p-3 mb-2"
      >
        Schedule It
      </button>

      <button onClick={onClose} className="w-full text-center text-gray-400 mt-2">
        Cancel
      </button>

      {/* Render Created Sessions */}
      <div className="mt-8">
        {sessions.length > 0 ? (
          sessions.map((session) => (
            <div key={session.id} className="relative bg-cover bg-center rounded-lg shadow-lg overflow-hidden m-4" style={{ backgroundImage: `url(${session.image})` }}>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4">
                <button 
                  onClick={() => window.open(session.link, "_blank")} 
                  className="bg-[#CDDC6E] text-black font-semibold px-4 py-2 rounded-full mb-4"
                >
                  Join Now <ArrowRight className="inline-block w-4 h-4 ml-2" />
                </button>
                <div>
                  <p className="text-white font-bold text-lg">{session.name}</p>
                  <p className="text-white text-sm">{session.description}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No sessions created yet. Start by scheduling a new session!</p>
        )}
      </div>
    </div>
  );
};

export default SessionCreator;
