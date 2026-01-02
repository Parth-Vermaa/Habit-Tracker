# 🧭 Habit Tracker

## 📄 Description
An interactive habit tracker web application built using **HTML, CSS, and JavaScript**, focused on clean structure, meaningful interactions, and real-time habit progress tracking.

---

## 🔍 Overview
This project implements a habit tracking interface where users can **add habits, mark them as completed, track streaks, view live statistics, and remove habits when needed**.

The application emphasizes:
- Clear UI structure
- Thoughtful JavaScript-driven interactions
- State derived directly from the DOM
- Progressive enhancement from static layout to interactive system

---

## ✨ Features
- 📝 Add new habits through a form interface
- ✅ Mark habits as done with toggle support
- 🔁 Undo completion without losing previous state
- 🔥 Track streaks per habit
- 🏆 Calculate best streak dynamically
- 📊 Live stats update (total habits, completed today, best streak)
- 🗑️ Delete habits with confirmation
- 🧪 Demo habits shown on first load, removed on first real input
- 📱 Responsive layout with smooth hover and transition effects

---

## 🗂️ Project Structure
```text
Habit_Tracker/
├─ 01-html-foundation/
│  └─ index.html
│
├─ 02-css-layout/
│  ├─ styles.css
│  └─ assets/
│     └─ background.jpg
│
├─ 04-javascript-interactions/
│  ├─ index.html
│  ├─ styles.css
│  ├─ styles2.css
│  └─ script.js
│
├─ README.md
```

---

## 🧩 Application Sections

### ⌗ Header
- Displays project title
- Navigation links for in-page sections
- Designed for clarity and visual balance

### ➕ Add Habit Section
- Input field for habit name
- Frequency selector (UI-level)
- Form submission handled via JavaScript
- Demo habits removed on first real entry

### 📋 Habit List Section
- Dynamic habit cards generated using JavaScript
- Each habit card includes:
  - 🏷️ Habit name
  - 🔥 Current streak (tracked per habit)
  - ✅ Mark-as-done toggle button
  - ✕ Delete option (visible on hover)
- Habit state is stored directly on the DOM element using `data-*` attributes

### 📊 Stats Section
- Updates automatically on every interaction
- Displays:
  - 📌 Total habits
  - ✔️ Completed today
  - 🏆 Best streak across all habits
- Stats are derived from current DOM state (no global counters)

### 🦶 Footer
- Displays project identity
- Styled to visually separate content layers

---

## 🛠️ Technologies Used
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

- 🌐 **HTML5** — Semantic structure and layout  
- 🎨 **CSS3** — Styling, layout, transitions, and responsiveness  
- ⚙️ **JavaScript** — Interactions, state handling, DOM manipulation, and stats logic  
- 🧰 **Git** — Version control  
- 🐙 **GitHub** — Repository hosting  

---

## ✍️ Notes
This project intentionally avoids frameworks to focus on **fundamentals**, clear reasoning, and understanding how UI state and logic interact at the DOM level.

Future enhancements may include data persistence and backend integration.

---

## Author
**Parth Verma**  
GitHub: https://github.com/Parth-Vermaa
