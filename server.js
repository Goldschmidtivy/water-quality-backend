const express = require("express");
const cors = require("cors");
const db = require("./src/config/database");
const waterSampleRoutes = require("./src/routes/waterSampleRoutes");
const authRoutes = require("./src/routes/authRoutes");
const app = express();

app.use(express.json());
app.use(cors());

// Water sample routes
app.use("/api/samples", waterSampleRoutes);
app.use("/api/auth", authRoutes);

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});