const express = require("express");

const router = express.Router();

const {
  getAllSamples,
  getSampleById,
  createSample,
  updateSample,
  deleteSample,
} = require("../controllers/waterSampleController");

// Get all water samples
router.get("/", getAllSamples);

// Get one water sample
router.get("/:id", getSampleById);

// Add a new water sample
router.post("/", createSample);

// Update a water sample
router.put("/:id", updateSample);

// Delete a water sample
router.delete("/:id", deleteSample);

module.exports = router;