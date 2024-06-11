import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT;
const MONG_URI = process.env.MONG_URI;

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);

app.listen(PORT, async () => {
  console.log("connected to port" + PORT);
  try {
    await mongoose.connect(MONG_URI);
    console.log("connected to mongodb");
  } catch (error) {
    console.log(error.message);
  }
});
