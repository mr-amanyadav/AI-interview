import Interview from "../models/Interview.js";

export const saveInterview = async (req, res) => {
  try {
    const interview = await Interview.create({
      user: req.user._id,
      resume: req.body.resume,
      job: req.body.job,
      match: req.body.match,
      questions: req.body.questions,
    });

    res.status(201).json(interview);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const getHistory = async (req, res) => {
  try {
    const history = await Interview.find({
      user: req.user._id,
    }).sort({
      createdAt: -1,
    });

    res.json(history);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};