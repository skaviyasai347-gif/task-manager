# 🗂️ Full Stack Task Manager (HTML, CSS, JS + MongoDB)

A simple and efficient **Task Manager Application** built using **HTML, CSS, JavaScript (Frontend)** and **Node.js, Express.js, MongoDB (Backend)**.
This project focuses on core full-stack development without using any frontend frameworks like React.

---

## 🚀 Features

* ✅ Add new tasks
* ✏️ Edit existing tasks
* ❌ Delete tasks
* 📋 View all tasks in a clean UI
* 🕒 Mark tasks as Completed / Pending
* 🗃️ Store tasks in MongoDB database
* 🔄 Dynamic updates using JavaScript (Fetch API)
* 🎨 Responsive and user-friendly interface

---

## 🛠️ Tech Stack

### Frontend:

* HTML
* CSS
* JavaScript (Vanilla JS + Fetch API)

### Backend:

* Node.js
* Express.js

### Database:

* MongoDB

---

## 📁 Project Structure

```bash
task-manager/
│
├── backend/            # Node.js + Express backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│
├── frontend/           # Static frontend
│   ├── index.html
│   ├── style.css
│   ├── script.js
│
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/skaviyasai347-gif/task-manager.git
cd task-manager
```

---

### 2️⃣ Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start backend server:

```bash
npm start
```

---

### 3️⃣ Run Frontend

Simply open the HTML file:

```bash
cd frontend
open index.html
```

(or double-click `index.html`)

---

## 🔗 API Endpoints

### ➕ Create Task

```
POST /api/tasks
```

### 📥 Get All Tasks

```
GET /api/tasks
```

### ✏️ Update Task

```
PUT /api/tasks/:id
```

### ❌ Delete Task

```
DELETE /api/tasks/:id
```

---

## 🧠 How It Works

1. User interacts with the UI (HTML/CSS)
2. JavaScript sends requests using Fetch API
3. Express backend handles logic
4. MongoDB stores and retrieves task data
5. UI updates dynamically without page reload

---

## 🎨 UI Highlights

* Clean and minimal design
* Task list with action buttons
* Status toggle (Completed / Pending)
* Responsive layout for mobile and desktop

---

## 🔮 Future Improvements

* 🔐 User login & authentication
* 📅 Task deadlines & reminders
* 🔍 Search and filter functionality
* ☁️ Deployment (Render / Netlify)
* 📊 Dashboard analytics

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a branch (`git checkout -b feature-name`)
3. Commit changes
4. Push and create a PR

---

## 📜 License

This project is open-source under the MIT License.

---

## 👩‍💻 Author

**Kaviya Sai S**
B.Tech IT | Full Stack Developer 🚀

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---
