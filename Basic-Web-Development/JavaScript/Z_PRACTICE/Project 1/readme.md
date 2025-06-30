**Project 1: Form Validation** — a great way to practice JavaScript DOM manipulation, events, and condition checking.

---

## ✅ Project 1: Form Validation (Step-by-Step Guide — No Code)

### 🎯 Goal:

You’ll create a sign-up form that checks if:

- Name is not empty
- Email is valid
- Password is at least 6 characters
- Confirm Password matches Password

---

## 🔧 Step-by-Step Instructions

---

### **🧱 Step 1: Set Up HTML Structure**

1. Create a new `.html` file.
2. Inside the `<body>`, add:

   - A `<form>` element with:

     - Name input
     - Email input
     - Password input
     - Confirm Password input
     - Submit button

3. Add a few `<span>` or `<div>` tags near the inputs to display error messages.

---

### **🎨 Step 2: Style Your Form (Optional but Recommended)**

- Use CSS (in `<style>` or `.css` file) to style the form:

  - Set width, padding, colors.
  - Style the error messages (e.g., red text).
  - Add margins or spacing for better layout.

---

### **🧠 Step 3: Plan Validation Rules**

Here are your validation checks:

| Field            | Rule                     |
| ---------------- | ------------------------ |
| Name             | Must not be empty        |
| Email            | Must include `@` and `.` |
| Password         | Minimum 6 characters     |
| Confirm Password | Must match Password      |

---

### **⚡ Step 4: Add JavaScript File and Link It**

1. Create a new `.js` file.
2. Link it in your HTML with `<script src="filename.js"></script>` **before the closing `</body>` tag**.

---

### **🧠 Step 5: Target Form and Inputs in JS**

In your JS file:

1. Get references to:

   - Each input (`name`, `email`, etc.)
   - Error message elements
   - The form itself

---

### **🎯 Step 6: Add Event Listener for Form Submission**

- Use an event listener for `submit`.
- Inside the handler function:

  1. Prevent default submission using `event.preventDefault()`.
  2. Clear previous error messages.
  3. Validate each field using `if` conditions.
  4. If a field is invalid, show the error message and highlight the field.
  5. If all fields are valid, show success message or proceed.

---

### **✅ Step 7: Test All Scenarios**

Manually test:

- Empty fields
- Invalid email
- Short password
- Mismatched confirm password
- All correct data

---

### 📝 Optional Features:

- Add regex to check email format more strictly.
- Add "Show Password" checkbox to toggle visibility.
- Add password strength meter.
- Clear form on success.

---

Let me know when you finish or if you get stuck at any step — I’ll help you debug or move to the next part! 💪
