const Feedback = require("./feedbackLib");

const getAllFeedbacks = (eq, res) => {
    const feedbacks=Feedback.getAll()
    res.json(feedbacks);
};

const createFeedback = (req, res) => {
    const {sender, message, rating} = req.body;
    const newFeedback = Feedback.addOne(sender, message, rating);
    res.json({message: newFeedback});
};

const getFeedbackById = (req, res) => {
    const feedbackId = req.params.feedbackIdId;
    const feedback = Feedback.findById(feedbackId);
    if (feedback) {
        res.json(feedback);
    } else {
        res.status(404).json({ message: "Feedback not found"});
    }
};

const updateFeedback = (req, res) => {
    const feedbackId = req.params.feedbackId;
    const {sender, message, rating} = req.body;
    const updateFeedback = Feedback.updateOneById(feedbackId, {sender, message, rating});

    if (updateFeedback) {
        res.json(updateFeedback);
    } else {
        res.status(404).json({ message: "Feedback not found" });
    }
};

const deleteFeedback = (req, res) => {
    res.json({ message: "Hello from deleteFeedback" });
};

module.exports = {
  getAllFeedbacks,
  getFeedbackById,
  createFeedback,
  updateFeedback,
  deleteFeedback,
};

