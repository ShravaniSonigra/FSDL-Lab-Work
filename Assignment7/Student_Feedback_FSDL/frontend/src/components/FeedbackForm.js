import React, { useState } from "react";
import axios from "axios";

function FeedbackForm() {
  const [form, setForm] = useState({
    studentName: "",
    subject: "",
    rating: "",
    comment: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/feedback", form);

    alert("Feedback submitted!");

    setForm({
      studentName: "",
      subject: "",
      rating: "",
      comment: "",
    });
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <h2>Submit Feedback</h2>
      <div className="form-grid">
        <input
          name="studentName"
          placeholder="Name"
          value={form.studentName}
          onChange={handleChange}
        />

        <input
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
        />

        <input
          name="rating"
          type="number"
          placeholder="Rating (1-5)"
          min="1"
          max="5"
          value={form.rating}
          onChange={handleChange}
        />

        <textarea
          name="comment"
          placeholder="Comment"
          value={form.comment}
          onChange={handleChange}
          rows="4"
        ></textarea>
      </div>

      <button className="btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}

export default FeedbackForm;