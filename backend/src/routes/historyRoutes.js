import express from "express";

import {
  saveInterview,
  getHistory,
} from "../controllers/historyController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, saveInterview);

router.get("/", protect, getHistory);

export default router;