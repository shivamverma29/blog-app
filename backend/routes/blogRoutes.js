import express from "express";
import {
  createBlog,
  getBlogs,
  getBlog,
} from "../controllers/blogController.js";

const router = express.Router();

router.get("/allblogs", getBlogs);
router.get("/:id", getBlog);
router.post("/create", createBlog);

export default router;
