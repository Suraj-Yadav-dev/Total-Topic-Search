import React from "react";
import TopicSearch from "./components/TopicSearch";
import "./styles/topicSearch.css";

const App = () => {
  return (
    <div className="app-container">
      <h1 className="title">TOTLE Topic Search</h1>
      <TopicSearch />
    </div>
  );
};

export default App;
