import InterviewHistory from "../models/InterviewHistory.js";

export const saveInterview = async (req, res) => {
  try {
    const history = await InterviewHistory.create({
      user: req.user._id,
      resume: req.body.resume,
      job: req.body.job,
      match: req.body.match,
      questions: req.body.questions,
    });

    res.status(201).json(history);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getHistory = async (req, res) => {
  try {
    const history = await InterviewHistory.find({
      user: req.user._id,
    }).sort({
      createdAt: -1,
    });

    res.json(history);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};