// models/Post.js
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    media: {
      url: { type: String },
      type: { type: String, enum: ["image", "video"] },
    },
    likes: { type: Number, default: 0 },
    likedBy: { type: [String], default: [] }, // Store user IDs who liked the post
    comments: { type: [String], default: [] }, // Store comments
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
