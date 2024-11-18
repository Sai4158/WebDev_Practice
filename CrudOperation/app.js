// Server-side (Node.js + Express + MongoDB)
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); 

// MongoDB connection
mongoose.connect(
  "mongodb+srv://nodejs:nodejs@schooldb.ol99d.mongodb.net/SchoolDB?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const UserSchema = new mongoose.Schema({
  studentID: String,
  name: String,
});

const User = mongoose.model("User", UserSchema);

// Create User
app.post("/Create", (req, res) => {
  const newUser = new User(req.body);
  newUser
    .save()
    .then(() => res.json({ result: "User created successfully!" }))
    .catch((err) =>
      res
        .status(500)
        .json({ result: "Error creating user", error: err.message })
    );
});

// Read All Users
app.get("/ReadAll", (req, res) => {
  User.find()
    .then((users) => res.json({ result: users }))
    .catch((err) =>
      res
        .status(500)
        .json({ result: "Error fetching users", error: err.message })
    );
});

// Update User
app.put("/Update", (req, res) => {
  User.findOneAndUpdate(
    { studentID: req.body.studentID },
    { name: req.body.name }
  )
    .then(() => res.json({ result: "User updated successfully!" }))
    .catch((err) =>
      res
        .status(500)
        .json({ result: "Error updating user", error: err.message })
    );
});

// Delete User
app.delete("/Delete", (req, res) => {
  User.deleteOne({ studentID: req.query.studentID })
    .then(() => res.json({ result: "User deleted successfully!" }))
    .catch((err) =>
      res
        .status(500)
        .json({ result: "Error deleting user", error: err.message })
    );
});

// Start the server
app.listen(3000, () => console.log("Server running on port 3000"));
