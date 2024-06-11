import Blog from "../models/blogModel.js";
import User from "../models/userModel.js";

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
};

export const createBlog = async (req, res) => {
  try {
    const { blogName, author, description } = req.body;
    const user = User.findOne({ author });
    if (!user) res.staturs(400).json({ error: "user does not exists" });
    const newBlog = new Blog({
      blogName,
      author,
      description,
    });
    // (await newBlog).likedBy.push(user._id);

    await newBlog.save();
    res.status(200).json({
      _id: newBlog._ig,
      blogName: newBlog.blogName,
      author: newBlog.author,
      description: newBlog.description,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
};
