const express = require("express");
const router = express.Router();
const { applyJob, getApplications } = require("../controller/applicationController");
const auth = require("../middleware/authMiddleware");

router.post("/apply", auth, applyJob);
router.get("/", auth, getApplications);

module.exports = router;