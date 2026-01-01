const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
//const PORT = 3000;
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Middleware
app.use(cors());
app.use(express.json());

// 1. Connect to MongoDB Atlas
// Note: @ in your password has been replaced with %40 for encoding
const MONGO_URI = "mongodb+srv://skaviyasai347_db_user:kaviya%402007@task-manager.oatnpn9.mongodb.net/taskDB?retryWrites=true&w=majority&appName=task-manager";
const mongoURI = process.env.MONGO_URI; 
mongoose.connect(mongoURI);
mongoose.connect(MONGO_URI)
    .then(() => console.log("✅ Connected to MongoDB Atlas!"))
    .catch(err => {
        console.error("❌ Could not connect to MongoDB:");
        console.error(err);
    });

// 2. Define the Task Schema and Model
const taskSchema = new mongoose.Schema({
    text: { type: String, required: true }
});

const Task = mongoose.model("Task", taskSchema);

// 3. GET all tasks from DB
app.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch tasks" });
    }
});

// 4. POST a new task to DB
app.post("/tasks", async (req, res) => {
    try {
        const newTask = new Task({ text: req.body.task });
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (err) {
        res.status(400).json({ error: "Failed to save task" });
    }
});

// 5. DELETE a task from DB
app.delete("/tasks/:id", async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: "Task Deleted" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete task" });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});