**Project 2: To-Do List App** — a fun and powerful way to practice **JavaScript DOM**, **events**, **arrays**, and **localStorage**.

---

## ✅ Project 2: To-Do List App (Step-by-Step Guide — No Code)

### 🎯 Goal:

Create an app where users can:

- Add tasks ✅
- Delete tasks ❌
- Mark tasks as complete ✔️
- Save tasks even after refreshing (using **localStorage**)

---

## 🔧 Step-by-Step Instructions

---

### **🧱 Step 1: Set Up HTML Structure**

1. Create a new `.html` file.
2. Inside `<body>`, add:

   - A heading (`<h1>To-Do List</h1>`)
   - A text input to type tasks
   - An "Add Task" button
   - A `<ul>` or `<div>` to display the list of tasks

---

### **🎨 Step 2: Style with Tailwind or CSS**

Add basic layout and styling:

- Center the content
- Add spacing, padding, and background
- Style tasks (e.g., completed = strikethrough)

Optional:

- Add icons for delete (🗑️) and complete (✔️)

---

### **🧠 Step 3: Plan the App Logic**

Your logic will need:

| Feature         | Description                                                             |
| --------------- | ----------------------------------------------------------------------- |
| Add task        | On button click, take input and show task in list                       |
| Delete task     | On clicking delete icon, remove the task                                |
| Complete task   | On clicking the task or check icon, add strike-through and mark as done |
| Save to storage | Store tasks in localStorage so they persist on refresh                  |
| Load on reload  | When page loads, fetch tasks from storage and render them again         |

---

### **⚙ Step 4: Link JavaScript File**

1. Create a `.js` file
2. Link it with `<script src="script.js"></script>` just **before** `</body>`

---

### **📌 Step 5: JavaScript - Get Elements and Add Event Listeners**

- Get references to:

  - The input box
  - The button
  - The task list container

- Add event listeners:

  - On click of "Add Task" → add task to the list and to `localStorage`
  - On click of "Delete" → remove the task from DOM and `localStorage`
  - On click of "Complete" → mark task done visually + update `localStorage`

---

### **💾 Step 6: Use `localStorage` for Data Persistence**

- When adding/deleting/updating tasks, also update `localStorage`
- On page load (`window.onload`), check if tasks exist in `localStorage`

  - If yes, load and render them

---

### **🧪 Step 7: Test All Features**

Manually test:

- Add tasks
- Delete tasks
- Mark/unmark as complete
- Refresh the page and confirm tasks stay

---

### 📝 Optional Features:

- Add due date or time
- Filter tasks (All / Completed / Pending)
- Drag-and-drop to reorder
- Add dark mode toggle
- Add sound effect on task complete ✅

---

Once you're ready, you can start implementing, and I can help you debug or guide you step-by-step for each function.

Would you like me to walk you through **HTML setup first**, or do you want to start with **design or JavaScript**?
