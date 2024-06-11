import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    blogName: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
      ref: "User",
    },
    description: {
      type: String,
      required: true,
    },
    likedBy: {
      type: mongoose.Schema.Types.Array,
      ref: "User",
      default: [],
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
