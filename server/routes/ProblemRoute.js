const express = require("express");
const router = express.Router();

const { showProblem } = require("../controllers/Problem");
const { compilecode } = require("../controllers/ProblemHelper/Compiler");
const { showallproblem } = require("../controllers/Problem");
const { addProblem } = require("../controllers/Problem");
router.post("/showproblem", showProblem);
router.post("/complie", compilecode);
router.get("/showallproblem", showallproblem);
router.post("/addproblem", addProblem);
module.exports = router;
