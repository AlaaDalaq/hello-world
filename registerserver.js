const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); // Import bcrypt for password hashing
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors()); // Allow cross-origin requests from the frontend

const DB_URI = "mongodb://localhost:27017/userDB";  // Replace with your MongoDB URI

// Connect to MongoDB
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define the User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

// Create User model
const User = mongoose.model("User", userSchema);

\\ TODO (Add the post function here)

// Root route for testing
app.get("/", (req, res) => {
  res.send("Welcome to the API. Use /register to register a new user.");
});

// Start the server
app.listen(5001, () => {
  console.log("Server running on port 5001");
});
