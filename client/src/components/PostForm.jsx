// components/PostForm.js
import React, { useState } from "react";

const PostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [media, setMedia] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content || !title) return;

    onSubmit({ title, content, media });
    setTitle("");
    setContent("");
    setMedia(null);
  };

  return (
    <form
      className="bg-gray-800 p-6 rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post Title"
        className="w-full bg-gray-900 text-white p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full bg-gray-900 text-white p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <div className="mt-4 flex justify-between">
        <label className="text-gray-400 cursor-pointer">
          <input
            type="file"
            className="hidden"
            onChange={(e) => setMedia(e.target.files[0])}
          />
          <span className="px-4 py-2 bg-gray-700 rounded-lg">Upload Media</span>
        </label>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Post
        </button>
      </div>
    </form>
  );
};

export default PostForm;
