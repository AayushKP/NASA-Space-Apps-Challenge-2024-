// App.js
import React, { useState, useEffect } from "react";
import PostForm from "./PostForm";
import Feed from "./Feed";

const Discussion = () => {
  const [posts, setPosts] = useState([]);

  // Fetch posts from the server
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(
        "https://nasa-space-apps-challenge-2024.onrender.com/posts"
      );
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  // Submit a new post
  const handlePostSubmit = async (newPost) => {
    const formData = new FormData();
    formData.append("title", newPost.title);
    formData.append("content", newPost.content);
    if (newPost.media) formData.append("media", newPost.media);

    const response = await fetch(
      "https://nasa-space-apps-challenge-2024.onrender.com/posts",
      {
        method: "POST",
        body: formData,
      }
    );

    const postData = await response.json();
    setPosts([postData, ...posts]); // Add the new post to the existing posts
  };

  // Handle like update
  const handleLike = async (postId) => {
    const updatedPosts = posts.map((post) =>
      post._id === postId
        ? { ...post, liked: true, likes: post.likes + 1 }
        : post
    );
    setPosts(updatedPosts);
  };

  // Handle comment update
  const handleCommentSubmit = async (postId, comment) => {
    const response = await fetch(
      `https://nasa-space-apps-challenge-2024.onrender.com/posts/${postId}/comment`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comment }),
      }
    );
    const updatedPost = await response.json();
    const updatedPosts = posts.map((post) =>
      post._id === postId ? updatedPost : post
    );
    setPosts(updatedPosts);
  };

  return (
    <div className="bg-[#121212] min-h-screen text-white ">
      <div className="w-full ">
        <PostForm onSubmit={handlePostSubmit} />
        <Feed
          posts={posts}
          onLike={handleLike}
          onCommentSubmit={handleCommentSubmit}
        />
      </div>
    </div>
  );
};

export default Discussion;
