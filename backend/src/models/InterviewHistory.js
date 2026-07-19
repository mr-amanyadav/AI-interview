import mongoose from "mongoose";

const interviewHistorySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    resume: {
      type: Object,
      required: true,
    },

    job: {
      type: Object,
      required: true,
    },

    match: {
      type: Object,
      required: true,
    },

    questions: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const InterviewHistory = mongoose.model(
  "InterviewHistory",
  interviewHistorySchema
);

export default InterviewHistory;