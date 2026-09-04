const express = require("express");
const db = require("./src/config/database");
const waterSampleRoutes = require("./src/routes/waterSampleRoutes");

const app = express();

app.use(express.json());

// Water sample routes
app.use("/api/samples", waterSampleRoutes);

// Test route
app.get("/api/test", (req, res) => {
  res.json({ message: "API test works" });
});

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "Water Quality Monitoring System API is running",
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});