📚 CompExpress Library Catalogue 📚  
Welcome to my project! This is a responsive and interactive digital book catalogue that allows users to view, manage, and eventually expand their personal library collection. Built using HTML, CSS, and JavaScript, this project focuses on creating a clean UI, smooth UX, and modular code to support future enhancements like data persistence and interactivity.

---

## 🚀 Features

### 📦 Book Catalogue Display
- Books are rendered dynamically to the page using JavaScript.
- Each book is displayed inside a styled `.book-card` component showing its title and unique ID.
- Modular structure allows easy expansion of book properties like author, pages, and read status.

### 📝 New Book Form
- Clicking the **NEW BOOK** button displays a form section for book submissions.
- Inputs for **Title**, **Author**, and **Pages** are provided.
- A **Cancel** button allows users to exit the form without submitting.

### 🔄 Section Toggle
- JavaScript handles smooth toggling between the main catalogue and the form.
- The form resets on cancellation to maintain clean user input.

### 🎨 Clean & Accessible UI
- Neutral grey background with high-contrast book cards ensures readability.
- Consistent padding, spacing, and rounded borders for a modern aesthetic.
- Buttons use hover effects and dynamic styling to encourage user interaction.

---

## 🔑 Key HTML Elements Used

### Semantic Tags
- `<section>`, `<main>`, `<footer>`: For structured layout of content.
- `<form>`, `<input>`, `<button>`: To capture and process user data.

### Attributes
- `id`: For DOM targeting (e.g., `#catalogue`, `#books`, `#new-book-form`).
- `class`: For reusable CSS styling (e.g., `.book-card`, `.form-buttons`).

---

## 🎨 Key CSS Techniques

### Flexbox Layout
- Used for responsive column stacking and spacing across the layout.
- Sections, buttons, and card stacks all benefit from Flexbox alignment.

### Buttons & Interaction
- Buttons use bold hover transitions for better user feedback.
- Submit and Cancel buttons are styled distinctly to improve clarity.

### Form Styling
- Fields use padding and border-radius for accessibility.
- A centralized `.form-buttons` class ensures clean spacing between actions.

---

## 📱 Responsive Design

- Content scales appropriately for different screen sizes.
- Flexbox ensures book cards and form inputs remain usable on mobile and tablet screens.
- Minimalist layout supports future responsive breakpoints and media queries.

---

## 🔧 Future Enhancements

### 📖 Read Status Toggle
- Add a toggle button to each book to mark it as "Read" or "Unread".

### 💾 Data Persistence
- Store books using `localStorage` so the list survives page reloads.

### ➕ Dynamic Book Creation
- Submit form data to programmatically create and display new book entries.

### 🧼 Edit/Delete Capabilities
- Add buttons for removing books or editing existing ones.

---

## 💭 Reflection

This project taught me how to blend structure, style, and interactivity into a cohesive app. The modular code and clean UI make it a solid foundation for a real-world reading list or inventory system.  
As always, keep building, stay curious, and **trust the process**. 💻📚✨