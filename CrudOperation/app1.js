const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(
  "mongodb+srv://nodejs:nodejs@schooldb.ol99d.mongodb.net/TaskDB?retryWrites=true&w=majority"
);

// Task Schema and Model
const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: { type: String, enum: ["pending", "completed"], default: "pending" },
});

const Task = mongoose.model("Task", TaskSchema);

// Create Task
app.post("/CreateTask", (req, res) => {
  const newTask = new Task(req.body);
  newTask
    .save()
    .then(() => res.json({ result: "Task created successfully!" }))
    .catch((err) =>
      res
        .status(500)
        .json({ result: "Error creating task", error: err.message })
    );
});

// Read All Tasks
app.get("/ReadAllTasks", (req, res) => {
  Task.find()
    .then((tasks) => res.json({ result: tasks }))
    .catch((err) =>
      res
        .status(500)
        .json({ result: "Error fetching tasks", error: err.message })
    );
});

// Update Task Status
app.put("/UpdateTask", (req, res) => {
  Task.findOneAndUpdate({ _id: req.body.id }, { status: req.body.status })
    .then(() => res.json({ result: "Task status updated successfully!" }))
    .catch((err) =>
      res
        .status(500)
        .json({ result: "Error updating task", error: err.message })
    );
});

// Delete Completed Tasks
app.delete("/DeleteCompletedTasks", (req, res) => {
  Task.deleteMany({ status: "completed" })
    .then(() => res.json({ result: "Completed tasks deleted successfully!" }))
    .catch((err) =>
      res
        .status(500)
        .json({ result: "Error deleting tasks", error: err.message })
    );
});

// Start the server
app.listen(3000, () =>
  console.log("Task Management Server running on port 3000")
);
