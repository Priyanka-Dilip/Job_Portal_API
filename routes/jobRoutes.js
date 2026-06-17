const express = require("express");

const router = express.Router();

const {
  createJob,
  getJobs,
} = require("../controller/jobController");

router.post("/", createJob);

router.get("/", getJobs);

module.exports = router;