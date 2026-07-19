import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  saveInterview,
  getHistory,
} from "../controllers/historyController.js";

const router = express.Router();

router.post("/", protect, saveInterview);

router.get("/", protect, getHistory);

export default router;