const Job = require("../models/Job");

exports.createJob = async (req, res) => {
  try {
    const job = await Job.create(req.body);

    res.status(201).json(job);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();

    res.status(200).json(jobs);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};