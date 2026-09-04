const db = require("../config/database");

const WaterSample = {
  // Get all water samples
  getAll: (callback) => {
    const sql = "SELECT * FROM water_samples";

    db.query(sql, callback);
  },

  // Get one water sample
  getById: (sampleId, callback) => {
    const sql = "SELECT * FROM water_samples WHERE sampleId = ?";

    db.query(sql, [sampleId], callback);
  },

  // Create a new water sample
  create: (sampleData, callback) => {
    const sql = `
      INSERT INTO water_samples
      (location, waterSource, dateCollected, timeCollected, pH, turbidity,
       conductivity, temperature, TDS, dissolvedOxygen, nitrate, phosphate, remarks)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      sampleData.location,
      sampleData.waterSource,
      sampleData.dateCollected,
      sampleData.timeCollected,
      sampleData.pH,
      sampleData.turbidity,
      sampleData.conductivity,
      sampleData.temperature,
      sampleData.TDS,
      sampleData.dissolvedOxygen,
      sampleData.nitrate,
      sampleData.phosphate,
      sampleData.remarks
    ];

    db.query(sql, values, callback);
  },

  // Update a water sample
  update: (sampleId, sampleData, callback) => {
    const sql = `
      UPDATE water_samples
      SET location = ?,
          waterSource = ?,
          dateCollected = ?,
          timeCollected = ?,
          pH = ?,
          turbidity = ?,
          conductivity = ?,
          temperature = ?,
          TDS = ?,
          dissolvedOxygen = ?,
          nitrate = ?,
          phosphate = ?,
          remarks = ?
      WHERE sampleId = ?
    `;

    const values = [
      sampleData.location,
      sampleData.waterSource,
      sampleData.dateCollected,
      sampleData.timeCollected,
      sampleData.pH,
      sampleData.turbidity,
      sampleData.conductivity,
      sampleData.temperature,
      sampleData.TDS,
      sampleData.dissolvedOxygen,
      sampleData.nitrate,
      sampleData.phosphate,
      sampleData.remarks,
      sampleId
    ];

    db.query(sql, values, callback);
  },

  // Delete a water sample
  delete: (sampleId, callback) => {
    const sql = "DELETE FROM water_samples WHERE sampleId = ?";

    db.query(sql, [sampleId], callback);
  }
};

module.exports = WaterSample;
