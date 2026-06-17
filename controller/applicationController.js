const Application = require("../models/Application");

exports.applyJob = async (req, res) => {
  try {
    const { jobId } = req.body;
    const application = await Application.create({
      job: jobId,
      applicant: req.user.id
    });
    res.status(201).json({ success: true, application });
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
};

exports.getApplications = async (req, res) => {
  try {
    const apps = await Application.find().populate("job").populate("applicant", "name email");
    res.json(apps);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
};