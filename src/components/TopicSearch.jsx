import React, { useState, useEffect } from "react";
import { topics } from "../data/topic.js";
import "../styles/TopicSearch.css";
import animationData from "../assets/Live_chatbot.json";
import Lottie from "lottie-react";


const TopicSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [theme, setTheme] = useState("light");

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Apply theme to body
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const filteredTopics = topics.filter((topic) =>
    topic.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="topic-wrapper">
      
      {/* LEFT CONTENT */}
      <div className="topic-left">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <h1 className="title">Browse Topics</h1>

        <div className="search-section">
          <input
            type="text"
            className="search-input"
            placeholder="🔍 Search topics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="topic-grid">
          {filteredTopics.length > 0 ? (
            filteredTopics.map((topic) => (
              <div className="topic-card" key={topic.id}>
                <h3 className="topic-name">{topic.name}</h3>
                <p className="topic-category">{topic.category}</p>
              </div>
            ))
          ) : (
            <p className="no-results">⚠️ No topics found.</p>
          )}
        </div>
      </div>

      {/* RIGHT SIDE — LOTTIE ANIMATION */}
      <div className="topic-right">
      <Lottie animationData={animationData} className="lottie-animation" />

      </div>

    </div>
  );
};

export default TopicSearch;
