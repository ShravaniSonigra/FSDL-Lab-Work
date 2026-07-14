import React from "react";
import "./App.css";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Student Feedback System</h1>
        <p>Collect learner insights elegantly and act instantly.</p>
      </header>

      <main className="app-main">
        <FeedbackForm />
        <FeedbackList />
      </main>
    </div>
  );
}

export default App;