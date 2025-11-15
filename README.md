# 📘 TOTLE – Frontend Developer Intern (Round 1 Submission)

This project is a **React-based Topic Search UI**, created as part of the **TOTLE Frontend Developer Internship – Round 1 Coding Task**.

The application allows users to browse topics, search them in real-time, and enjoy a clean UI with Light/Dark mode and a Lottie animation.

---

## 🚀 Features

### ✔ Real-time Topic Search  
- Instant filtering while typing  
- Case-insensitive search  
- Displays **"No topics found"** when no results match  

### ✔ Modern & Responsive UI  
- Card-based topic layout  
- Smooth theme toggle (Light/Dark)  
- Right-side Lottie animation for visual appeal  
- Fully responsive design  

### ✔ Error Handling  
- Gracefully handles empty or invalid inputs  
- No crashes or UI breaks  

### ✔ In-Memory Data  
The app uses a simple local array:  

```js
const topics = [
  { id: 1, name: "Thermodynamics", category: "Physics" },
  { id: 2, name: "Organic Chemistry", category: "Chemistry" },
  { id: 3, name: "Algebra", category: "Mathematics" },
  { id: 4, name: "Machine Learning", category: "Computer Science" },
  { id: 5, name: "Microbiology", category: "Biology" }
];

totle-topic-search/
│── public/
│   ├── favicon.ico
│   ├── index.html
│
│── src/
│   ├── assets/
│   │   └── Live_chatbot.json
│   ├── components/
│   │   └── TopicSearch.jsx
│   ├── data/
│   │   └── topic.js
│   ├── styles/
│   │   └── TopicSearch.css
│   ├── App.jsx
│   ├── main.jsx
│
│── package.json
│── README.md

git clone https://github.com/Suraj-Yadav-dev/Total-Topic-Search.git
cd Total-Topic-Search
npm install
npm run dev

Tech Stack

React.js

Vite

JavaScript

CSS

Lottie-react

Preview Link:
https://drive.google.com/file/d/161qi-FAoFj7tiAEYGKgnB8BC9gj7MPPN/preview

⬇ Direct Download:
https://drive.google.com/uc?id=161qi-FAoFj7tiAEYGKgnB8BC9gj7MPPN&export=download

Live Demo:
👉 https://total-topic-search.vercel.app/
Suraj Yadav
Frontend Developer Intern Applicant – TOTLE