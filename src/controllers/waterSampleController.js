const WaterSample = require("../models/waterSampleModel");

// Get all water samples
const getAllSamples = (req, res) => {
  WaterSample.getAll((err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        message: "Failed to retrieve water samples",
      });
    }

    res.status(200).json(results);
  });
};

// Get one water sample
const getSampleById = (req, res) => {
  const { id } = req.params;

  WaterSample.getById(id, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        message: "Failed to retrieve water sample",
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        message: "Water sample not found",
      });
    }

    res.status(200).json(results[0]);
  });
};

// Create a new water sample
const createSample = (req, res) => {
  const sampleData = req.body;

  WaterSample.create(sampleData, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        message: "Failed to create water sample",
      });
    }

    res.status(201).json({
      message: "Water sample created successfully",
      sampleId: result.insertId,
    });
  });
};

// Update a water sample
const updateSample = (req, res) => {
  const { id } = req.params;
  const sampleData = req.body;

  WaterSample.update(id, sampleData, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        message: "Failed to update water sample",
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Water sample not found",
      });
    }

    res.status(200).json({
      message: "Water sample updated successfully",
    });
  });
};

// Delete a water sample
const deleteSample = (req, res) => {
  const { id } = req.params;

  WaterSample.delete(id, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        message: "Failed to delete water sample",
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Water sample not found",
      });
    }

    res.status(200).json({
      message: "Water sample deleted successfully",
    });
  });
};

module.exports = {
  getAllSamples,
  getSampleById,
  createSample,
  updateSample,
  deleteSample,
};