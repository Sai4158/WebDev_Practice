const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

mongoose.connect(
  "mongodb+srv://nodejs:nodejs@schooldb.ol99d.mongodb.net/?retryWrites=true&w=majority&appName=SchoolDB",
  {
    useNewUrlParser: true,
  }
);

const UserSchema = new mongoose.Schema({
  studentID: String,
  name: String,
});

const User = mongoose.model("User", UserSchema);

// Create
app.post("/Create", (req, res) => {
  const newUser = new User(req.body);
  newUser
    .save()
    .then(() => res.json({ result: "User created successfully!" }))
    .catch((err) => res.status(500).json({ result: "Error creating user" }));
});

// Read All
app.get("/ReadAll", (req, res) => {
  User.find()
    .then((users) => res.json({ result: users }))
    .catch((err) => res.status(500).json({ result: "Error fetching users" }));
});

// Update
app.put("/Update", (req, res) => {
  User.findOneAndUpdate(
    { studentID: req.body.studentID },
    { name: req.body.name }
  )
    .then(() => res.json({ result: "User updated successfully!" }))
    .catch((err) => res.status(500).json({ result: "Error updating user" }));
});

// Delete
app.delete("/Delete", (req, res) => {
  User.deleteOne({ studentID: req.query.studentID })
    .then(() => res.json({ result: "User deleted successfully!" }))
    .catch((err) => res.status(500).json({ result: "Error deleting user" }));
});

app.listen(3000, () => console.log("Server running on port 3000"));
