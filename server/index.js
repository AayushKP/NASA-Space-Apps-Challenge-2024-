// index.js
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const Post = require("./models/Post");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// MongoDB connection
mongoose.connect(
  "mongodb+srv://aayuk5183:Ayush5183@aayuk5183.vimi3cc.mongodb.net/forum",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Append extension
  },
});

const upload = multer({ storage: storage });

// Routes

// GET: Fetch all posts
app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: "Error fetching posts" });
  }
});

// POST: Create a new post
app.post("/posts", upload.single("media"), async (req, res) => {
  try {
    const { title, content } = req.body;
    const media = req.file
      ? {
          url: `/uploads/${req.file.filename}`,
          type: req.file.mimetype.includes("image") ? "image" : "video",
        }
      : null;

    const newPost = new Post({
      title,
      content,
      media,
      likes: 0, // Initialize likes
      likedBy: [], // Store user IDs who liked the post
      comments: [], // Initialize comments
    });

    await newPost.save();
    res.json(newPost);
  } catch (err) {
    res.status(500).json({ error: "Error creating post" });
  }
});

// POST: Like/Unlike a post
app.post("/posts/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const userId = req.body.userId; // Assuming you send user ID from the client

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    // Check if the user has already liked the post
    const hasLiked = post.likedBy.includes(userId);

    if (hasLiked) {
      // User is unliking the post
      post.likes -= 1;
      post.likedBy = post.likedBy.filter((id) => id !== userId);
    } else {
      // User is liking the post
      post.likes += 1;
      post.likedBy.push(userId);
    }

    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: "Error liking/unliking post" });
  }
});

// POST: Comment on a post
app.post("/posts/:id/comment", async (req, res) => {
  try {
    const { comment } = req.body;
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    post.comments.push(comment);
    await post.save();

    res.json(post);
  } catch (err) {
    res.status(500).json({ error: "Error commenting on post" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
