const User = require("../../models/User/User");
const Details = require("../../models/User/Details");
const Problem = require("../../models/Problem/Problem");

exports.addProblemToUser = async (req, res) => {
  try {
    const { userId, problemId } = req.body;

    const problem = await Problem.findById(problemId);
    if (!problem) {
      return res.status(400).json({
        success: false,
        message: "Problem not found",
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    const details = await Details.findOne({ userId: userId });
    if (!details) {
      return res.status(400).json({
        success: false,
        message: "Details not found for user",
      });
    }

    if (details.problems.some((p) => p.equals(problemId))) {
      const today = new Date().toISOString().split("T")[0];
      const submissionIndex = details.submission.findIndex(
        (entry) => entry.day === today
      );

      if (submissionIndex !== -1) {
        details.submission[submissionIndex].value++;
      } else {
        details.submission.push({ value: 1, day: today });
      }

      await details.save();
      return res.status(200).json({
        success: true,
        message: "User already added this problem",
      });
    }

    if (problem.level === "Easy") {
      details.easy++;
    } else if (problem.level === "Medium") {
      details.medium++;
    } else {
      details.hard++;
    }

    details.score += 5;
    details.problems.push(problemId);

    const today = new Date().toISOString().split("T")[0];
    const submissionIndex = details.submission.findIndex(
      (entry) => entry.day === today
    );

    if (submissionIndex !== -1) {
      details.submission[submissionIndex].value++;
    } else {
      details.submission.push({ value: 1, day: today });
    }

    await details.save();

    return res.status(200).json({
      success: true,
      data: problem,
      message: "Question added successfully",
    });
  } catch (error) {
    console.error("Error adding problem to user:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
