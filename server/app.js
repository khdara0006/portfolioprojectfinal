const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => console.log('❌ MongoDB connection error:', err.message));

// Routes
const projectRoutes = require("./routes/projectRoutes");
const messageRoutes = require("./routes/messageRoutes");

app.use("/api/projects", projectRoutes);
app.use("/api/messages", messageRoutes);

// Test route
app.get("/api/test", (req, res) => {
  res.json({ message: "API is working!" });
});

module.exports = app;