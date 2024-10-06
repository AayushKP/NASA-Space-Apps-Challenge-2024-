// components/PostCard.js
import React, { useState, useEffect } from "react";

const PostCard = ({ post, userId, onCommentSubmit }) => {
  const [newComment, setNewComment] = useState("");
  const [hasLiked, setHasLiked] = useState(post.likedBy.includes(userId)); // Track if the user has liked the post

  const handleLike = async () => {
    try {
      const response = await fetch(
        `https://nasa-space-apps-challenge-2024.onrender.com/${post._id}/like`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to like/unlike the post");
      }

      const updatedPost = await response.json();
      setHasLiked(updatedPost.likedBy.includes(userId)); // Update local state based on response
      post.likes = updatedPost.likes; // Update local state directly (optional)
    } catch (error) {
      console.error("Error liking the post:", error);
    }
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      onCommentSubmit(post._id, newComment);
      setNewComment("");
    }
  };

  useEffect(() => {
    setHasLiked(post.likedBy.includes(userId)); // Sync the like state with the post data
  }, [post.likedBy, userId]);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md mt-6">
      <h4 className="text-lg font-bold text-green-400">{post.title}</h4>
      <p className="text-gray-400 mb-4">{post.content}</p>

      {post.media && (
        <div className="mb-4">
          {post.media.type === "image" ? (
            <img
              src={`https://nasa-space-apps-challenge-2024.onrender.com${post.media.url}`}
              alt="Post Media"
              className="rounded-lg w-full h-auto object-cover"
            />
          ) : (
            <video
              controls
              src={`https://nasa-space-apps-challenge-2024.onrender.com${post.media.url}`}
              className="rounded-lg w-full h-auto object-cover"
            />
          )}
        </div>
      )}

      <div className="flex space-x-4">
        <button
          onClick={handleLike}
          className={`text-white flex items-center ${
            hasLiked ? "text-red-500" : ""
          }`}
        >
          <i className="mr-2">❤️</i> {hasLiked ? post.likes : post.likes + 1}
        </button>
      </div>

      <form className="mt-4" onSubmit={handleCommentSubmit}>
        <input
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          className="w-full bg-gray-900 text-white p-3 rounded-lg"
        />
      </form>

      <ul className="mt-4 space-y-2">
        {post.comments.map((comment, index) => (
          <li key={index} className="text-gray-400">
            {comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostCard;
