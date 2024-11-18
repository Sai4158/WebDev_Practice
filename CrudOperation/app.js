const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/TaskApp", {
  useNewUrlParser: true,
});

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
});

const Task = mongoose.model("Task", TaskSchema);

app.use(bodyParser.json());

// Create Task
app.post("/CreateTask", (req, res) => {
  const newTask = new Task(req.body);
  newTask
    .save()
    .then(() => res.send("Task Created"))
    .catch((err) => res.status(500).send(err));
});

// Read All Tasks
app.get("/ReadAllTasks", (req, res) => {
  Task.find()
    .then((tasks) => res.json(tasks))
    .catch((err) => res.status(500).send(err));
});

// Update Task
app.put("/UpdateTask", (req, res) => {
  Task.findByIdAndUpdate(req.body.id, { status: req.body.status })
    .then(() => res.send("Task Updated"))
    .catch((err) => res.status(500).send(err));
});

// Delete Completed Tasks
app.delete("/DeleteCompleted", (req, res) => {
  Task.deleteMany({ status: "completed" })
    .then(() => res.send("Completed Tasks Deleted"))
    .catch((err) => res.status(500).send(err));
});

app.listen(3000, () => console.log("Server running on port 3000"));
