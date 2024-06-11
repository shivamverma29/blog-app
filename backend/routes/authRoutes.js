import express from "express";
import { login, signUp } from "../controllers/authControllers.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);
// router.post("/signup", signUp);

export default router;
