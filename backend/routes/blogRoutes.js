import express from "express";
import { createBlog, getBlogs } from "../controllers/blogController.js";

const router = express.Router();

router.get("/allblogs", getBlogs);
router.post("/create", createBlog);

export default router;
