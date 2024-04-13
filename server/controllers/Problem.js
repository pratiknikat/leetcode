const Problem = require("../models/Problem/Problem");

exports.addProblem = async (req, res) => {
  try {
    console.log(req.body);
    const allProblem = await Problem.find({});
    const len = allProblem.length;

    // qno ,level,problem, sampleTestCase, TestCase,problemTitle
    const problem = new Problem({
      qno: len + 1,
      level: req.body.problemLevel,
      problem: req.body.content,
      sampleTestCase: req.body.sampleTestCases,
      TestCase: req.body.testCases,
      problemTitle: req.body.problemTitle,
    });
    await problem.save();
    return res.status(200).json({ message: "Successfully added!" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error in adding problem",
    });
  }
};
//

//
// display the problem
//
exports.showProblem = async (req, res) => {
  try {
    const problemId = req.body.problemId;

    const pdetails = await Problem.findById(problemId);

    return res.status(200).json({
      success: true,
      data: pdetails,
      message: "Problem Details",
    });
  } catch (error) {
    // console.error(err);
    return res.status(500).json({
      success: false,
      message: "Error in problem Details ",
    });
  }
};

exports.showallproblem = async (req, res) => {
  try {
    const problem = await Problem.find({});
    if (!problem) {
      return res
        .status(404)
        .json({ success: false, message: "No problems found" });
    }
    return res.status(200).json({
      success: true,
      data: problem,
      message: "Problem Details",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error in problem Details ",
    });
  }
};
