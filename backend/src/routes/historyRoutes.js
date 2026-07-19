import express from "express";

import {
  saveInterview,
  getHistory,
  getInterviewById,
} from "../controllers/historyController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, saveInterview);

router.get("/", protect, getHistory);

router.get("/:id", protect, getInterviewById);

export default router;