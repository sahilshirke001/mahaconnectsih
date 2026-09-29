const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./db");
const applicationRoutes = require("./routes/applicationRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/applications", applicationRoutes);

connectDB();

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "MahaConnect Backend is running 🚀"
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`MahaConnect backend running on http://localhost:${PORT}`);
});