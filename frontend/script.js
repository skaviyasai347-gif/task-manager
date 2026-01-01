const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

const API_URL = "http://localhost:3000/tasks";

// 1. Load tasks from MongoDB
async function loadTasks() {
    try {
        const res = await fetch(API_URL);
        const tasks = await res.json();

        taskList.innerHTML = "";
        
        tasks.forEach(task => {
            const li = document.createElement("li");
            li.style.marginBottom = "10px";
            
            // task.text comes from your MongoDB schema
            // task._id is the unique ID MongoDB gives every item
            li.innerHTML = `
                <span>${task.text}</span>
                <button onclick="deleteTask('${task._id}')" style="margin-left: 15px; color: red; cursor: pointer;">
                    Delete
                </button>
            `;
            
            taskList.appendChild(li);
        });
    } catch (error) {
        console.error("Error loading tasks:", error);
    }
}

// 2. Add task to MongoDB
taskForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const taskText = taskInput.value.trim();
    if (!taskText) return;

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ task: taskText })
        });

        if (response.ok) {
            taskInput.value = ""; // Clear input
            loadTasks(); // Refresh the list
        }
    } catch (error) {
        console.error("Error adding task:", error);
    }
});

// 3. Delete task from MongoDB
async function deleteTask(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        if (response.ok) {
            loadTasks(); // Refresh the list after deleting
        }
    } catch (error) {
        console.error("Error deleting task:", error);
    }
}

// Initial load
loadTasks();