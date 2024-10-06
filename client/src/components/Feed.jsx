// components/Feed.js
import React from "react";
import PostCard from "./PostCard";

const Feed = ({ posts, onLike, onCommentSubmit }) => {
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <PostCard
          key={post._id}
          post={post}
          onLike={onLike}
          onCommentSubmit={onCommentSubmit}
        />
      ))}
    </div>
  );
};

export default Feed;
